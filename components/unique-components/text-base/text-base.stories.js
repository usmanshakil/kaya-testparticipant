import React from "react";
import TextNormal from "../text-base/index";
export default {
    title: "Text Normal",
    component: "Text Normal",
};
const Template = (args) => (
    <>
        <TextNormal {...args}>
        </TextNormal>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "",
    textColor: "",
    textSize:"text-base",
    textWeight:"font-medium",

};