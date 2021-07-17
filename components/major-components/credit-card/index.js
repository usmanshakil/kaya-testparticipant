import React from "react";
import Title from "../../common-components/title";
import SimpleButton from "../../common-components/buttons/simple-button";

const Index = ({}) => {
    return (
        <>
            <div className="flex">
                <Title textColor="text-indigo-700" text="Credit Card Information" textSize="text-2xl  " />
                <SimpleButton btnText={"Edit"} bgColor={"bg-indigo-100"} textColor={"text-indigo-700 "} paddingX={"px-4"} paddingY={"py-2"} />
            </div>
            <div className="px-8 mt-12">
                <div>
                    <p className="text-base text-black"> Card Number</p>
                </div>
                <div className="flex">
                    <div className="mt-6 flex mr-4">
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="mt-6 flex mr-4">
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="mt-6 flex mr-4">
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="mt-6 flex">
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="px-8 mt-12">
                <div>
                    <p className="text-base text-black"> Expiration date</p>
                </div>
                <div>
                    <p className="text-base text-theme-gray-color">03 / 2015</p>
                </div>
            </div>
            <div className="px-8 mt-12">
                <div>
                    <p className="text-base text-black"> Card Holder Name</p>
                </div>
                <div>
                    <p className="text-base text-theme-gray-color">David Cooper</p>
                </div>
            </div>
        </>
    );
};
export default Index;
