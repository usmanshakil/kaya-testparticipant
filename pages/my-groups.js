import React from "react";
import MyGroup from "../components/pagesComponents/my-group";
import Layout from "../components/layout";
import {Consumer} from '../store';

const Index = () => {
  return (
    <Layout>
        <Consumer>
            {
                ({ participant, userId }) => {
                    return <MyGroup participant={participant} userId={userId} />
                }
            }
        </Consumer>
    </Layout>
  );
};
export default Index;



