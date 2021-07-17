import React from "react";

const Index = ({text,setTextValue, width, BorderRadius, textSize, height, textColor, labelText, label, border, border_style, border_width, isRequired, borderHover,disabled }) => {
    const updateValue = (event) => {
        if(setTextValue){
            setTextValue(event.target.value);
        }
    }

    return (
        <>
            <div className={"  " + (textColor ? " " + textColor : " text-theme-gray-color")}>
                {label && (
                    <label htmlFor="text" className="text-base font-normal fleading-tight f-p-t">
                        {labelText ? labelText : "New Password"}
                        {!!isRequired && <span className="text-red-500 text-lg">*</span>}
                    </label>
                )}
            </div>

            <textarea disabled={disabled} value={text ? text : ""} onChange={event => updateValue(event)} className={"pl-2 pt-2 mt-2 focus:outline-none  resize-none bg-white " + (width ? " " + width : " sm:w-1/2 ") + (BorderRadius ? " " + BorderRadius : " rounded-md ") + (textSize ? " " + textSize : " text-sm ") + (textColor ? " " + textColor : " text-gray-800 ") + (height ? " " + height : " h-32 ") + (border ? " " + border : " border-btn-light-gray border-2 ") + (border_style ? " " + border_style : " border-solid ") + (border_width ? " " + border_width : " border-2 ") + (borderHover ? " " + borderHover : " ")} />
        </>
    );
};
export default Index;
