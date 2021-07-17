import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Router from "next/router";
import Loader from "./common-components/loader";

function Layout(props) {

    const [user, setUser] = useState(false);

    useEffect(() => {
        ionViewCanEnter();
    }, []);

    const ionViewCanEnter = async () => {
        return await Auth.currentAuthenticatedUser().then((data) => {
            Router.push("/explore");
        }).catch(() => {
            setUser(true);
        });
    };

    return user ? (
            <main>{props.children}</main>
        ) : <Loader/>;
}

export default Layout;
