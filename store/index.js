import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) 
    {
        case "SET_LOADED":
            return { ...state, loaded: action.payload };
        case "SET_ID":
            return { ...state, userId: action.payload };
        case "SET_EMAIl":
            return { ...state, email: action.payload };
        case "SET_PARTICIPANT":
            return { ...state, participant: action.payload };
        case "SET_USER":
            return { ...state, email: action.payload.email, userId: action.payload["custom:clinicianId"], user: action.payload };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        },
        loaded: false,
        userId: "",
        email: null,
        user: null,
        participant: null
    };

    render() {
        let {
            state,
            props: { children },
        } = this;

        return <Context.Provider value={state}>{children}</Context.Provider>;
    }
}

export const Consumer = Context.Consumer;
