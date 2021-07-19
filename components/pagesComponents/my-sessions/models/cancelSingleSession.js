import React, { useState } from "react";
import TextSmall from "../../../common-components/text/small";
import OutsideClick from "react-outside-click-handler";
import SimpleButton from "../../../unique-components/simple-button"
import { deleteParticipantGroup, updateParticipantGroup } from "../../../../apii/graphql/customMutations";
import { getGroup } from "../../../../apii/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import {emailRequest} from "../../../../config";
import { apii } from "../../../../helpers/apii";
const Index = ({ setModal, current, participant, refreshList, dispatch }) => {
    const [loading, setLoading] = useState(false);

    const leaveGroup = () => {
        let currentSession = null;
        participant.groups.items.forEach(single => {
            if(single?.group.id === current.groupId){
                let sessionIds = JSON.parse(single.sessionId);
                sessionIds = sessionIds.filter(item => item !== current.id);
                if(sessionIds.length){
                    single.sessionId = JSON.stringify(sessionIds);
                    currentSession = single;
                }
            }
        })

        if(!currentSession){
            API.graphql(graphqlOperation(deleteParticipantGroup, { input: { id: current.groupParticipantId } })).then(async(res) => {
                removeGroup(res.data.deleteParticipantGroup);
            }).catch(err => {
                if(err.data && err.data?.deleteParticipantGroup){
                    removeGroup(err.data.deleteParticipantGroup);
                }
            });
        } else {
            let payload = {
                id: currentSession.id,
                sessionId: currentSession.sessionId
            }
            API.graphql(graphqlOperation(updateParticipantGroup, { input: payload })).then(async(res) => {
                removeGroup(res.data.updateParticipantGroup);
                dispatch({
                    type: "SET_PARTICIPANT",
                    payload: participant
                });
            }).catch(err => {
                if(err.data && err.data?.updateParticipantGroup){
                    removeGroup(err.data.updateParticipantGroup);
                }
            });
        }
    };
    const removeGroup = (item) => {
        let data = current.group;
        const payload = {
            type: "canceledGroup",
            params: {
                participantName: participant.firstName,
                participantEmail: participant.email,
                clinicianName:  data.clinician.items[0].firstName,
                clinicianEmail: data.clinician.items[0].email,
                groupName: item.group.name
            }
        }
        apii.postApi(emailRequest, payload).then((res)=>{}).catch((err)=>{})
        refreshList(current.id);
        setModal(false);
        setLoading(false);
    };

    return (
        <>
        <div className={"bg-modal-overlay inset-0 fixed z-50"}>
            <div className="w-full h-screen ">
                <div className="flex justify-center items-center">
                    <section className="sm:w-5/12 w-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
                        <OutsideClick onOutsideClick={()=>setModal(false)}>
                            <div className="bg-white   rounded-lg mt-8">
                                <div className="w-full">
                                    <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={()=>setModal(false)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-x"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#8C8C8C8C"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                </div>

                                <div className=" sm:px-12 px-4 pb-8 font-normal leading-6">
                                    <div>
                                        <TextSmall
                                            text="Leave Group"
                                            textColor="text-theme-blue-color"
                                            fontWeight="font-medium"
                                            lineHeight="leading-6"
                                            fontclassName="f-p-t"
                                            textSize="text-lg"
                                            alignment="sm:text-center"
                                        />
                                    </div>
                                    <div className="pt-6">
                                        <TextSmall
                                            text="Are you sure you want to cancel the following session? You will be charged for the session if you do not cancel within 24 hours of session start time."
                                            textColor="text-theme-gray-color text-center"
                                            fontWeight="font-normal"
                                            lineHeight="leading-6"
                                            fontclassName="f-p-t"
                                            textSize="text-base"
                                            alignment="text-left"
                                        />
                                    </div>
                                    <div className="py-12" onClick={()=>leaveGroup()}>
                                        <div className="flex flex-col items-center justify-between">
                                            <SimpleButton
                                                textColor= "text-theme-blue-color"
                                                bgColor= "bg-btn-wave-violet "
                                                borderClasses= ""
                                                disabled={loading}
                                                btnText= {loading ? "Leaving..." : "Leave Group"}
                                                width="sm:w-40 w-full"
                                                fontWeight= "font-normal"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OutsideClick>
                    </section>
                </div>
            </div>
        </div>
        </>
    );
};
export default Index;
