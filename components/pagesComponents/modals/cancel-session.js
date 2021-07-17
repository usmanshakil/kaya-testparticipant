import React from "react";
import OutsideClick from "react-outside-click-handler";

import TextSmall from "../../common-components/text/small";
import SimpleButton from "../../unique-components/simple-button";
import ImgWithSingleText from "../../unique-components/img-with-single-text";
import Link from "next/link";
const Index = ({ show, setCancel }) => {
  return (
    <>
      <div className={"bg-modal-overlay inset-0 fixed"}>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="sm:w-5/12 ">
            <section className="h-screen flex justify-center items-center px-4 sm:px-0">
              <OutsideClick onOutsideClick={() => setCancel(false)}>
                <div className="bg-white   rounded-lg">
                  <div className="w-full">
                    <div
                      className="flex  justify-end pt-6 pr-6 cursor-pointer"
                      onClick={() => setCancel(false)}
                    >
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
                    <div>
                      <TextSmall
                        text="Are you sure you want to cancel the session?"
                        textColor="text-theme-blue-color"
                        fontWeight="font-medium"
                        lineHeight="leading-6"
                        fontclassName="f-p-t"
                        textSize="text-lg"
                        alignment="text-center"
                      />
                    </div>
                    <div className="pt-6">
                      <TextSmall
                        text="Are you sure you want to cancel the following session? You will be charged for the session if you do not cancel within 72 hours of session start time."
                        textColor="text-theme-gray-color"
                        fontWeight="font-normal"
                        lineHeight="leading-6"
                        fontclassName="f-p-t"
                        textSize="text-base   "
                        alignment="sm:text-left text-center"
                      />
                    </div>
                  </div>
                  <div className="w-full pb-12">
                    <div className="flex flex-col items-center justify-between">
                      <div className="flex  py-6">
                        <ImgWithSingleText
                          imgUrl="/static\images\calender.svg"
                          text="June 1 - October 31, 2020"
                          textColor="text-custom-black  "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full pb-12">
                    <div className="flex flex-col items-center justify-between">
                      <Link href="/my-groups">
                        <a>
                          <SimpleButton
                            textColor="text-theme-blue-color"
                            bgColor="bg-btn-wave-violet "
                            borderClasses=""
                            btnText="Cancel Session"
                            width=""
                            fontWeight="font-normal"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </OutsideClick>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
