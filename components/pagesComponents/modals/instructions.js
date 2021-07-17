import React from "react";
import TextSmall from "../../common-components/text/small";
import OutsideClick from "react-outside-click-handler";

const Index = ({show,setModal}) => {
  return (
      <>
          <div className={"bg-modal-overlay inset-0 fixed"}>
              <div className="w-full h-screen">
                  <div>
                      <section className="w-screen h-screen flex justify-center items-center px-4 sm:px-0">
                          <OutsideClick onOutsideClick={() => setModal(false)}>
                              <div className="bg-white  rounded-lg">
                                  <div className="w-full">
                                      <div className="flex cursor-pointer justify-end pt-6 pr-6" onClick={() => setModal(false)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8C8C8C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                              <line x1="18" y1="6" x2="6" y2="18" />
                                              <line x1="6" y1="6" x2="18" y2="18" />
                                          </svg>
                                      </div>
                                  </div>

                                  <div className=" sm:px-12 px-4 pb-8 font-normal leading-6 ">
                                      <div className="pb-3">
                                          <TextSmall text="How to connect to your session" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-lg" alignment="text-center" />
                                      </div>
                                      <div className="pb-3">
                                          <TextSmall text="Connect to your session" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-lg" alignment="text-center" />
                                      </div>
                                      <div className="text-left">
                                          <TextSmall text="Desktop:" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="sm:text-left text-left" />
                                          <TextSmall text="1. Click on the Google Meet link below at 5 minutes before your session start time" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="2. Your browser will redirect you and open the Google Meet app on your device" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="3. You will be placed in a virtual waiting room" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="4. Your therapist will let you into the group at session start time" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                      </div>
                                      <div className="pt-6">
                                          <TextSmall text="Mobile:" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="1. Download the Google Meet app " textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="2. Sign up / Log in" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          <TextSmall text="3. Connect to your session" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                      </div>
                                      {/* <div className="mt-6 w-11/12 flex">
                                          <div>
                                              <TextSmall text="Session Link:" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          </div>
                                          <div className="ml-5">
                                              <TextSmall text="https://www.zoom.us/group" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          </div>
                                      </div> */}
                                      {/* <div className="mt-3 w-11/12 flex">
                                          <div>
                                              <TextSmall text="Meeting ID:" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          </div>
                                          <div className="ml-8">
                                              <TextSmall text="325 566 235" textColor="text-theme-gray-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                          </div>
                                      </div> */}
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
