import React from "react";

const Index = ({ newSize, addGroups, textColor, bgColor, font, border, text_size, item, finalGroups }) => {
    const checkOccurrence = () => {
        let temp = false;
        finalGroups &&
            finalGroups.forEach((element) => {
                if (element.id === item.id) {
                    temp = true;
                }
            });
        return temp;
    };
    return (
        <>
            <button
                onClick={() => {
                    addGroups(item);
                }}
                className={"cursor-pointer leading-6 focus:outline-none  w-48 h-40 justify-center  flex items-center rounded-lg p-4"  + (textColor ? " " + textColor : " text-black ") + (bgColor ? " " + bgColor : " bg-gray-100") + (border ? " " + border : "rounded-lg") + (font ? " " + font : "font-medium") + (text_size ? " " + text_size : "text-base") + (checkOccurrence() ? " bg-theme-blue-color text-white" : " bg-transparent")}
            >
                {item.name}
            </button>
        </>
    );
};
export default Index;
