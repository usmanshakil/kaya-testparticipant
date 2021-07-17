import React from 'react';
import MySessions from '../components/pagesComponents/my-sessions';
import Layout from '../components/layout';
import { Consumer } from '../store';

const Index = () => {
  return (
    <Layout>
      <Consumer>
        {({ participant, userId, dispatch }) => {
          return <MySessions participant={participant} userId={userId} dispatch={dispatch} />;
        }}
      </Consumer>
    </Layout>
  );
};
export default Index;
