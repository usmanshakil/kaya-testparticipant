import React from 'react';
import ExploreGroups from '../components/pagesComponents/explore-your-group';
import Layout from '../components/layout';
import { Consumer } from '../store';
const Index = () => {
  return (
    <Layout>
      <Consumer>
        {({ dispatch, email, id, userId, participant }) => {
          return (
            <ExploreGroups
              email={email}
              id={id}
              userId={userId}
              dispatch={dispatch}
              participant={participant}
            />
          );
        }}
      </Consumer>
    </Layout>
  );
};
export default Index;
