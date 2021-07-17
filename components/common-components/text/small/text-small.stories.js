import React from "react";
import TextSmall from "./index";
export default {
    title: "Text Small",
    component: TextSmall,
};
const Template = (args) => (
    <>
        <TextSmall {...args}></TextSmall>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    textColor: "text-gray-900",
    textSize: "text-base",
    text: "Heading ",
    fontClass:"f-r-t",
    fontWeight:"font-bold"
};
