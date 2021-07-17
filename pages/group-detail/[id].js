import React from "react";
import GroupHowToJoin from "../../components/pagesComponents/group-how-to-join";
import Layout from "../../components/layout";
import {Consumer} from '../../store';

const Index = ({ id, invited }) => {
    return (
        <Layout>
            <Consumer>
                {
                    ({ participant, dispatch, userId }) => {
                        return <GroupHowToJoin invited={invited} id={id} userId={userId} participant={participant} dispatch={dispatch} />
                    }
                }
            </Consumer>
        </Layout>
    );
};

Index.getInitialProps = async ({ query: {id, invited} }) => {
    return { id, invited }
};


export default Index;



