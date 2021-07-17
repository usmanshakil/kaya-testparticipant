import React from "react";
import GroupDetail from "../../components/pagesComponents/groupDetail"
import Layout from "../../components/layout";
import {Consumer} from '../../store';

const Index = ({id, schedule}) => {
    return (
        <Layout>
            <Consumer>
                {
                    ({ participant, dispatch }) => {
                        return <GroupDetail id={id} dispatch={dispatch} 
                        schedule={schedule} 
                        participant={participant} />
                    }
                }
            </Consumer>
        </Layout>
    );
};
Index.getInitialProps = async ({ query: {id, schedule} }) => {
    return { id, schedule }
};

export default Index;



