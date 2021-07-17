import React from "react";
import ImgWithSingleText from "../img-with-single-text/index";
export default {
    title: "Image With Single Text",
    component: ImgWithSingleText,
};
const Template = (args) => (
    <>
        <ImgWithSingleText />
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    imgUrl: "/static\images\calender.svg",
    textColor: "text-gray-800 ",
    text: "Tuesday",
    
};
