import React from "react";
import AvatarWithImage from "../avatar-with-picture/index";
export default {
    title: "Avatar With Image",
    component: AvatarWithImage,
};
const Template = (args) => (
    <>
        <AvatarWithImage {...args}></AvatarWithImage>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    BorderRadius: "rounded-full",
    ImgBorderRadius: "rounded-full",
    height: "h-20",
    width: "w-20",
    imgUrl: "https://i.ibb.co/RDJVY2T/Mask-Group-4.png",
};
