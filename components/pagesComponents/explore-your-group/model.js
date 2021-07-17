import React, { useEffect } from "react";
import { CalendlyEventListener } from "react-calendly";

function Model({ group, setGroup }) {
    let clinician = group.clinician.items[0];

    const scheduleEvent = () => {

    };

    return(
        <div className="bg-btn-wave-violet fixed top-0 bottom-0 right-0 left-0">
            <div className="w-full h-screen">
                <div>
                    <section className="w-screen h-screen flex justify-center items-center bg-btn-wave-violet sm:px-0 px-4">
                        <div className="bg-white  sm:w-5/12 rounded-lg">
                            <div className="w-full">
                                <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={() => setGroup(null)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-x"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#8C8C8C8C"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>

                            {/*<InlineWidget*/}
                                {/*url={clinician.calendlyURL}*/}
                                {/*onEventScheduled={scheduleEvent}*/}
                            {/*/>*/}
                            <CalendlyEventListener onEventScheduled={scheduleEvent}>
                                <div style={{height: '630px', minWidth: '320px'}}>
                                    <iframe
                                        frameBorder="0"
                                        height="100%"
                                        src={clinician.calendlyURL}
                                        width="100%"
                                    />
                                </div>
                            </CalendlyEventListener>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
} export default Model;