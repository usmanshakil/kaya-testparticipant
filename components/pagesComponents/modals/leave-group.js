import React, { useState } from "react";
// import MessageBox from "../../unique-components/text-box/message-box";
import TextSmall from "../../common-components/text/small";
import SimpleButton from "../../unique-components/simple-button"
import OutsideClick from "react-outside-click-handler";
import { deleteParticipantGroup } from "../../../apii/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import Router from "next/router";


const Index = ({show,setLeave, group, participant, setConfirm}) => {

  const [loading, setLoading] = useState(false);

  const leaveGroup = () => {
    const relationFinder = group.participants.items.find(item => item.participant.id === participant.id);
      setLoading(true);
    API.graphql(graphqlOperation(deleteParticipantGroup, { input: { id: relationFinder.id } })).then((res) => {
        setLeave(false);
        setLoading(false);
        Router.push("/my-sessions");
    }).catch(err => {
        if(err.data.deleteParticipantGroup){
            setLeave(false);
            setLoading(false);
            Router.push("/my-sessions");
        }
    });
  };

    return (
        <>
        <div className={"bg-modal-overlay inset-0 fixed"}>
          <div className="w-full h-screen ">
            <div className="flex justify-center items-center">
              <section className="sm:w-5/12 w-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
                <OutsideClick onOutsideClick={()=>setLeave(false)}>
                  <div className="bg-white   rounded-lg mt-8">
                    <div className="w-full">
                      <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={()=>setLeave(false)}>
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
                            text="We understand that sometimes a group is not a fit. Please confirm you would like to leave this group. We are unable to provide refunds for any pre-paid groups or unused sessions."
                            textColor="text-theme-gray-color"
                            fontWeight="font-normal"
                            lineHeight="leading-6"
                            fontClass="f-p-t"
                            textSize="text-base"
                            alignment="text-left"
                        />
                      </div>
                        {/*<div className="pt-12 pb-3">*/}
                        {/*<TextSmall*/}
                        {/*text="Please explain why you would like to leave this group?"*/}
                        {/*textColor="text-theme-blue-color"*/}
                        {/*fontWeight="font-medium"*/}
                        {/*lineHeight="leading-6"*/}
                        {/*fontclassName="f-p-t"*/}
                        {/*textSize="text-lg"*/}
                        {/*alignment="text-left"*/}
                        {/*/>*/}
                        {/*<div>*/}
                        {/*<MessageBox*/}
                        {/*width="w-full" height="h-64" BorderRadius= " rounded-md"*/}
                        {/*textSize= "text-base" textColor= "text-theme-gray-color"/>*/}

                        {/*</div>*/}
                        {/*</div>*/}
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
