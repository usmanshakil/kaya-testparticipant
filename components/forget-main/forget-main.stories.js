import React from "react";
import ForgetMain from "./index";

export default {
    title: "Forget Password",
    component: ForgetMain,
};
const Template = (args) => (
    <>
        <ForgetMain {...args} />
    </>
);
export const Primary = Template.bind({});
