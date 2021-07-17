import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Auth } from 'aws-amplify';

const ChangePasswordPage=()=>{

    const [name, setUser] = useState("");
    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState(false);
    const [password2, setPassword2] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    // let { query: {user} } = Router.router;
    useEffect(() => {
        let { query: { user } } = Router.router;
        setUser(user);
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        setError("");
        event.preventDefault();
        if(password === newPassword){
            Auth.forgotPasswordSubmit(name, otp, password)
                .then(data => {
                    Router.push('/confirmation-of-new-password');
                })
                .catch(err => {
                    setError(err.message);
                    setLoader(false);
                });
        } else {
            setLoader(false);
            setError("Passwords didn't match");
        }
    };


    return(
        <>
        <div className="absolute pt-16">
            <img src={"https://i.ibb.co/F6cCR8z/Ellipse-background.png"} />
        </div>
        <section className="bg-white min-h-screen py-2">

            <div className="px-2 flex flex-col items-center justify-center">
                <img src={"https://i.ibb.co/6bY1WRb/logo.png"} className="w-64 h-24" />
            </div>
            <form onSubmit={event => onSubmit(event)} className="mx-auto w-1/3 relative pt-40">
                <h3 className={"w-full text-5xl font-bold leading-tight f-r-t text-gray-900 text-center"}>{`Update your password for ${name}`}</h3>
                <div className="px-4">
                    <div className="my-6 px-8">
                        <div className={"flex flex-col  my-8 lg:my-0 xl:my-0 text-black"}>
                            <label htmlFor="password" className="text-base font-normal leading-tight mb-3">OTP <small>(has been sent to your registered email or phone number)</small></label>
                            <div className="relative">
                                <input id="otp" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-12 flex items-center pl-3 text-sm border-gray-300 rounded-md border" onChange={event => setOTP(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="my-6 px-8">
                        <div className={"flex flex-col  my-8 lg:my-0 xl:my-0 text-black"}>
                            <label htmlFor="password" className="text-base font-normal leading-tight mb-3">New Password</label>
                            <div className="relative">
                                <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer" onClick={() => setPassword1(!password1)}>
                                    {
                                        password1 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off text-black" width="21" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <line x1="3" y1="3" x2="21" y2="21" />
                                                <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                                <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                            </svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye text-black" width={21} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={12} cy={12} r={2} />
                                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                            </svg>
                                    }
                                </div>
                                <input id="password" type={password1 ? "text" : "password"} className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-12 flex items-center pl-3 text-sm border-gray-300 rounded-md border"  onChange={event => setPassword(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="my-6 px-8">
                        <div className={"flex flex-col  my-8 lg:my-0 xl:my-0 text-black"}>
                            <label htmlFor="newpassword" className="text-base font-normal leading-tight mb-3">Confirm New Password</label>
                            <div className="relative">
                                <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer" onClick={() => setPassword2(!password2)}>
                                    {
                                        password2 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off text-black" width="21" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <line x1="3" y1="3" x2="21" y2="21" />
                                                <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                                <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                            </svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye text-black" width={21} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={12} cy={12} r={2} />
                                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                            </svg>
                                    }
                                </div>
                                <input id="newpassword" type={password2 ? "text" : "password"} className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-12 flex items-center pl-3 text-sm border-gray-300 rounded-md border"  onChange={event => setNewPassword(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-6">
                        {
                            loader ? <button disabled={loader} type="submit" className="flex items-center justify-center focus:outline-none bg-theme-blue-color rounded-md text-white text-base tracking-widest leading-3 py-2 w-full">
                                <img src="/static/images/loader.svg" style={{width: "36px", height: "36px"}} alt=""/>
                            </button> : <button type="submit" disabled={loader} className="focus:outline-none rounded-lg text-white py-3 px-5 text-lg font-semibold text-white bg-theme-blue-color w-full">SUBMIT</button>
                        }
                    </div>
                    <div className="flex flex-col mt-5">
                        <p className="text-red-600 text-center">{error}</p>
                    </div>
                </div>
            </form>
        </section>
        </>
    );
};
export default ChangePasswordPage;