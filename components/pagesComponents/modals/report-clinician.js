import React, { useState } from "react";
const ReportClinicain = ({ reportRes, reportResMsg, reportInProg, reportClinician, setIsConfirm }) => {
    const [reason, setReason] = useState("");
    const [reasonError, setReasonError] = useState(false);
    return (
        <>
            <section className="inset-0 h-full flex justify-center items-center bg-gray-900 fixed bg-opacity-75">
                <div>
                    <div className="relative flex flex-col justify-center items-center  bg-white py-8 px-16 rounded-lg">
                        {reportRes ? (
                            <>
                                <h5 className="f-p-t text-gray-800 text-lg">{reportResMsg}</h5>
                            </>
                        ) : (
                            <>
                                <div onClick={() => setIsConfirm(false)} className="absolute right-0 top-0 pt-6 pr-6 cursor-pointer text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                                <div className="pt-12 pb-6">
                                    <p className=" text-lg font-medium f-p  -t leading-9 text-home-blue-color">Report Clinician</p>
                                </div>
                                <div className="w-10/12 pb-8 font-normal leading-6">
                                    <label className="leading-6 f-p-t text-theme-blue-color font-regular text-base ">Please explain in detail why you are reporting your Clinician:</label>
                                    <textarea
                                        className={"w-full mt-4 px-6 py-4 border-2 resize-none h-32 focus:outline-none rounded-lg text-black" + (reasonError ? " border-red-500 " : " border-btn-light-gray")}
                                        placeholder="Please explain in detail why you are reporting your Clinician"
                                        onChange={(e) => {
                                            setReasonError(false);
                                            setReason(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="justify-center pb-12 text-home-heading flex">
                                    <div className="mr-4">
                                        {reportInProg ? (
                                            <button disabled type="button" className="cursor-not-allowed focus:outline-none f-p-t py-2 px-6 transition duration-150 ease-in-out hover:opacity-90 rounded text-base font-semibold text-theme-blue-color bg-custom-btn-bg">
                                                <img className="w-8" src="/static/images/loader.svg" />
                                            </button>
                                        ) : (
                                            <button onClick={() => (reason.length < 10 ? setReasonError(true) : reportClinician(reason))} type="button" className="focus:outline-none f-p-t py-3 px-5 transition duration-150 ease-in-out hover:opacity-90 rounded text-base font-normal text-theme-blue-color bg-custom-btn-bg">
                                                Submit
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
export default ReportClinicain;
