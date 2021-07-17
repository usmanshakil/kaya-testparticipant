import React from "react";
import Style from "./style";

const Index = ({ text, color,textColor }) => {
    return (
        <>
            <div className="flex flex-col items-start">
                <div className="flex items-center">
                    <div className="bg-white border rounded-sm border-btn-light-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className={"check-icon hidden text-white bg-theme-blue-color rounded-sm" + (color ? " " + color : "bg-indigo-700")}>
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p className={"ml-2 text-base leading-4 font-normal f-p-t " +  " " +(textColor ? textColor :  "text-custom-black")}>{text ? text : "Off"}</p>
                </div>
            </div>
            <Style />
        </>
    );
};
export default Index;
