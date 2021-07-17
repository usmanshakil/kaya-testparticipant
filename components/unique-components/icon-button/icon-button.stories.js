import React from "react";
import IconButton from "../icon-button/index";
export default {
    title: "Icon Button",
    component: "Icon Button",
};
const Template = (args) => (
    <>
        <IconButton {...args}>
        
        </IconButton>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "Back to Groups",
    bgColor: "",
    textColor : ""
};