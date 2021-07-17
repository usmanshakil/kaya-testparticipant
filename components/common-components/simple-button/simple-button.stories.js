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
    textColor: "text-indigo-400",
    bgColor: "bg-gray-100 hover:bg-gray-200 focus:bg-gray-200",
    borderClasses: "",
    btnText: "Change Password",
    width:"",
    fontWeight: "font-semibold",
};
