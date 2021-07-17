import React from "react";

const Index = ({ imgUrl, textColor, text, }) => {
    return (
        <>
            <div className="flex items-center">
                <div>
                    <img src={imgUrl} className="w-6 h-6 mr-5" />
                </div>
                <div>
                    <p className={"text-base font-medium leading-3 f-p-t  " + (textColor ? " " + textColor : "text-gray-800")}>{text}</p>

                </div>
            </div>
        </>
    );
};
export default Index;
