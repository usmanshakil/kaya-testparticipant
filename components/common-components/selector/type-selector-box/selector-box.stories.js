import React from "react";
import TypeSelectorBox from "../type-selector-box/index";
export default {
    title: "Type Selector Box",
    component: TypeSelectorBox,
};
const Template = (args) => (
    <>
        <TypeSelectorBox/>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    textColor: "text-white",
    bgColor: "bg-indigo-700",
    border: "rounded-lg",
    text: "Now test Me!",
    font: "font-medium",
};
