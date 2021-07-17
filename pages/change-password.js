import React from "react";
import MainComponent from "../components/pagesComponents/changePassword"
import LayoutNonLogin from "../components/layoutNonLoggedIn";

const Index = () => {
    return (
        <LayoutNonLogin>
            <MainComponent />
        </LayoutNonLogin>
    );
};
export default Index;
