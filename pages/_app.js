import React, { useState, useEffect} from "react";
import "../static/css/style.css";
import "../css/index.css";
import Head from "next/head";
import Amplify from "aws-amplify";
import { Provider } from "../store";
import config from "../api/aws-exports";
import Access from "../components/access";
import Loader from "../components/common-components/loader/index";
// import { Auth0Provider } from '@auth0/auth0-react';
// import Router from "next/router";
// import LoginButton from "../components/LoginButton";
// import LogoutBtn from "../components/LogoutBtn";
import { UserProvider } from "@auth0/nextjs-auth0";

Amplify.configure(config);

//   var url = new URL(window.location.href);

function MyApp({ Component, pageProps }) {


    const [check, setCheck] = useState(true);
    const [loader , setLoader] = useState(true);
    // const [win , setWin] = useState(null);
    
    useEffect(() => {
        // const checkAccess = localStorage.getItem("access");
        const checkAccess = true;

        setCheck(!checkAccess);
        setLoader(false);
        // setWin(window.location.origin);
    }, []);



    // const history = useHistory;
    


    
    // async function onRedirectCallback (appState) {
    //     try{
    //     await    Router.push(
    //           appState && appState.targetUrl
    //             ? appState.targetUrl
    //             : (window.location.href = "http://localhost:3000")
    //         );}
    // catch(error){
    //         console.error(error);
    //         res.status(error.status || 400).end(error.message);
    //         }
    //         alert("Onredirect")
    //         console.log("consoledata")
    // };


        // const onRedirectCallback = (user, context, callback) => {
        //   context.redirect = {
        //     url: "http://localhost:3000/",
        //   };
        //   return callback(null, user, context);
        // }

    // const domain = process.env.AUTH0_DOMAIN;
    // const clientid = process.env.AUTH0_CLIENT_ID;

    return (
      <Provider>
        {/* <Auth0Provider
          domain= "kayacare.us.auth0.com"
          clientId= "fa4GMKX5kMagLIgkRuY0ILgbHDW40VpR"
          redirecUri={win}
          //   onRedirectCallback={onRedirectCallback}
        > */}
        <Head>
          <title>Kaya Participant</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async defer src="https://apis.google.com/js/api.js"></script>;
        </Head>
        {loader ? <Loader /> : check && <Access setCheck={setCheck} />}
        {/* <LoginButton />
        <LogoutBtn /> */}

        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
        {/* </Auth0Provider> */}
      </Provider>
    );
}

export default MyApp;