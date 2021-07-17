import React from "react";
import StripeAccountSetup from "../components/pagesComponents/stripe-account-setup/index";
import { Consumer } from '../store';
import Layout from '../components/layout';
const Index = ({ groupId }) => {
  return (
    <>
     <Layout>
      <Consumer>
        {({ participant }) => {
          return <StripeAccountSetup groupId={groupId} participant={participant} />;
        }}
      </Consumer>
    </Layout>
    </>
  );
};


Index.getInitialProps = async ({ query: {group} }) => {
  return { groupId: group }
};


export default Index;



