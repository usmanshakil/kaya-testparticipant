import Style from "./style"
import React from "react";
const Index = ({ btnText , ImgUrl }) => {
    return (
       <>
       <div className="flex items-center justify-between bg-mobile-menu-bg menu-in-active border-l-4 border-theme-blue-color w-64">
    <p className="text-theme-blue-color f-p-t text-lg font-semibold leading-6 py-16 pl-12 ">{btnText ? "" + btnText : "Account"}</p>
    <div className="flex-shrink-0 flex items-center inset-0 -mr-4 w-24 h-24 relative">
                    <img className="w-full h-full   object-cover object-center" src={ImgUrl?ImgUrl:"/static/images/profile.svg"} alt="" />
                </div>
       </div>
       <Style/>
       </>
    );
}

export default Index;