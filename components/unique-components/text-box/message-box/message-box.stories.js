import React from "react";
import MessageBox from "../message-box/index";
export default {
    title: "Message Box",
    component: MessageBox,
};
const Template = (args) => (
    <>
        <MessageBox {...args}></MessageBox>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    width: "w-1/2",
    height: "h-32",
    BorderRadius: " rounded-md",
    textSize: "text-sm",
    textColor: "text-gray-800",
    labelText: "Input Label",
    label: true,
};
