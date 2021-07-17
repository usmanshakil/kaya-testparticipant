import React from "react";
import SearchWithSelectGroup from "./index";

export default {
    title: "Search with select boxes",
    component: SearchWithSelectGroup,
};
const Template = (args) => (
    <>
        <SearchWithSelectGroup {...args} />
    </>
);
export const Primary = Template.bind({});
