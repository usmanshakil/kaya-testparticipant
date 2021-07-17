import React, {useEffect} from "react";
import TextNormal from "../../unique-components/text-base";
import TextSmall from "../../common-components/text/small"
import TextWithImage from "../../common-components/text-with-image";
import Sidebar from "../../major-components/sideBar";
import MainArea from "../../major-components/mainArea"
import Router from 'next/router'

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
                                    text="Consultation scheduled!"
                                    textColor="text-theme-blue-color"
                                    textSize="text-5xl"
                                    fontWeight="font-bold"
                                    fontclassName="f-r-t"
                                />
                                <div className="text-center sm:px-48 px-4 pt-12">

                                    <TextNormal
                                        text="One last step! We need to setup your payment account. "
                                        textColor="text-theme-gray-color"
                                        textSize="text-base"
                                        textWeight=" font-normal"/>

                                    <TextNormal
                                        text=" You will only be charged once your group begins."
                                        textColor="text-theme-gray-color"
                                        textSize="text-base"
                                        textWeight=" font-normal"/>
                                </div>
                                {/*<div className="pt-16">*/}
                                    {/*<button*/}
                                    {/*onClick={()=> Router.push("/account-payment-info")}*/}
                                    {/*className="focus:outline-none rounded-lg f-p-t text-white py-3 px-24 text-lg font-semibold bg-theme-blue-color w-full hover:opacity-90"*/}
                                    {/*>*/}
                                    {/*Setup payment*/}
                                    {/*</button>*/}
                                {/*</div>*/}
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
