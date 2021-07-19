import React, { useState } from "react";
import TextSmall from "../../../common-components/text/small/index";
import SimpleButton from "../../../unique-components/simple-button/index";
import SimpleInput from "../../../common-components/textInput/index"
import { getParticipant } from "../../../../apii/graphql/customQueries";
import { deleteParticipantGroup, deleteReport, deleteParticipant } from "../../../../apii/graphql/mutations";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { apii } from "../../../../helpers/apii";
import { disableUser, deleteUser, emailRequest } from "../../../../config";
import Router from "next/router";

const Index = ({ type, setType, id, participant }) => {

    const [value, setValue] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const deleteOrPause = () => {
        if(type === "delete" && value === "DELETE"){
            setProcessing(true);
            API.graphql(graphqlOperation(getParticipant, { id })).then((res) => {
                let participantId = res.data.getParticipant.id;
                let groupConnection = res.data.getParticipant.groups.items;
                let reports = res.data.getParticipant.reports.items;
                deleteGroups(groupConnection);
                deleteReports(reports);
                deleteParticipantUser(participantId,res.data.getParticipant.username );
            }).catch((err) => {
                console.error("error", err);
            });
        } else if(type === "pause"  && value === "PAUSE"){
            setProcessing(true);
            api.postApi(disableUser, {
                username: participant.username
            }).then(res => {
                setProcessing(false);
                setSuccess(true);
                setTimeout(function () {
                    logOut();
                }, 5000);
            });
        }
    };

    const deleteParticipantUser = async(id, username) => {
        api.postApi(deleteUser, {
            username: username
        }).then(async (res) => {
           await API.graphql(graphqlOperation(deleteParticipant, { input: {id: id} })).then(async(res) => {

                const payload = {
                    type: "participantAccountDeleted", 
                    params: {
                      participantName: participant.firstName,
                      participantEmail: participant.email
                    }
                  }
                await api.postApi(emailRequest , payload).then((res)=>{
                }).catch((err)=>{
                    console.log(err);
                })

                  
                setSuccess(true);
                setProcessing(false);
                setTimeout(function () {
                    logOut();
                }, 5000);
            })
        });
    };

    const deleteGroups = (groups) => {
        groups.forEach(item => {
            API.graphql(graphqlOperation(deleteParticipantGroup, { input: {id: item.id} })).then((res) => {

            })
        })
    };

    const deleteReports = (reports) => {
        reports.forEach(item => {
            API.graphql(graphqlOperation(deleteReport, { input: {id: item.id} })).then((res) => {

            })
        })
    };

    const logOut = () => {
        Auth.signOut();
        Router.push("/login");
    };

    const checkDisabled = () => {
        if(type === "delete" &&  value === "DELETE"){
            return true;
        }
        return type === "pause" && value === "PAUSE";
    };

    return (
        <>
        <div className=" px-12 pb-8 font-normal leading-6 ">
            <div className="mb-6">
                <TextSmall
                    text={success ? ("Account "+ type+"d") : (type === "delete" ? "We're Sorry to See you go" : "We’ll be here when you return")}
                    textColor="text-theme-blue-color"
                    fontWeight="font-medium"
                    lineHeight="leading-6"
                    fontclassName="f-p-t"
                    textSize="text-2xl"
                    alignment="text-center"
                />
            </div>
            <div className="ml-5 mt-2 mb-6">
                {
                    !success && type === "delete" ?
                        <TextSmall
                            text="Are You Sure?"
                            textColor="text-theme-blue-color"
                            fontWeight="font-normal"
                            lineHeight="leading-6"
                            fontclassName="f-p-t"
                            textSize="text-base"
                            alignment="text-left"
                        /> : ""
                }

                <TextSmall
                    text={success ? ("Your account has been successfully "+ type+"d") : (type === "delete" ? "Once you confirm, your data will be permanently deleted." : "Your account will be paused for 10 months. Your preferences will still be available when you return. We hope to see you soon.")}
                    textColor="text-theme-gray-color"
                    fontWeight="font-normal"
                    lineHeight={"leading-6 "+(success ? "text-center" : "")}
                    fontclassName="f-p-t"
                    textSize="text-base"
                    alignment="text-left"
                />
                {
                    !success ?
                    <div className="mt-12">
                        <TextSmall
                            text={"Type "+type+" below to confirm"}
                            textColor="text-black uppercase"
                            fontWeight="font-normal"
                            lineHeight="leading-6"
                            fontclassName="f-p-t"
                            textSize="text-base"
                            alignment="text-left"
                        />
                        <SimpleInput
                            textColor="text-black"
                            placeholder=""
                            type="text"
                            id="imput1"
                            setTextValue={setValue}
                        />
                    </div> : ""
                }

            </div>
        </div>
        <div className=" py-4">
            <div className="flex flex-col items-center justify-between">
                {
                    success ? <div className="sm:flex">
                        <SimpleButton
                            onClick={logOut}
                            textColor={"text-theme-blue-color capitalize"}
                            bgColor={"bg-btn-wave-violet"}
                            borderClasses=""
                            btnText={"Close"}
                            width="w-full"
                            fontWeight="font-normal"
                        />
                    </div> :
                        <div className="sm:flex">
                            <div onClick={() => setType("")}>

                                <SimpleButton
                                    textColor="text-theme-blue-color"
                                    bgColor="bg-btn-wave-violet "
                                    borderClasses=""
                                    btnText="Cancel"
                                    width=" w-full"
                                    fontWeight="font-normal"
                                />
                            </div>
                            <div className="sm:ml-4 py-4 sm:py-0">
                                <SimpleButton
                                    onClick={deleteOrPause}
                                    disabled={!checkDisabled()}
                                    textColor={(checkDisabled() ? "text-theme-blue-color" : "text-gray-500") +" capitalize"}
                                    bgColor={(checkDisabled() ? "bg-btn-wave-violet " : "bg-gray-200")}
                                    borderClasses=""
                                    btnText={processing ? "Processing..." : type+" Your Account"}
                                    width="w-full"
                                    fontWeight="font-normal"
                                />
                            </div>

                        </div>
                }
            </div>
        </div>
        </>
    );
};
export default Index;
