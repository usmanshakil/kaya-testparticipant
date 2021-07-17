import React from "react";
import InputIconEnd from "./index";

export default {
    title: "Input with icon at start",
    component: InputIconEnd,
};
const Template = (args) => (
    <>
        <InputIconEnd {...args}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
            </svg>
        </InputIconEnd>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Please enter something..",
    textColor: "text-theme-gray-color",
    type: "text",
    id: "textInput",
};
