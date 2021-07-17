import React from "react";
import MessageBox from "../../../unique-components/text-box/message-box/index";
import TextSmall from "../../../common-components/text/small/index";
import SimpleButton from "../../../unique-components/simple-button/index";
import SimpleInput from "../../../common-components/textInput/index"

const Index = () => {
  return (
    <>
      <div className="bg-btn-wave-violet">
        <div className="w-full h-screen">
          <div>
            <section className="w-screen h-screen flex justify-center items-center bg-btn-wave-violet sm:px-0 px-4">
              <div className="bg-white  sm:w-5/12 rounded-lg">
                <div className="w-full">
                  <div className="flex  justify-end pt-6 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#8C8C8C8C"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>

                <div className=" px-12 pb-8 font-normal leading-6 ">
                  <div className="mb-6">
                    <TextSmall
                      text="Account Deleted"
                      textColor="text-theme-blue-color"
                      fontWeight="font-medium"
                      lineHeight="leading-6"
                      fontclassName="f-p-t"
                      textSize="text-2xl"
                      alignment="sm:text-center"
                    />
                  </div>
                  <div className="my-12">
                   

                    <TextSmall
                      text="Your account has been successfully deleted"
                      textColor="text-theme-gray-color"
                      fontWeight="font-normal"
                      lineHeight="leading-6"
                      fontclassName="f-p-t"
                      textSize="text-base"
                      alignment="sm:text-center"
                    />
               
                  
                  </div>
                </div>
                <div className="w-full py-4">
                  <div className="flex flex-col items-center justify-center">
                      <div className="sm:flex">
                      <div className="sm:mb-0 mb-4">

                    <SimpleButton
                      textColor="text-theme-blue-color"
                      bgColor="bg-btn-wave-violet "
                      borderClasses=""
                      btnText="Cancel"
                      width="w-full"
                      fontWeight="font-normal"
                    />
                      </div>
                    <div className="sm:ml-4 ">
                    <SimpleButton
                      textColor="text-theme-blue-color"
                      bgColor="bg-btn-wave-violet "
                      borderClasses=""
                      btnText="Delete Your Account"
                      width=""
                      fontWeight="font-normal"
                    />
                    </div>
                    
                      </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
