import React from 'react';
import Button from '../../common-components/buttonlogin/index';
import HeadingLarge from '../../common-components/headings/headingLogin';
import TextInput from '../../common-components/textInput/index';
import MessageBox from '../../unique-components/text-box/message-box/index';
import TextSmall from '../../common-components/text/small';
import Pagination from '../../unique-components/pagination';
import CheckCircle from '../../unique-components/CheckedCircle';
import Header from '../../header';
import Link from 'next/link';
const Index = ({}) => {
  return (
    <>
      <div className="min-h-screen">
        <img
          src="/static/images/goalsSetLeft.svg"
          alt=""
          className="absolute pt-20"
        />
        <img
          src="/static/images/goalsSetRight.svg"
          alt=""
          className="absolute right-0 bottom-0"
        />
        <div>
          <Header />
        </div>
        <div className="flex justify-center  pb-6 sm:px-0 px-4 text-center relative">
          <HeadingLarge text="Set 3 Goals For Yourself" />
        </div>
        <div className="flex justify-center text-center pb-6 sm:px-0 px-4 relative">
          <TextSmall
            auto="mx-auto"
            textColor="text-theme-gray-color"
            text="These goals can be a helpful tool to track your progress"
            textSize="text-lg"
            fontclassName="f-p-t"
            alignment="text-center"
            fontWeight="font-medium"
            width=" w-3/5 "
          />
        </div>
        <div className="sm:w-1/4 container mx-auto sm:px-0 px-4 relative">
          <p>Goal #1</p>
          <div className="">
            <MessageBox
              width="w-full"
              height="h-24"
              BorderRadius="rounded-lg"
              border="border-btn-light-gray"
              border_style="border-solid"
              border_width="border-2"
              borderHover="hover:border-theme-blue-color"
            />
          </div>
          <div className="pb-6">
            <TextInput
              labelText="Goal #2"
              label="true"
              placeholder=" "
              type="text"
              borderColor="border-btn-light-gray"
              borderHover="hover:border-theme-blue-color"
            />
          </div>
          <div className="pb-6">
            <TextInput
              labelText="Goal #3"
              label="true"
              placeholder=" "
              type="text"
              borderColor="border-btn-light-gray"
              borderHover="hover:border-theme-blue-color"
            />
          </div>
          <Link href="/individual-therapy-expirience">
            <a>
              <Button
                btnText="Continue"
                bgColor="bg-theme-blue-color"
                textColor="text-white"
                width="w-full"
              />
            </a>
          </Link>
        </div>
        <div className="container mx-auto pt-40 sm:px-0 px-4 relative">
          <div className="flex w-full justify-center">
            <div className="flex pb-4">
              <div className="pl-2 ">
                <CheckCircle circleColor="bg-theme-blue-color" />
              </div>
              <div className="pl-4">
                <CheckCircle circle_text="" circleColor="bg-theme-blue-color" />
              </div>
              <div className="pl-4">
                <CheckCircle circle_text="" circleColor="bg-theme-blue-color" />
              </div>
              <div className="pl-4 -mt-1">
                <Pagination
                  circle_text="4"
                  circleColor="bg-theme-blue-color"
                  width=" w-12 "
                  height=" h-12 "
                />
              </div>
              <div className="pl-4">
                <Pagination circle_text="" circleColor="bg-btn-light-gray" />
              </div>
              <div className="pl-4">
                <Pagination circle_text="" circleColor="bg-btn-light-gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
