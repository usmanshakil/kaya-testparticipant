import React from "react";
import SimpleInput from "../simple-input/index";

export default {
    title: "Simple Input",
    component: SimpleInput,
};
const Template = (args) => (
    <>
        <SimpleInput {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    label: true,
    placeholder: "Please enter something..",
    textColor: "text-theme-gray-color",
    type: "text",
    id: "textInput",
    labelText: "Input Label",
    isRequired:"",
};
