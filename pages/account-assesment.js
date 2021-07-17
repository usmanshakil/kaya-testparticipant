import React from 'react';
import AccountAssesment from '../components/pagesComponents/account-assesment';
import { Consumer } from '../store';
import Layout from '../components/layout';
const Index = () => {
  return (
    <Layout>
      <Consumer>
        {({ userId, participant }) => {
          return <AccountAssesment participant={participant} id={userId} />;
        }}
      </Consumer>
    </Layout>
  );
};
export default Index;
