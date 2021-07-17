import React, { useState } from "react";
import Leftnav from "../major-components/leftNav";
import MainArea from "../major-components/theSideLayout";
import { Auth } from 'aws-amplify';
import Router from "next/router";
// import Link from "next/link";
const Index = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [showOld, setShowOldPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [showPass, setShowPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [showRePassword, setShowRePassword] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const changePassword = async (event) => {
        event.preventDefault();
        setError("");
        setLoader(true);
        if(password === rePassword){
            Auth.currentAuthenticatedUser().then(user => {
                return Auth.changePassword(user, oldPassword, password);
            }).then(data => {
                Auth.signOut();
                Router.push("/account-change-password-sucessful");
                setLoader(false);
            }).catch(err => {
                console.error("err", err);
                setError(err.message);
                setLoader(false);
            });
        } else {
            setError("Password didn't match");
            setLoader(false);
        }
    };

    const showIcon = (value) => 
    {
        return value ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eye"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="3" y1="3" x2="21" y2="21"/>
                <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"/>
                <path
                    d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"/>
            </svg>

        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eye"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="2"/>
                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"/>
            </svg>
        )
    };

    return (
        <>
        <div className="flex ">
            <Leftnav/>
            <MainArea InnerText="Change Password" fontWeight=" font-medium">
                <form onSubmit={event => changePassword(event)} className="flex flex-col items-center justify-center ">
                    <div className="pt-6">
                        <h1 className="text-lg font-medium f-p-t">Password Reset</h1>
                    </div>
                    <div className="lg:w-2/5 w-11/12 pt-6">
                        <div className=" lg:my-0 xl:my-0">
                            <label htmlFor="password3" className="text-gray-800 text-base font-normal leading-tight tracking-normal f-p-t mb-2 pb-3">Old Password</label>
                            <div className="relative pt-3 items-center">
                                <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 pb-2 h-full cursor-pointer" onClick={() => setShowOldPassword(!showOld)}>
                                    {showIcon(showOld)}
                                </div>
                                <input id="oldpassword" onChange={event => setOldPassword(event.target.value)} type={showOld ? "text" : "password"} className="text-gray-600 text-base focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center  p-4 text-sm border-solid border-input-border border-2 rounded-lg" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-11/12 pt-6">
                        <div className=" lg:my-0 xl:my-0">
                            <label htmlFor="password3" className="text-gray-800 text-base font-normal leading-tight tracking-normal f-p-t mb-2 pb-3">New Password</label>
                            <div className="relative pt-3 items-center">
                                <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 pb-2 h-full cursor-pointer"  onClick={() => setShowPassword(!showPass)}>
                                    {showIcon(showPass)}
                                </div>
                                <input id="password3" onChange={event => setPassword(event.target.value)} type={showPass ? "text" : "password"} className="text-gray-600 text-base focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center  p-4 text-sm border-solid border-input-border border-2 rounded-lg" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-11/12 pt-6">
                        <div className=" lg:my-0 xl:my-0">
                            <label htmlFor="password3" className="text-gray-800 text-base font-normal leading-tight tracking-normal f-p-t mb-2 pb-3">Confirm New Password</label>
                            <div className="relative pt-3 items-center">
                                <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 pb-2 h-full cursor-pointer" onClick={() => setShowRePassword(!showRePassword)}>
                                    {showIcon(showRePassword)}
                                </div>
                                <input id="password"  onChange={event => setRePassword(event.target.value)} type={showRePassword ? "text" : "password"} className="text-gray-600 text-base focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center  p-4 text-sm border-2 border-solid border-input-border rounded-lg" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-3/5 mt-6">
                        {
                            loader ? <button disabled={loader} type="submit" className="flex items-center justify-center focus:outline-none bg-theme-blue-color rounded-md text-white text-base tracking-widest leading-3 py-2 w-full">
                                <img src="/static/images/loader.svg" style={{width: "36px", height: "36px"}} alt=""/>
                            </button> : <button type="submit" disabled={loader} className="focus:outline-none rounded-lg  py-3 px-5 text-lg text-white bg-theme-blue-color w-full">Change Password</button>
                        }

                    </div>
                </form>
                <div className="flex flex-col mt-5">
                    <p className="text-red-600 text-center">{error}</p>
                </div>
            </MainArea>
        </div>
        </>
    );
};
export default Index;
