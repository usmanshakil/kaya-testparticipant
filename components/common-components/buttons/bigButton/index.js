import React from "react";
const Index = ({ textColor, bgColor, btnText, borderClasses, paddingX, paddingY,fontClass }) => {
    return (
        <>
            <button className={"focus:outline-none w-full uppercase rounded-lg text-white transition duration-150 ease-in-out hover:opacity-90 " + (textColor ? " " + textColor : " text-gray-800 ") + (paddingX ? " " + paddingX : "px-6") + (paddingY ? " " + paddingY : "py-12") + (bgColor ? " " + bgColor : " bg-gray-100") + (borderClasses ? " " + borderClasses : " ") + (fontClass ? fontClass : "")}>{btnText}</button>
        </>
    );
};
export default Index;
