import React from "react";
import SelectIcon from "../selector-icon/index";

export default {
    title: "Select box with icon",
    component: SelectIcon,
};
const Template = (args) => (
    <>
        <SelectIcon {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    option1: "",
    option3: "Option 1",
    option2: "Option 2",
    label: true,
    textColor: "text-theme-gray-color",
    labelText: "Input Label",
};
