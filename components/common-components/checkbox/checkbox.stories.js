import React from "react";
import Checkbox from "./index";

export default {
    title: "Checkbox",
    component: Checkbox,
};
const Template = (args) => (
    <>
        <Checkbox {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "Off",
    color:"bg-blue-500"
};
