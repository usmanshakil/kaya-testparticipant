import React, { useState } from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import Router from 'next/router';
import Header from '../header';
const Index = () => {
  const [username, setUsername] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    Auth.forgotPassword(username)
      .then((res) => {
        Router.push('/change-password?user=' + username);
        setLoader(false);
      })
      .catch((err) => {
        console.error('err', err);
        errorMessage(err.message);
        setLoader(false);
      });
  };
  const errorMessage = (message) => {
    switch (message) {
      case 'Username/client id combination not found.':
        setError('Username not found');
        break;
      default:
        setError(message);
    }
  };

  return (
    <>
      <div className="absolute pt-32">
        <img src={'https://i.ibb.co/F6cCR8z/Ellipse-background.png'} />
      </div>
      <section className="bg-white min-h-screen py-2">
        <img
          src="/static/images/login-left.svg"
          alt=""
          className="absolute w-64 h-full"
        />
        <img
          src="/static/images/login-right.svg"
          alt=""
          className="absolute w-64 right-0  bottom-0 "
        />
        <Header />

        <div className="container mx-auto  relative sm:px-8 px-4 ">
          <div className=" flex justify-center">
            <form
              onSubmit={(event) => onSubmit(event)}
              className="sm:w-2/3 mt-8 xl:w-1/2"
            >
              <h3
                className={
                  'w-full text-5xl font-bold text-theme-blue-color leading-tight f-r-t text-gray-900 text-center'
                }
              >
                Forgot your password?
              </h3>
              <div className="mt-3">
                <p
                  className={
                    'font-medium text-base text-theme-blue-color px-4 f-p-t text-gray-900 text-center'
                  }
                >
                  Fill in your username and we will send you a link to reset
                  your password.
                </p>
              </div>
              <div className="my-6 px-12">
                <div className="text-black">
                  <label
                    htmlFor="username"
                    className="text-base font-normal fleading-tight"
                  >
                    Username
                  </label>
                  <input
                    required
                    type="username"
                    className={
                      'px-2  w-full rounded-lg mt-2 focus:outline-none   border-gray-300 border-2 h-12'
                    }
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-12">
                {loader ? (
                  <button
                    disabled={loader}
                    type="submit"
                    className="flex items-center justify-center rounded-lg focus:outline-none bg-theme-blue-color rounded-md text-white text-base tracking-widest leading-3 py-2  w-full"
                  >
                    <img
                      src="/static/images/loader.svg"
                      style={{ width: '36px', height: '36px' }}
                      alt=""
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loader}
                    className="focus:outline-none rounded-lg text-white py-3 px-5 text-lg font-semibold text-white bg-theme-blue-color w-full"
                  >
                    SUBMIT
                  </button>
                )}
              </div>
              <Link href="/login">
                <a>
                  <p className="cursor-pointer mt-3 text-loginbt_color font-medium px-12">
                    Return to login
                  </p>
                </a>
              </Link>
              <div className="flex flex-col mt-5">
                <p className="text-red-600 text-center">{error}</p>
              </div>
            </form>
          </div>

          {/* now */}
        </div>

        <style>
          {`
             #__next{
                overflow: auto !important;
            }



            `}
        </style>

        {/* <div className="mx-auto w-1/2 px-20 relative pt-8 xl:pt-24"></div> */}
      </section>
    </>
  );
};
export default Index;
