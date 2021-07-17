import React from "react";
const Index = ({ text, textColor }) => {
    return (
        <>
            <div className='pt-2'>
                <div className={"mr-3 rounded-lg font-medium bg-single-tags flex items-center justify-between py-2 px-6 " + (textColor ? textColor : "text-theme-blue-color")}>
                    <span className="text-xs font-medium f-p-t mr-2">{text ? text : "prosperity"}</span>
                </div>
            </div>
        </>
    );
};
export default Index;
