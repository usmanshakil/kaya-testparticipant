import React from "react";
const Index = ({ textColor, children, placeholder, type, id, labelText }) => {
    return (
        <>
            <div className=" p-8 ">
                <div className={"flex flex-col mr-16 my-8 lg:my-0 xl:my-0" + (textColor ? " " + textColor : "text-gray-800")}>
                    <label htmlFor={id ? id : "text"} className="text-base font-normal leading-tight mb-3">
                        {labelText ? labelText : "New Password"}
                    </label>
                    <div className="relative">
                        <div className="absolute right-0 text-theme-gray-color hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">{children}</div>
                        <input id={id ? id : "text"} type={type ? type : "text"} className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-btn-light-gray-300 rounded-md border" placeholder={placeholder ? placeholder : "Placeholder"} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
