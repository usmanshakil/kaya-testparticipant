import React from "react";
import RadioButtons from "./index";

export default {
    title: "Radio Button",
    component: RadioButtons,
};
const Template = (args) => (
    <>
        <RadioButtons {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
   text=""
};
