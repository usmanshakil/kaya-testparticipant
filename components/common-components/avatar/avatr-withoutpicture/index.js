import React from "react";
import AvatarWithoutImage from "../avatr-withoutpicture/index";

const Index = ({ children, BorderRadius, width, height }) => {
    return (
        <>
            <div>
                <div className="">
                    <div className={" border-2 border-theme-blue-color  flex justify-center item-center" + (BorderRadius ? " " + BorderRadius : " rounded-lg ") + (width ? " " + width : " w-12 ") + (height ? " " + height : " h-12 ")}>
                        <div className="p-3 "> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#434190" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={12} cy={7} r={4} />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg></div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
