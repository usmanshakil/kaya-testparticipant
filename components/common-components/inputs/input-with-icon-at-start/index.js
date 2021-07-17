import React from "react";
const Index = ({ textColor, children, placeholder, type, id }) => {
    return (
        <>
            <div className={"sm:p-8"}>
                <div className="sm:flex flex-col sm:mr-16 sm:my-8 lg:my-0 xl:my-0">
                    <div className="sm:flex sm:flex-col sm:mr-16 sm:my-8 lg:my-0 xl:my-0">
                        <div className={"relative" + (textColor ? " " + textColor : " text-theme-gray-color")}>
                            <div className="absolute flex items-center pl-4 h-full cursor-pointer">{children}</div>
                            <input type={type ? type : "text"} id={id ? id : "id"} className="focus:outline-none focus:border focus:border-indigo-700 font-normal sm:w-64 w-full h-10 flex items-center pl-12 text-sm border-btn-light-gray rounded border-2  " placeholder={placeholder ? placeholder : "placeholder"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
