import React from "react";
import Sidebar from "../../major-components/sideBar"
import TopRightProfile from "../../unique-components/profile-card-top-right";
import TextNormal from "../../unique-components/text-base";
import SearchWithSelectGroup from "../../unique-components/search-select-group";
import GroupAnxietyManagment from "../../major-components/group-anxiety-managment";
import SimpleButton from "../../common-components/buttons/simple-button"
const Index = ({children}) => {
    return (
        <>
        <div className="flex w-full mt-20  sm:mt-32 xl:mt-0">
            <div
                className="w-full h-full bg-no-repeat bg-cover"
                style={{backgroundImage: `url(${"/static/images/bg_top.svg"})`}}
            >
                <div className="w-full h-full">
                    <div className="bg-cover">
                        <div>
                            <div className="flex justify-end pt-10 pb-3">
                                <TopRightProfile />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Index;
