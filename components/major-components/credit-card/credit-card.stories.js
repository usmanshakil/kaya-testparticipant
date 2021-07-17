import React from "react";
import CreditCard from "./index";

export default {
    title: "Credit Card",
    component: CreditCard,
};
const Template = (args) => (
    <>
        <CreditCard {...args} />
    </>
);
export const Primary = Template.bind({});

