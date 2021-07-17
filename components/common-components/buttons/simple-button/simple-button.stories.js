import React from "react";
import SimpleButton from "./index";

export default {
    title: "Simple Button",
    component: SimpleButton,
};
const Template = (args) => (
    <>
        <SimpleButton {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    textColor: "text-indigo-500",
    bgColor: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300",
    borderClasses: "",
    btnText: "Text",
    paddingX: "px-6",
    paddingY: "py-2",
    fontWeight="font-medium"
};
