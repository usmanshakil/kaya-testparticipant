import React, { useState } from 'react';
import Header from '../../header';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import Router from 'next/router';

const Index = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    if (password === repassword) {
      if (password.includes(email) || password.includes(username)) {
        setError('Password should not contain username');
        setLoader(false);
      }
      else {
        Auth.signUp({
          username,
          password,
          attributes: {
            email,
            'custom:dbUserId': '',
            'custom:role': 'Participant',
          },
        })
          .then((data) => {
            Router.push('/account-verification?email=' + email);
            setLoader(false);
          })
          .catch((err) => {
            console.error('err', err);
            errorMessage(err.message);
            setLoader(false);
          });
      }
    } else {
      setError("Password didn't match");
      setLoader(false);
    }
  };

  const errorMessage = (message) => {
    switch (message) {
      case "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
        setError('Password must be 6 characters or more');
        break;
      case 'Password did not conform with policy: Password not long enough':
        setError('Password should be a combination of numbers and characters');
        break;
      default:
        setError(message);
    }
  };

  return (
    <div className="relative h-full">
      <img
        src="/static/images/welcome-left.svg"
        alt=""
        className="absolute h-full bottom-0"
      />
      <img
        src="/static/images/welcome-right.svg"
        alt=""
        className="absolute right-0 "
      />
      <Header />
      <div className=" relative flex flex-col items-center justify-center w-full h-screen">
        <h3 className="w-full leading-tight text-theme-blue-color text-5xl text-center f-r-t font-bold">
          Welcome!
        </h3>
        <div className="pt-6">
          <p className=" leading-3  text-theme-gray-color text-2xl f-p-t font-medium text-center  ">
            Create Account
          </p>
        </div>
        <form
          onSubmit={(event) => onSubmit(event)}
          className="w-full flex iems-center justify-center"
        >
          <div className="w-3/12  sm:px-0 px-4">
            <div className="pt-6">
              <div className=" text-custom-black">
                <label
                  htmlFor="userName"
                  className="text-base font-normal leading-tight f-p-t"
                >
                  Username
                </label>
                <input
                  type="text"
                  required
                  className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                  id="userName"
                  placeholder=""
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-6">
              <div className=" text-custom-black">
                <label
                  htmlFor="email"
                  className="text-base font-normal leading-tight f-p-t"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-6">
              <div className=" text-custom-black">
                <label
                  htmlFor="password"
                  className="text-base leading-tight f-p-t font-normal"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-6">
              <div className=" text-custom-black">
                <label
                  htmlFor="repeatPassword"
                  className="text-base leading-tight f-p-t font-normal"
                >
                  Re-type Password
                </label>
                <input
                  id="repeatPassword"
                  type="password"
                  required
                  className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                  placeholder=""
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-6">
              <label className="cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <div className="bg-white border rounded-sm border-btn-light-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        required
                        type="checkbox"
                        className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden text-white rounded-sm bg-theme-blue-color">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                    </div>
                    <label
                      // style={{ fontSize: "12px" }}
                      className="ml-2 text-base leading-4 font-normal  text-xs f-p-t  text-custom-black">
                      I agree to Kaya's <a
                        href="terms-and-conditions"
                        className="text-theme-blue-color"
                        target="_blank"
                      >
                        Terms &amp; Conditions
                      </a>
                  	&nbsp;    and 	&nbsp;
                        <a
                        href="privacy-policy"
                        className="text-theme-blue-color"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </label>
            </div>
            {/* <div className="pt-2">
              <label className="cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <div className="bg-white border rounded-sm border-btn-light-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        required
                        type="checkbox"
                        className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden text-white rounded-sm bg-theme-blue-color">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                    </div>
                    <label className="ml-2 text-base leading-4 font-normal f-p-t  text-custom-black">
                      <a
                        href="privacy-policy"
                        className="text-theme-blue-color"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </label>
            </div>
          */}
            <div className="pt-6">
              {loader ? (
                <button
                  disabled={loader}
                  type="submit"
                  className="flex items-center justify-center focus:outline-none bg-theme-blue-color rounded-md hover:opacity-90 text-white text-base tracking-widest leading-3 py-2 w-full"
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
                    className="focus:outline-none rounded-lg text-white f-p-t py-4 px-5 text-lg font-semibold bg-theme-blue-color w-full hover:opacity-90"
                  >
                    Create Account
                  </button>
                )}
              <div className="flex flex-col mt-5">
                <p className="text-red-600 text-center">{error}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <style>
        {`
            html, body, #__next{
                overflow-y: auto !important;
            }
            `}
      </style>
    </div >
  );
};
export default Index;
