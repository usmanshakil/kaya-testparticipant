import React, { useState } from "react";
import TextSmall from "../../../common-components/text/small";
import SimpleButton from "../../../unique-components/simple-button";
import RadioButtons from "../../../unique-components/radio-buttons";

function Initials({ setType }) {

    const [value, setValue] = useState("delete");

    const changeValue = () => {
        setType(value);
    };

    return(
        <>
        <div className=" px-12 pb-8 font-normal leading-6 ">
            <div className="mb-6">
                <TextSmall
                    text="Delete Account"
                    textColor="text-theme-blue-color"
                    fontWeight="font-medium"
                    lineHeight="leading-6"
                    fontclassName="f-p-t"
                    textSize="text-2xl"
                    alignment="text-center"
                />
            </div>
            {/*<RadioButtons value="pause" onChange={setValue} text="Pause this account"/>*/}
            {/*<div className="ml-5 mt-2 mb-6">*/}
                {/*<TextSmall*/}
                    {/*text="Joining groups will be disabled when your account is paused.*/}
                      {/*Your preferences will be available."*/}
                    {/*textColor="text-theme-gray-color"*/}
                    {/*fontWeight="font-normal"*/}
                    {/*lineHeight="leading-6"*/}
                    {/*fontclassName="f-p-t"*/}
                    {/*textSize="text-base"*/}
                    {/*alignment="text-left"*/}
                {/*/>*/}
            {/*</div>*/}
            <div className="flex items-center">
                <div className="flex items-center">
                    <p className="pl-6 text-theme-blue-color text-base leading-6 f-p-t font-normal">Permanently this account</p>
                </div>

            </div>
            <div className="ml-5 mt-2">
                <TextSmall
                    text="This account will no longer be available, and all the data will be permanently deleted. There will be no way to restore your account."
                    textColor="text-theme-gray-color"
                    fontWeight="font-normal"
                    lineHeight="leading-6"
                    fontclassName="f-p-t"
                    textSize="text-base"
                    alignment="text-left"
                />
            </div>
        </div>
        <div className="w-full py-4">

            <div className="flex flex-col items-center justify-between">
                <div onClick={changeValue}>
                    <SimpleButton
                        textColor= "text-theme-blue-color"
                        bgColor= "bg-btn-wave-violet "
                        borderClasses= ""
                        btnText= "Continue"
                        width=""
                        fontWeight= "font-normal"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Initials;