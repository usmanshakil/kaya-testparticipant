import React from "react";
import TagGroup from "./index";

export default {
    title: "Tag Group",
    component: TagGroup,
};
const Template = (args) => (
    <>
        <TagGroup {...args} />
    </>
);
export const Primary = Template.bind({});
