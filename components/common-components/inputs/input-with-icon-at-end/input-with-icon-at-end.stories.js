import React from "react";
import InputIconStart from "./index";

export default {
    title: "Input with icon at end",
    component: InputIconStart,
};
const Template = (args) => (
    <>
        <InputIconStart {...args}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={2} />
                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
            </svg>
        </InputIconStart>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Please enter something..",
    textColor: "text-theme-gray-color",
    type: "text",
    id: "textInput",
    labelText: "New Password",
};
