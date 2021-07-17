import React from 'react';
import AccountPaymentInfo from '../components/pagesComponents/account-payment-info';
import { Consumer } from '../store';
import Layout from '../components/layout';
const Index = () => {
  return (
    <Layout>
      <Consumer>
        {({ participant }) => {
          return <AccountPaymentInfo participant={participant} />;
        }}
      </Consumer>
    </Layout>
  );
};
export default Index;
