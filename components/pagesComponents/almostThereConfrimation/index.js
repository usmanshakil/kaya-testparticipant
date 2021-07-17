import React from 'react';
import Header from '../../header';
import Title from '../../common-components/title';
import TextSmall from '../../common-components/text/small';
import Button from '../../common-components/buttonlogin';
import Link from 'next/link';
const Index = () => {
  return (
    <>
      <div className="z-10 ">
        <img
          src="/static/images/almostThere2nd.svg"
          alt=""
          className="absolute bottom-0 w-2/5  "
          style={{ zIndex: -1 }}
        />
        <Header />
        <div className="container relative mx-auto px-4 sm:px-0 mt-16 h-full">
          <div className="sm:w-11/12 mx-auto mb-8">
            <Title
              textColor="text-theme-blue-color"
              text="Welcome to Kaya!"
              textSize="md:text-5xl text-2xl"
              fontclassName="f-r-t"
              alignment="text-center"
              fontWeight="font-bold"
            />
            <Title
              textColor="text-theme-blue-color"
              text="We’re glad you’re here."
              textSize="md:text-5xl text-2xl"
              fontclassName="f-r-t"
              alignment="text-center"
              fontWeight="font-bold"
            />
            <div className="pt-6 text-center w-10/12 mx-auto flex justify-center">
              <TextSmall
                textColor="text-theme-gray-color w-2/3"
                text="To begin, we’ll ask you some questions to better understand your wellness needs and goals. This information will help us match you with groups that we think will help support you. Your answers are completely private and only visible to the therapist of the group you decide to join. Let’s get started!  "
                textSize="text-lg"
                fontclassName="f-p-t"
                alignment="text-center"
                fontWeight="font-medium"
              />
            </div>
            <div className="flex justify-center pt-16">
              <Link href="/questions">
                <a className="w-full flex justify-center">
                  <Button
                    btnText="Let’s Begin"
                    bgColor="bg-theme-blue-color"
                    textColor="text-white"
                    width="sm:w-2/5 w-full"
                    btnText_size="text-lg font-semibold"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
