import React from "react";
import AvatarWithoutImage from "../avatr-withoutpicture/index";
export default {
    title: "Avatar Without Image",
    component: AvatarWithoutImage,
};
const Template = (args) => (
    <>
        <AvatarWithoutImage />
           
        
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    BorderRadius: "rounded-full",
    height: "h-12",
    width: "w-12",
};
