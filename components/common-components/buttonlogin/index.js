import React from "react"
const Index = ({ textColor, bgColor, btnText, borderClasses, width ,height,btnText_size }) => {
    return (
        <>
        <button className={"focus:outline-none f-p-t rounded-lg text-white py-5 hover:opacity-90  text-base px-5" + (textColor ? " " + textColor : " text-gray-800 ") + (bgColor ? " " + bgColor : " bg-gray-100") + (borderClasses ? " " + borderClasses : " ")+" "+ width + (height ? " " + height : " ") + (btnText_size ? " " + btnText_size : " ")}>{btnText}</button>
        </>
    );
};
export default Index
