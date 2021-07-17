import React from "react";
const Index = ({textColor, text, alignment, textSize, fontClass, lineHeight,fontWeight}) => {
    return (
        <>

        <h3 className={"w-full f-r-t " + " " + (lineHeight ? lineHeight : "leading-tight") + (textColor ? " " + textColor : " text-black ") + (textSize ? " " + textSize : " text-5x1 ") + " " + alignment + " " + ( fontClass ? fontClass : " ") + " "+(fontWeight ? fontWeight : " font-normal") }>{text ? text : " Title"}</h3>

        </>
    );
};
export default Index;
