import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import Router from 'next/router';
import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0';
// import { useAuth0 } from '@auth0/auth0-react';

const Index = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

     const { user, isLoading } = useUser();
     if (isLoading) return <div>Loading...</div>;


    //  if (error) return <div>{error.message}</div>;
    // const { loginWithRedirect }  = useAuth0();
    // const { logout } = useAuth0();

 
 const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(''); 

    Auth.signIn(username, password)
      .then((res) => {
        if (
          res.signInUserSession.idToken.payload['custom:role'] === 'Participant'
        ){

          if (res.signInUserSession.idToken.payload['custom:dbUserId'] ) 
          {
            Router.push('/explore');
          } else 
          {
            Router.push('/profile-setup');
          }
          } else 
         {
          Auth.signOut();
          setError('Not a valid user');
          }
        setLoader(false);
      })
      .catch((err) => {
        console.error('err', err);
        setError(err.message);
        setTimeout(() => {
          setError('');
        }, 3000);
        setLoader(false);
      });
  };

  return (
    <>
      {user && (
        <div>
          {/* <h1> so here is the data ...</h1> */}
          {JSON.stringify(user)}
          Pic :
          <img src={user.picture} alt={user.name} />
          <h2>Name : {user.nickname}</h2>
          {/* <p>{user.name}</p> */}
          <p>Email : {user.email}</p>
        </div>
      )}

      
      <Link href="/api/auth/login" >
         LOGIN BTN
      </Link>
      <hr></hr>
      <br></br>

      <Link href="/api/auth/logout" >
         LOGOUT BTN
      </Link>


      <form className="sm:w-1/3" onSubmit={(event) => onSubmit(event)}>
        <div className="flex justify-center  pb-6">
          <p className="text-5xl font-bold f-r-t leading-loose text-theme-blue-color ">
            Login
          </p>
        </div>
        <div className="pb-6">
          <div className=" text-custom-black">
            <label
              htmlFor="username"
              className="text-base text-custom-black font-normal fleading-tight f-p-t"
            >
              Username
            </label>
            <input
              required
              id="username"
              className="px-4 py-2 w-full rounded-lg mt-2 focus:outline-none  border-2 text-custom-blackplaceholder-black h-12 border-btn-light-gray "
              type="text"
              placeholder=" "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="pb-5">
          <div className=" text-custom-black">
            <label
              htmlFor="password"
              className="text-base text-custom-black font-normal fleading-tight f-p-t"
            >
              Password
            </label>
            <input
              required
              id="password"
              className="px-4 py-2 w-full rounded-lg mt-2 focus:outline-none  border-2 text-custom-blackplaceholder-black h-12 border-btn-light-gray "
              type="Password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <label className="cursor-pointer">
            {/* <div className="flex flex-col items-start">*/}
            {/*<div className="flex items-center">*/}
            {/*<div className="bg-white border rounded-sm border-btn-light-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">*/}
            {/*<input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />*/}
            {/*<div className="check-icon hidden text-white bg-theme-blue-color rounded-smbg-indigo-700">*/}
            {/*<svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
            {/*<path stroke="none" d="M0 0h24v24H0z"></path>*/}
            {/*<path d="M5 12l5 5l10 -10"></path>*/}
            {/*</svg>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<p className="ml-2 text-base leading-4 font-normal f-p-t  text-custom-black">Remember me</p>*/}
            {/*</div>*/}
            {/*</div> */}
          </label>
          <Link href="/forget-password">
            <a>
              <p className="text-theme-blue-color text-base leading-6 f-p-t font-medium">
                Forgot Password?
              </p>
            </a>
          </Link>

          {/* <button onClick={() => logout({ returnTo: window.location.origin })}>
            logout btn
          </button> */}
        </div>
        {loader ? (
          <button
            disabled={loader}
            type="submit"
            className="flex items-center justify-center focus:outline-none bg-theme-blue-color rounded-md text-white text-base tracking-widest leading-3 py-4 w-full hover:opacity-90"
          >
            <img
              src="/static/images/loader.svg"
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
          </button>
        ) : (
          //  <Link href="/api/auth/login">
          <button
            // onClick={() => loginWithRedirect()}

            type="submit"
            disabled={loader}
            className="focus:outline-none f-p-t rounded-lg text-white py-4 px-5 text-lg font-semibold hover:opacity-90 bg-theme-blue-color w-full"
          >
            LOGIN
          </button>
          // </Link>
        )}
        <div className="flex flex-col mt-5">
          <p className="text-red-600 text-center">{error}</p>
        </div>
        <div className="flex mt-2">
          <a
            className="text-custom-black text-base leading-6 f-p-t font-normal"
            href=""
          >
            Don’t have an account?
          </a>
          <Link href="/welcome">
            <a
              className="ml-4 text-theme-blue-color text-base leading-6 f-p-t font-normal"
              href=""
            >
              Register here
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};
export default Index;