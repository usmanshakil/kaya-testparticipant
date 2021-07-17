import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Router from "next/router";
import Loader from "./common-components/loader";
import {Consumer} from '../store';
import { getParticipantMain } from "../api/graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import { useIdleTimer } from 'react-idle-timer'

import dynamic from 'next/dynamic'
const Intercom = dynamic(() => import('../components/common-components/intercomWidget'), { ssr: false });


function Cons({children, scroll}) {
    const handleOnIdle = event => {
        Auth.signOut();
        Router.push('/login');
      }
      const handleOnActive = event => {
      }
      const handleOnAction = (e) => {
      }
      const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * 10,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
      })
    return (
        <Consumer>
            {
                ({ dispatch, email }) => {
                    return <Layout email={email} scroll={scroll} dispatch={dispatch}  children={children} />
                }
            }
        </Consumer>
    )
}

function Layout(props) {
    let { dispatch, email, scroll = false } = props;
    const [user, setUser] = useState(null);
    const [data, setParticipant] = useState(null);
    useEffect(() => {
        ionViewCanEnter();
    }, []);



    const ionViewCanEnter = async () => {
        return await Auth.currentAuthenticatedUser().then((data) => {
            setUser(data);
            let userId = data.signInUserSession.idToken.payload["custom:dbUserId"];
            dispatch({
                type: "SET_USER",
                payload: data.signInUserSession.idToken.payload
            });
            if(!userId){
                Router.push("/profile-setup");
            } else {
                dispatch({
                    type: "SET_ID",
                    payload: userId
                });
                API.graphql(graphqlOperation(getParticipantMain, { id: userId }))
                    .then(async (res) => {
                        dispatch({
                            type: "SET_PARTICIPANT",
                            payload: res.data.getParticipant
                        });
                        setParticipant(res.data.getParticipant);
                    })
                    .catch((err) => {
                        if(err.data && err.data.getParticipant){
                            dispatch({
                                type: "SET_PARTICIPANT",
                                payload: err.data.getParticipant
                            });
                            setParticipant(err.data.getParticipant);
                        }
                    });
            }
        }).catch(() => {
            setUser(false);
            Router.push("/login");
        });
    };

    return user !== null ? user && (
            <div className={"h-full "+(scroll ? "overflow-y-scroll" : "")}>
                {props.children}
                {
                    data &&
                    <Intercom data={data} />

                }
                </div>
        ) : <Loader/>;
}

export default Cons;
