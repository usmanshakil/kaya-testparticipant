import React, {useEffect} from "react";
import TextNormal from "../../unique-components/text-base";
import TextSmall from "../../common-components/text/small"
import TextWithImage from "../../common-components/text-with-image";
import Sidebar from "../../major-components/sideBar";
import MainArea from "../../major-components/mainArea"
// import {useRouter} from 'next/router'

const Index = () => {
    // const router = useRouter()

    useEffect(() => {
        // setTimeout(() => {
        //     router.push("/group-detail")
        // }, 3000)
    })
    return (
        <>
        <div className="flex  ">
            <Sidebar/>
            <MainArea>
                <div className="sm:px-8 px-4 py-3 ">
                    <div className="bg-white h-screen sm:px-8 px-4 py-12">
                        <div>
                            <div className="flex flex-col items-center pt-32">
                                <TextSmall
                                    text="Thank you!"
                                    textColor="text-theme-blue-color"
                                    textSize="text-5xl"
                                    fontWeight="font-bold"
                                    fontclassName="f-r-t"
                                />
                                <div className="text-center sm:px-48 px-4 pt-12">

                                    <TextNormal
                                        text="Your payment information has been saved. You will not be billed for the 15-min consultation. "
                                        textColor="text-theme-gray-color"
                                        textSize="text-base"
                                        textWeight=" font-normal"/>

                                    <TextNormal
                                        text="The therapist below will reach out to you via email to schedule a consultation. "
                                        textColor="text-theme-gray-color"
                                        textSize="text-base"
                                        textWeight=" font-normal"/>
                                </div>
                                <div className="pt-16">
                                    <TextWithImage
                                        text="Jane Smith / LMFT
                        "
                                        height="h-16"
                                        width="w-16"
                                        imgUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                                        textColor="text-theme-blue-color"/>
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
