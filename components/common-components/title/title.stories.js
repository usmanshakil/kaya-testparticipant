import React from "react";
import Title from "./index";

export default {
    title: "Title",
    component: Title,
};
const Template = (args) => (
    <>
        <Title {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    textColor: "text-indigo-700",
    alignment: "text-center",
    text: "Login",
    textSize: "text-5xl  ",
};
