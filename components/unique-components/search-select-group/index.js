import React from "react";
import Search from "../../common-components/inputs/input-with-icon-at-start";
import SelectWithIcon from "../../common-components/selector-icon";
const Index = () => {
    return (
        <>
            <div className="sm:flex justify-end">
                <div className="sm:flex items-center justify-between">
                    <div className="sm:mt-1">
                        <div className={"sm:pl-8 sm:py-8"}>
                            <div className="sm:flex flex-col sm:my-8 lg:my-0 xl:my-0">
                                <div className="sm:flex sm:flex-col sm:my-8 lg:my-0 xl:my-0">
                                    <div className={"relative text-theme-gray-color"}>
                                        <div className="absolute flex items-center pl-4 h-full cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input type={"text"} id={"search"} placeholder="Search by Groups" className="focus:outline-none focus:border focus:border-indigo-700 font-normal sm:w-64 w-full h-10 flex items-center pl-12 text-sm border-btn-light-gray rounded border-2  text-theme-gray-color" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mx-6 sm:w-32">
                        <div className="rounded-lg relative  cursor-pointer f-p-t">
                            <div className={"text-theme-gray-color"}>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none inset-0 m-auto mr-2 mb-3" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9E9E9E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                            <select aria-label="Selected tab" className={"focus:outline-none  w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none  h-12" }>
                                <option value="name">Name</option>
                                <option value="description">Description</option>
                                <option value="clinician.firstName">Therapist First Name</option>
                                <option value="clinician.lastName">Therapist Last Name</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
