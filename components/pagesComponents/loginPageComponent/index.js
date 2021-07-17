import React from 'react';
import LoginMain from '../../common-components/loginmain';
import Header from '../../header';

const Index = () => {
  return (
    <>
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
      <div className="container mx-auto relative sm:px-8 px-4 ">
        <div className="flex justify-center">
          <LoginMain />
        </div>
      </div>
      <style>
        {`
            html, body, #__next{
                overflow: auto !important;
            }
            `}
      </style>
    </>
  );
};
export default Index;
