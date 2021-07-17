import React from "react";
import Tag from "../../tags/tag-single";
const Index = () => {
    return (
        <>
            <div className="px-2 sm:flex">
                <Tag text="Anxiety" textColor="text-theme-blue-color" />
                <Tag text="CBT" textColor="text-theme-blue-color" />
                <Tag text="Social" textColor="text-theme-blue-color" />
            </div>
        </>
    );
};
export default Index;
