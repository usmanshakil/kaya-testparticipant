import React from 'react';
import AccountBilling from '../components/pagesComponents/account-billing';
import { Consumer } from '../store';
const Index = () => {
  return (
    <>
      <Consumer>
        {({ participant }) => {
          return <AccountBilling participant={participant} />;
        }}
      </Consumer>
    </>
  );
};
export default Index;
