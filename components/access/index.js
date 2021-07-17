import React, { useState } from "react";
// import { mainPassword } from "../../config"
function Access ({ setCheck }) {

    const compare = mainPassword;
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    // const submit = (event) => {
    //     event.preventDefault();
    //     setError(false);
    //     // if(password === compare){
    //               if(true){
    //         localStorage.setItem("access", "true");
    //         setCheck(false);
    //     } else {
    //         setError(true);
    //     }
    // }
    return <div className="bg-white bg-opacity-10 fixed top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center">
        <form onSubmit={(event) => submit(event)} className="sm:w-1/3">
            <div className="pb-6">
                <div className=" text-custom-black">
                    <label htmlFor="password" className="text-base text-custom-black font-normal fleading-tight f-p-t">Password</label>
                    <input required id="password" className="px-4 py-2 w-full rounded-lg mt-2 focus:outline-none  border-2 text-custom-blackplaceholder-black h-12 border-btn-light-gray " type="password" onChange={event => setPassword(event.target.value)} placeholder=" "/>
                </div>
            </div>
            <button type="submit" className="focus:outline-none f-p-t rounded-lg text-white py-4 px-5 text-lg font-semibold hover:opacity-90 bg-theme-blue-color w-full">LOGIN
            </button>
            {
                error &&
                    <div className="flex flex-col mt-5">
                        <p className="text-red-600 text-center">Incorrect password</p>
                    </div>
            }
        </form>
    </div>
}

export default Access