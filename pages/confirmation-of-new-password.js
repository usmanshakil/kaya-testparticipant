import React from "react";
import Link from "next/link";

const Index = () => {
    return (
        <>
        <div className="absolute pt-32">
            <img src={"https://i.ibb.co/F6cCR8z/Ellipse-background.png"}/>
        </div>
        <section className="bg-white min-h-screen py-2">

            <div className="px-2 flex flex-col items-center justify-center">
                <img src={"https://i.ibb.co/6bY1WRb/logo.png"} className="w-64 h-24"/>
            </div>
            <div className="mx-auto relative pt-40">
                <h3 className={"w-full text-5xl font-bold leading-tight f-r-t text-gray-900 text-center"}>Your password has been successfully changed!</h3>
                <div className="px-4 flex items-center flex-col">
                    <div className="mt-3">
                        <p className={"font-medium text-base px-4 f-p-t text-gray-900 text-center"}>You can now use your new password to sign in to your account</p>
                    </div>
                    <Link href="/login"><a className="w-1/4 mt-16">
                        <button type="submit" className="focus:outline-none rounded-lg text-white px-8 py-2 text-lg  f-p-t text-white bg-theme-blue-color w-full">Login</button>
                    </a></Link>
                </div>
            </div>
        </section>
        </>
    );
};
export default Index;
