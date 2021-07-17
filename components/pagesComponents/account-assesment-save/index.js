import React from "react";
import TextSmall from "../../common-components/text/small";
import TypeSelectorBox from "../../common-components/selector/type-selector-box";
import Sidebar from "../../major-components/sideBar";
import MainArea from "../../major-components/mainArea";
import Link from "next/link";
import SimpleButton from "../../unique-components/simple-button";
const Index = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainArea>
          <div>
            <div className=" pb-3 h-full">
              <div className=" sm:flex px-8 h-full">
                <Link href="/account-profile">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4 ">
                      <h1 className="text-lg font-semibold text-theme-gray-color">
                        Profile
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/account-assesment">
                  <a>
                    <div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">
                      <h1 className="text-lg font-semibold text-theme-blue-color">
                        Assessment
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/account-billing">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">
                      <h1 className="text-lg font-semibold text-theme-gray-color">
                        Billing
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/account-payment-info">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">
                      <h1 className="text-lg font-semibold text-theme-gray-color">
                        Payment Info
                      </h1>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="px-8 py-3 ">
              <div className="bg-white h-full px-8 py-12">
                <div className="flex items-center justify-end">
                  <Link href="/account-assesment">
                    <a>
                      <SimpleButton
                        textColor="text-theme-blue-color"
                        bgColor="bg-custom-btn-bg"
                        btnText="Save"
                        borderClasses="border-none"
                        fontWeight="any"
                      />
                    </a>
                  </Link>
                </div>
                <div className=" ">
                  <TextSmall
                    textColor="text-theme-blue-color"
                    textSize="text-2xl"
                    text="Your Goals "
                    fontclassName="f-p-t"
                    fontWeight="font-medium"
                  />
                </div>
                <div className="w-full sm:flex">
                  <div className="sm:w-1/3 w-full pt-4 ">
                    <div className=" rounded-lg ">
                      <h5 className="text-custom-black f-p-t text-base font-normal pb-2">
                        Goal #1
                      </h5>
                      <p className="text-base font-normal sm:p-4 p-2 rounded-lg border-2 border-btn-light-gray">
                        Develop the ability to overcome conviction. Learn
                        something that would disprove my earlier understanding
                        of it.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/3 pt-4 sm:mx-8 mx-0">
                    <div className=" rounded-lg ">
                      <h5 className="text-custom-black f-p-t text-base font-normal pb-2">
                        Goal #2
                      </h5>
                      <p className="text-base font-normal sm:p-4 p-2 border-2 border-btn-light-gray rounded-lg">
                        Keep my family above all other relationships
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/3 pt-4 sm:px-4 px-0">
                    <div className=" rounded-lg ">
                      <h5 className="text-custom-black f-p-t text-base font-normal pb-2">
                        Goal #3
                      </h5>
                      <p className="text-base font-normal sm:p-4 p-2 rounded-lg border-2 border-btn-light-gray">
                        Make the right decisions at the right time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-0">
                  <TextSmall
                    textColor="text-theme-blue-color"
                    textSize="text-2xl"
                    text="How have you been feeling lately? "
                    fontclassName="f-p-t"
                    fontWeight="font-medium"
                  />
                </div>
                <div className="sm:flex sm:items-center  px-12 mt-6 w-9/12">
                  <div className="h-12 w-12">
                    <img src="/static\images\unhappy.svg" />
                  </div>
                  <div className="w-full">
                    <div className="slidecontainer mt-5 w-full px-2 ">
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value="50"
                        className="slider rounded-lg "
                        id="myRange"
                      />
                    </div>
                    <div className="flex justify-between px-2 mt-2  ">
                      <div className="text-theme-gray-color text-lg font-medium f-p-t leading-6">
                        Unwell
                      </div>
                      <div className="text-theme-gray-color text-lg font-medium f-p-t leading-6">
                        Struggling
                      </div>
                      <div className="text-theme-gray-color text-lg font-medium f-p-t leading-6">
                        Coping
                      </div>
                      <div className="text-theme-gray-color text-lg font-medium f-p-t leading-6">
                        Healthy
                      </div>
                    </div>
                  </div>
                  <div className="h-12 w-12">
                    <img src="/static\images\happy.svg" />
                  </div>
                </div>

                <div className="mt-16">
                  <TextSmall
                    textColor="text-theme-blue-color"
                    textSize="text-2xl"
                    text="Types of groups you are interested in "
                    fontclassName="f-p-t"
                    fontWeight="font-medium"
                  />
                </div>
                <div className="sm:flex sm:flex-wrap  items-center justify-between mt-8">
                  <div className="sm:mb-0 mb-2 ">
                    <TypeSelectorBox
                      textColor="text-white"
                      bgColor="bg-theme-blue-color"
                      border="rounded-lg border-2 border-btn-light-gray border-2 border-btn-light-gray"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-white"
                      bgColor="bg-theme-blue-color"
                      border="rounded-lg border-2 border-btn-light-gray"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className=" sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                </div>
                <div className="sm:flex sm:flex-wrap items-center justify-between sm:mt-8">
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-white"
                      bgColor="bg-theme-blue-color"
                      border="rounded-lg border-2 border-btn-light-gray"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t"
                    />
                  </div>
                  <div className="sm:mb-0 mb-2 ">
                    <TypeSelectorBox
                      textColor="text-custom-black"
                      bgColor="bg-transparent"
                      border="rounded-lg border-2 border-btn-light-gray border-2"
                      text="Depression"
                      font="font-medium f-p-t "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainArea>
      </div>
    </>
  );
};
export default Index;
