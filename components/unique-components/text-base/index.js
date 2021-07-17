import React from "react";
const Index = ({ text, textColor, textWeight, textSize }) => {
    return (
       <>
       <p className={"flex-shrink-0 leading-6 f-p-t  " + (textColor ? "" + textColor : " text-theme-gray-color ")+ (textWeight ? "   " + textWeight : " font-regular ")+(textSize ? " " + textSize : " text-base ") }>{text ? "" + text : ""}</p>
       </>
    );
}

export default Index;