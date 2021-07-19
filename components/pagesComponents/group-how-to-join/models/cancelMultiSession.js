import React, { useState, useEffect } from "react";
import MessageBox from "../../../unique-components/text-box/message-box"
import TextSmall from "../../../common-components/text/small";
import OutsideClick from "react-outside-click-handler";
import SimpleButton from "../../../unique-components/simple-button";
import { deleteParticipantGroup } from "../../../../apii/graphql/customQueries";
import { getGroup } from "../../../../apii/graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import sortArray from "array-sort";
import { emailRequest } from "../../../../config";
import { apii } from "../../../../helpers/apii";
import Router from "next/router";

const Index = ({ setModal, group, participant,setConfirm }) => {
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState(null);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        calculateCurrent(group.sessions.items, new Date());
    }, [group]);

    const calculateCurrent = (value, date) => {
        const array = sortArray(value, "sessionDate");
        let position = 0;
        array.forEach((item) => {
            if (date > new Date(item.sessionDate)) {
                position = position + 1;
            }
        });
        setPosition(position);
    };

    const leaveGroup = () => {
        setLoading(true);
        API.graphql(graphqlOperation(getGroup, { id: group.id }))
            .then((res) => {
                removeGroup(res.data.getGroup);
            })
            .catch((err) => {
                if (err && err.data && err.data.getGroup) {
                    removeGroup(err.data.getGroup);
                }
            });
    };

    const removeGroup = async(data) => {
        let single = data.participants.items.find((item) => item.participant.id === participant.id);
        await API.graphql(graphqlOperation(deleteParticipantGroup, { input: { id: single.id } }))
            .then(async(res) => {
              const payload = {

                type: "canceledGroup", 
                params: {
                  participantName: participant.firstName,
                  participantEmail: participant.email,
                  clinicianName:  data.clinician.items[0].firstName,
                  clinicianEmail: data.clinician.items[0].email,
                  groupName: data.name
                }
        }
        await apii.postApi(emailRequest , payload).then((res)=>{
            
        }).catch((err)=>{

        })

                removeGroupResponse();
            })
            .catch((err) => {
                if (err.data && err.data.deleteParticipantGroup) {
                    removeGroupResponse();
                }
            });
    };

    const removeGroupResponse = () => {
        setModal(false);
        setLoading(false);
        setConfirm(true);

        let payload = {
            type: position < 2 ? "participantLeftWithRefund" : "participantLeftWithoutRefund",
            params: {
                email: participant.email,
                participantName: participant.fullName,
                groupName: group.name,
                groupId: group.id,
                message,
                
            },
        };
        apii.postApi(emailRequest, payload)
            .then((res) => {})
            .catch((err) => {
                console.error("err", err);
            });
        // Router.push("/my-groups");
    };

    const positionCalls = () => {
        if (position < 2) {
            return "We understand that sometimes a group is not a fit. Please confirm you would like to leave this group. You will get half refund on canceling this group. Please contact us at help@kayacare.com to claim your refund.";
        } else {
            return "We understand that sometimes a group is not a fit. Please confirm you would like to leave this group. We are unable to provide refunds for any pre-paid groups or unused sessions.";
        }
    };
    return (        
        <>
            <div className={"bg-modal-overlay inset-0 fixed z-50"}>
                <div className="w-full h-screen ">
                    <div className="flex justify-center items-center">
                        <section className="sm:w-5/12 w-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
                            <OutsideClick onOutsideClick={() => setModal(false)}>
                                <div className="bg-white   rounded-lg mt-8 overscroll-y-auto h-full">
                                    <div className="w-full">
                                        <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={() => setModal(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8C8C8C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className=" sm:px-12 px-4 pb-8 font-normal leading-6">
                                        <div>
                                            <TextSmall text="Leave Group" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontClass="f-p-t" textSize="text-lg" alignment="sm:text-center" />
                                        </div>
                                        <div className="pt-6">
                                            <TextSmall text={positionCalls()} textColor="text-theme-gray-color" fontWeight="font-normal text-center" lineHeight="leading-6" fontClass="f-p-t" textSize="text-base" alignment="text-left" />
                                        </div>
                                        <div className="pt-12 pb-3">
                                            <TextSmall text="Please explain why you would like to leave this group?" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontClass="f-p-t" textSize="text-lg" alignment="text-left" />
                                            <div>
                                                {/* <MessageBox width="w-full" height="h-64" BorderRadius=" rounded-md" textSize="text-base" textColor="text-theme-gray-color" /> */}                                                
                                                <textarea onChange={e => setMessage(e.target.value)} className="w-full h-64 rounded-md text-base text-theme-gray-color  border-2 pl-2 pt-2 mt-2 focus:outline-none  resize-none bg-white "></textarea>
                                            </div>
                                        </div>
                                        <div className="py-12" onClick={() => leaveGroup()}>
                                            <div className="flex flex-col items-center justify-between">
                                                <SimpleButton textColor="text-theme-blue-color" fontClass='f-p-t' bgColor="bg-btn-wave-violet " borderClasses="" disabled={loading} btnText={loading ? "Leaving..." : "Leave Group"} width="sm:w-40 w-full" fontWeight="font-normal" />
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
