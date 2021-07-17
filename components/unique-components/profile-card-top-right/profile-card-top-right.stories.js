import React from "react";
import TopRightProfile from "../profile-card-top-right/index";
export default {
    title: "Top Right Profile",
    component: "Top Right Profile",
};
const Template = (args) => (
    <>
        <TopRightProfile {...args}>
        </TopRightProfile>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    name: "",
    textColor: "",
    ImgUrl: ""
};