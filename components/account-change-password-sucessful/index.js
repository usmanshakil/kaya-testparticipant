import React from "react";
import Link from "next/link";
const Index = () => {
    return (
        <>
            <div className="w-full h-screen">
                <div className="flex flex-col items-center justify-center pt-40  lg:pt-64">
                    <h1 className="lg:text-5xl text-xl font-bold f-r-t text-center text-home-blue-color leading-10 pb-3">Your password has been successfully changed!</h1>
                    <h2 className="text-base font-medium f-p-t text-center text-home-heading">You can now use your new password to login to your account!</h2>
                    <div className="mt-6 flex items-center">
                        <Link href="/login">
                            <a>
                                <button className="focus:outline-none  rounded-lg text-white   f-p-t   font-Medium text-lg py-4 px-20 lg:px-48 bg-theme-blue-color">Login</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
