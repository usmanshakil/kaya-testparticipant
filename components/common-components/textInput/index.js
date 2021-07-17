import React from "react";
const Index = ({ setTextValue, label, labelText, textColor, placeholder, type, id, height, disabled, borderColor, placeholderText, isRequired, borderHover }) => {
    return (
        <>
            {/* Remove w-64 */}
            <div className={textColor ? " " + textColor : " text-custom-black"}>
                {label && (
                    <label htmlFor="text" className="text-base text-custom-black font-normal fleading-tight f-p-t">
                        {labelText ? labelText : "New Password"} {!!isRequired && <span className="text-red-500 text-lg">*</span>}
                    </label>
                )}
                <input onChange={(e) => setTextValue(e.target.value)} required className={"px-4 py-2 w-full rounded-lg mt-2 focus:outline-none  border-2 text-custom-black" + (placeholderText ? "" + placeholderText : "placeholder-black ") + (height ? " " + height : "h-12") + (borderColor ? " " + borderColor : " ") + (borderHover ? " " + borderHover : " ")} disabled={disabled} type={type ? type : "text"} id={id ? id : "id"} placeholder={placeholder ? placeholder : ""} />
            </div>
            {/* change name, id and type */}
        </>
    );
};
export default Index;
