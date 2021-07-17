import React from "react";
import AccountProfile from "../components/pagesComponents/account-profile"
import { Consumer } from "../store";
import Layout from "../components/layout";
const Index = () => {
  return (
     <Layout>
          <Consumer>
              {({ userId, participant, dispatch }) => {
                  return <AccountProfile participant={participant} dispatch={dispatch} id={userId} />;
              }}
          </Consumer>
      </Layout>
  );
};
export default Index;



