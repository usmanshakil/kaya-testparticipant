import React from "react";
import InactiveMenu from "../menu-item-inactive/index";
export default {
    title: "Inactive Menu",
    component: "Inactive menu",
};
const Template = (args) => (
    <>
        <InactiveMenu {...args}>
        </InactiveMenu>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    btnText: "",
};