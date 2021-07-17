import React, { useEffect, useState } from 'react';
import Header from '../../header';
import Title from '../../common-components/title';
import TextSmall from '../../common-components/text/small';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Index = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (router && router.query) {
      setEmail(router.query.email);
    }
  }, [router]);
  return (
    <>
      <div className="relative h-full">
        <div className="absolute bottom-0">
          <img
            src="/static/images/Almost-left.svg"
            alt=""
            className=" h-full  w-2/4  "
          />
        </div>
        <Header />
        <div className="container mx-auto  sm:px-0 px-4  flex items-center justify-center h-full">
          <div className="w-11/12 mx-auto  mb-40">
            <Title
              textColor="text-theme-blue-color"
              text="Almost there!"
              textSize="text-5xl"
              fontclassName="f-r-t"
              alignment="text-center"
              fontWeight="font-bold"
            />
            <div className="pt-6  sm:pl-16">
              <TextSmall
                width="w-1/2"
                auto="mx-auto"
                textColor="text-theme-gray-color md:text-center"
                text={`Check your inbox. We sent you a verification link to ${email}. Click on the link in your email to complete registration.`}
                textSize="text-lg"
                fontclassName="f-p-t"
                alignment=""
                fontWeight="font-medium"
              />
            </div>
            <div className="pt-20 flex justify-center relative">
              <img src="https://svgshare.com/i/QMS.svg" />
            </div>
            <div className='flex justify-center mt-10'>
              <div className='relative'>
                <Link href='/login'>
                  <a>
                    <div className='focus:outline-none relative z-50 
                      rounded-lg  transition duration-150 ease-in-out hover:opacity-90 f-p-t  text-white sm:px-8 py-3  
                      bg-theme-blue-color border-2 border-theme-blue-color  font-medium'>
                        LOGIN
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
