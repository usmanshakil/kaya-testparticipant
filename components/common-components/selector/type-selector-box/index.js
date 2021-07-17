import React from "react";
import TypeSelectorBox from "../type-selector-box/index";

const Index = ({ deleteGroups, textColor, bgColor, text, font, border, index }) => {
    return (
        <>
            <button
                onClick={(e) => {
                    deleteGroups(e.currentTarget.textContent, index);
                }}
                className={"leading-3 focus:outline-none  px-10 h-40 justify-center  flex items-center " + (textColor ? " " + textColor : " text-gray-800 ") + (bgColor ? " " + bgColor : " bg-gray-100") + (border ? " " + border : "rounded-lg") + (font ? " " + font : "font-medium")}
            >
                {text}
            </button>
        </>
    );
};
export default Index;
