import React from "react";
import TextSmall from "../../common-components/text/small";
import OutsideClick from "react-outside-click-handler";
import SimpleButton from "../../unique-components/simple-button";
import Router from "next/router";

const Index = ({ setConfirm }) => {
    const modalConfirm = () => {
        setConfirm(false);
        Router.push("/my-groups");
    };
    return (
        <>
            <div className={"bg-modal-overlay inset-0 h-screen fixed z-50"}>
                <div className="w-full h-full ">
                    <div className="flex justify-center h-full items-center">
                        <section className="sm:w-4/12 w-full h-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
                            <OutsideClick onOutsideClick={() => modalConfirm()}>
                                <div className="bg-white     rounded-lg mt-8">
                                    <div className=" px-16 py-8 font-normal leading-6 ">
                                        <div>
                                            <TextSmall text="You have been successfully removed from this group!" textColor="text-theme-blue-color" fontWeight="font-medium" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-lg" alignment="text-center" />
                                        </div>
                                    </div>
                                    <div className="w-full pb-12">
                                        <div className="flex flex-col items-center justify-between" onClick={() => modalConfirm()}>
                                            <SimpleButton textColor="text-theme-blue-color" bgColor="bg-btn-wave-violet " borderClasses="" btnText="Close" width="" fontWeight="font-normal" />
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
