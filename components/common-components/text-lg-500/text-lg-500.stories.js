import React from "react";
import TextLg from "../text-lg-500/index";
export default {
    title: "Large Text weighted",
    component: "Large Text weighted",
};
const Template = (args) => (
    <>
        <TextLg {...args}></TextLg>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "",
    textColor: "",
};
