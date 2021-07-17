import React from "react"
const Index = ({ textColor, bgColor, btnText, borderClasses, width, fontWeight , functionName ,height ,text_size, type,disabled}) => {
    return (
        <>
        <button
           disabled={disabled}
            type={type ? type : "button"}
            className={"focus:outline-none f-p-t text-white py-3  px-5 transition duration-150 ease-in-out hover:opacity-90 rounded " + (text_size ? " " + text_size: "text-base") +(fontWeight ? " " + fontWeight: "font-semibold") + (textColor ? " " + textColor : " text-home-blue-color") + (bgColor ? " " + bgColor : " bg-theme-blue-color")  +(borderClasses ? " " + borderClasses : "  ") + " " + ( width  ) + " " + (height) }
            onClick={() => functionName ? functionName(): ""}
        >{btnText}</button>
        </>
    );
};
export default Index
