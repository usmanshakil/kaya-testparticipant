import React, { useState } from "react";
import TextSmall from "../../common-components/text/small";
import SimpleButton from "../../unique-components/simple-button";
import OutsideClick from "react-outside-click-handler";

const Index = ({ setShowPopoup }) => {
    return (
        <>
            <div className={"bg-modal-overlay inset-0 fixed"}>
                <div className="flex justify-center items-center w-full h-screen">
                    <section className="sm:w-5/12 w-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
                        <OutsideClick onOutsideClick={() => setShowPopoup(false)}>
                            <div className="bg-white   rounded-lg mt-8">
                                <div className="w-full">
                                    <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={() => setShowPopoup(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8C8C8C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                </div>

                                <div className=" sm:px-12 px-4 pb-8 font-normal leading-6">
                                    <div>
                                        <TextSmall text="Event Added" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-lg" alignment="sm:text-center" />
                                    </div>
                                    <div className="pt-6">
                                        <TextSmall text="Event added to calendar successfully" textColor="text-theme-gray-color" fontWeight="font-normal" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                                    </div>
                                    <div className="py-12" onClick={() => setShowPopoup(false)}>
                                        <div className="flex flex-col items-center justify-between">
                                            <SimpleButton textColor="text-theme-blue-color" bgColor="bg-btn-wave-violet " borderClasses="" btnText={"Ok"} width="sm:w-40 w-full" fontWeight="font-normal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OutsideClick>
                    </section>
                </div>
            </div>
        </>
    );
};
export default Index;
