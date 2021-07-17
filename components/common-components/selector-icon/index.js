import React from "react";
const Index = ({ option1, option2,option3, textColor, label, labelText, height,isRequired }) => {
    return (
        <>
            <div className="rounded-lg relative  cursor-pointer f-p-t">
                <div className={"" + (textColor ? " " + textColor : " text-theme-gray-color")}>
                    {label && (
                        <label htmlFor="text" className="text-base font-normal fleading-tight">
                            {labelText ? labelText : "New Password"}{!!isRequired && <span className="text-red-500 text-lg">*</span>}
                        </label>
                    )}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none inset-0 m-auto mr-2 mb-3" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9E9E9E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
                <select aria-label="Selected tab" className={"focus:outline-none  w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none  h-12" }>
                    <option className="text-xs text-theme-gray-color bg-white outline-none">{option1 ? option1 : ""}</option>
                    <option className="text-xs text-theme-gray-color bg-white outline-none">{option2 ? option2 : "Option 1"}</option>
                    <option className="text-xs text-theme-gray-color bg-white outline-none">{option3 ? option3 : "Option 2"}</option>
                </select>
            </div>
        </>
    );
};
export default Index;
