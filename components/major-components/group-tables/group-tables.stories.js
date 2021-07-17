import React from "react";
import GroupTables from "../group-tables/index";
export default {
    title: "Group Tables",
    component: "Headings Medium",
};
const Template = (args) => (
    <>
        <GroupTables {...args}>
        </GroupTables>
    </>
);
export const Primary = Template.bind({});
Primary.args = {
    text: "Account",
    textColor: ""
};