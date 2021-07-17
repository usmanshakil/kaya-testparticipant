import React from "react";
import MenuActive from "../menu-item-active/index";
export default {
    title: "Menu Active",
    component: "Menu Active",
};
const Template = (args) => (
    <>
        <MenuActive {...args}>
        </MenuActive>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    btnText: "",
    ImgUrl: ""
};