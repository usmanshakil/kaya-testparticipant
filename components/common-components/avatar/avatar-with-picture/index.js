import React from "react";
import AvatarWithImage from "../avatar-with-picture/index";

const Index = ({ children, BorderRadius, width, height, imgUrl, ImgBorderRadius }) => {
    return (
        <>
            <div>
                <div className="">
                    <div className={" border-4 border-indigo-800  flex justify-center item-center relative" + (BorderRadius ? " " + BorderRadius : "rounded-lg") + (width ? " " + width : "w-20 ") + (height ? " " + height : "h-20 ")}>
                        <img className={"  inset-0 object-center object-cover w-full h-full " + (ImgBorderRadius ? "rounded-lg " + ImgBorderRadius : "")} src={imgUrl} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
