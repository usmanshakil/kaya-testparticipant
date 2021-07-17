import React from "react";
import TextWithImage from "./index";

export default {
    title: "Text With Image",
    component: TextWithImage,
};
const Template = (args) => (
    <>
        <TextWithImage {...args} />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "Jane Smith / PhD",
    textColor: "text-gray-900",
    height: "h-16",
    width: "w-16",
    textSize="text-2xl"
};
