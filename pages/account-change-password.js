import React from "react";
import AccountChangePassword from "../components/pagesComponents/account-change-password";
import Layout from "../components/layout";
import {Consumer} from '../store';
const Index = () => {
  return (
    <Layout>
        <Consumer>
            {
                ({ dispatch, email, id }) => {
                    return <AccountChangePassword email={email} id={id} dispatch={dispatch} />
                }
            }
        </Consumer>
    </Layout>
  );
};
export default Index;