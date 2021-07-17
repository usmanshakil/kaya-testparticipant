import React from "react";
import ImgWithText from "../img-with-text/index";
export default {
    title: "Image With Text",
    component: ImgWithText,
};
const Template = (args) => (
    <>
        <ImgWithText {...args}></ImgWithText>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    imgUrl: "/static\images\calender.svg",
    textColor: "text-theme-gray-color ",
    text: "Tuesday",
    text1: "06/2020-08/2020 ",
    text2: "4:30pm PST",
    text3: "10 Sessions",
};
