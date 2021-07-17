import React from "react";
import SingleTag from "./index";

export default {
    title: "Single Tag",
    component: SingleTag,
};
const Template = (args) => (
    <>
        <SingleTag {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "Simple tag",
    textColor: "text-indigo-700",
};
