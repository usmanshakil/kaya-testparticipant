import React from "react";
import ImageRound from "../image-round/index";
export default {
    title: "Round Image",
    component: "Round Image",
};
const Template = (args) => (
    <>
        <ImageRound {...args}>
        </ImageRound>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    ImgUrl:""
};