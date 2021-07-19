import React, { useState, useEffect } from "react";
import TextNormal from "../../unique-components/text-base";
import IconButton from "../../unique-components/icon-button";
import SimpleButton from "../../unique-components/simple-button";
import TextSmall from "../../common-components/text/small";
import TextWithImage from "../../common-components/text-with-image";
import ImgWithSingleText from "../../unique-components/img-with-single-text";
import MainArea from "../../major-components/mainArea";
import Sidebar from "../../major-components/sideBar";
import InstructionModal from "../../pagesComponents/modals/instructions";
import LeaveModal from "../../pagesComponents/modals/leave-group";
import CancelModal from "../../pagesComponents/modals/cancel-session";
import { createParticipantGroup, updateParticipantGroup } from "../../../apii/graphql/customMutations";
import { getGroup } from "../../../apii/graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import Loader from "../../common-components/loader";
import Link from "next/link";
import { placeHolderImageClinician } from "../../../config";
import { openPopupWidget } from "react-calendly";
import TagGroup from "../../common-components/tags/tag-single";
import { getWindowHeight, standardDate } from "../../function";
import Router from "next/router";
import arraySort from "array-sort";
const MonthName = (mon) => {
    var month = ""
    var monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    monthArray.map((m) => {
        if (m.substring(0, 3) === mon) {
            month = m
        }
    }
    )
    return month
};
const DayName = (da) => {
    var day = ""
    var dayArray = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    dayArray.map((d) => {
        if (d.substring(0, 3) === da) {
            day = d
        }
    }
    )
    return day
};
const Index = ({ id, participant, schedule, dispatch }) => {
    const [modal, setModal] = useState(false);
    const [leave, setLeave] = useState(false);
    const [group, setGroup] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [clinician, setClinician] = useState(false);
    const [cancelSessionModal, setCancel] = useState(false);
    const [loading, setloading] = useState("Register");
    const [error, setError] = useState("");
    const monthName = (mon) => {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mon - 1];
    };
    const [eventDetails, setEventDetails] = useState([]);
    const [days, setDays] = useState([]);
    const [sessionTime, setSessionTime] = useState("");
    const [occurrences, setOccurrences] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endYear, setEndYear] = useState("");
    const [height, setHeight] = useState(false);
    const [sortedDates, setSortedDates] = useState([]);
    const [bookingDate, setBookingDate] = useState(null);
    const [dateEmpty, setDateEmpty] = useState(false);
    const [startFullDate, setStartFullDate] = useState('');
    const [endFullDate, setEndFullDate] = useState('');
    // to disable session consultation if already booked
    const [checkSC, SetCheckSC] = useState(false)

    useEffect(() => {
        if (participant) {
            let filter = [];
            participant.tags.items.forEach((item) => {
                if (item.tag) {
                    filter.push({ tagId: { eq: item.tag.id } });
                }
            });

        }
        setHeight(getWindowHeight() - 200);
    }, [participant]);

    useEffect(() => {
        API.graphql(graphqlOperation(getGroup, { id }))
            .then(async (res) => {
                setGroup(res.data.getGroup);
                setCurrValues(res.data);
                setClinician(res.data.getGroup.clinician.items[0]);
            })
            .catch((err) => {
                if (err.data) {
                    setGroup(err.data.getGroup);
                    setCurrValues(err.data);
                    setClinician(err.data.getGroup.clinician.items[0]);
                }
                console.error("err is here", err);
            });
    }, []);

    // if user already register disabling the schedule consultation button
    useEffect(() => {
        if (group !== false) {
            let partValues = group.participants.items;
            partValues.map((item, index) => {
                if (item?.participant?.id === participant?.id) {
                    SetCheckSC(true)
                }
            })
        }
    }, [group, participant])

    useEffect(() => {
        if (schedule && clinician) {
            //bookCurrentConsultation();
        }
    }, [schedule, clinician])
    useEffect(() => {
        if (group) {
            sorting();
        }
    }, [group])

    const setCurrValues = (data) => {
        let schedule = data.getGroup.schedule && JSON.parse(data.getGroup.schedule);
        setEventDetails(schedule);
        setDays(schedule.days);
        if (schedule.sessionTime) {
            let hours = schedule.sessionTime ? schedule.sessionTime.substring(0, 2) : "00";
            let minutes = schedule.sessionTime ? schedule.sessionTime.substring(2, 5) : "00";
            if (hours > 12) {
                setSessionTime((hours % 12) + minutes + " PM");
            } else if (hours === 0) {
                setSessionTime(12 + minutes + " AM");
            } else if (hours === 12) {
                setSessionTime(12 + minutes + " PM");
            } else {
                setSessionTime((hours % 12) + minutes + " AM");
            }
        }
        let start = null;
        if (schedule.startDate) {
            start = schedule.startDate;
        } else {
            start = schedule.sessionDate;
        }
        if (start) {
            setStartMonth(start.substring(5, 7));
            setStartDate(start.substring(8, 10));
            var dateObj = new Date(start)
            var date = dateObj.toString()
            var tempDate = date.substring(0, 16)
            var day = tempDate.substring(0, 3)
            var month = tempDate.substring(4, 7)
            var datee = tempDate.substring(8, 10)
            var year = tempDate.substring(11)
            var finalDate = DayName(day) + ", " + MonthName(month) + " " + datee + ", " + year
            setStartFullDate(finalDate)
        }
        if (schedule.endDate) {
            setEndMonth(schedule.endDate.substring(5, 7));
            setEndDate(schedule.endDate.substring(8, 10));
            setEndYear(schedule.endDate.substring(0, 4));
            var dateObj = new Date(schedule.endDate)
            var date = dateObj.toString()
            var tempDate = date.substring(0, 16)
            var day = tempDate.substring(0, 3)
            var month = tempDate.substring(4, 7)
            var datee = tempDate.substring(8, 10)
            var year = tempDate.substring(11)
            var finalDate = DayName(day) + ", " + MonthName(month) + " " + datee + ", " + year
            setEndFullDate(finalDate)
        } else {
            setOccurrences(schedule.occurrences);
        }
    };

    const seatsLeft = () => {
        let max = group.maxParticipants;
        let bookedSeats = group.participants.items.length;
        return parseInt(max) - bookedSeats;
    };
    const bookSeat = () => {
        setloading("Verifying");
        if (false) {
            Router.push(`/stripe-account-setup/?group=${group.id}`);
            setloading("Register");
        } else {
            setloading("Register");
            setDateEmpty(false);
            if (!bookingDate && group.type === "single") {
                setDateEmpty(true);
            } else {
                if (seatsLeft()) {
                    setloading("Verifying...");
                    let single = group.participants.items.find((sin) => {
                        if (sin) return sin.participant.id === participant.id;
                    });
                    let main = participant.groups.items.find(single => single?.group.id === group.id);
                    if (group.type === "multi" && !single) {
                        createUpdateParticipantGroupAPI(null);
                    } else if (group.type === "single" && (!main || main?.sessionId.indexOf(bookingDate) === -1)) {
                        createUpdateParticipantGroupAPI(main);
                    } else {
                        setError("You are already signed up for this group");
                        setloading("Register");
                        setTimeout(function () {
                            setError("");
                        }, 3500);
                    }
                }
                else {
                    setError("No seats left.");
                    setTimeout(function () {
                        setError("");
                    }, 3500);
                }
            }
        }
    };

    const createUpdateParticipantGroupAPI = (current) => {
        console.log("Current", current);
        // if (clinician.calendlyURL) {
        //     openPopupWidget({
        //         url: clinician.calendlyURL,
        //         prefill: {
        //             email: participant.email,
        //             firstName: participant.firstName,
        //             lastName: participant.lastName,
        //             name: participant.firstName + " " + participant.lastName,
        //         },
        //     });
        // }
        setloading("Booking your seat...");
        if (current) {
            let sessionIds = [];
            try {
                sessionIds = JSON.parse(current.sessionId);
                sessionIds.push(bookingDate);
            } catch (err) {
                sessionIds = [current.sessionId, bookingDate];
            }
            let payload = {
                id: current.id,
                participantGroupGroupId: group.id,
                participantGroupParticipantId: participant.id,
                sessionId: JSON.stringify(sessionIds),
                paymentId: "null",
                approved: false,
            };
            API.graphql(graphqlOperation(updateParticipantGroup, { input: payload }))
                .then((res) => {
                    setloading("Successful");
                    participant.groups.items.forEach(single => {
                        if (single?.id === current.id) {
                            single.sessionId = JSON.stringify(sessionIds);
                        }
                    });
                    dispatch({
                        type: "SET_PARTICIPANT",
                        payload: participant
                    });
                    // { !participant.paymentDetails || !participant.billingInformtion ? Router.push("/setup-payment") : " not pushed" }
                })
                .catch((err) => {
                    if (err?.data?.updateParticipantGroup) {
                        setloading("Successful");
                        // { !participant.paymentDetails || !participant.billingInformtion ? Router.push("/setup-payment") : " not pushed" }
                    } else {
                        console.error("err is here", err);
                        setError(err.message);
                        setTimeout(function () {
                            setError("");
                        }, 3500);
                        setloading("Register");
                    }
                });
        } else {
            let payload = {
                participantGroupGroupId: group.id,
                participantGroupParticipantId: participant.id,
                sessionId: bookingDate ? JSON.stringify([bookingDate]) : "",
                paymentId: "null",
                approved: false,
            };
            API.graphql(graphqlOperation(createParticipantGroup, { input: payload }))
                .then((res) => {
                    setloading("Successful");

                    // { !participant.paymentDetails || !participant.billingInformtion ? Router.push("/setup-payment") : " not pushed" }
                })
                .catch((err) => {
                    if (err?.data?.createParticipantGroup) {
                        setloading("Successful");
                        // { !participant.paymentDetails || !participant.billingInformtion ? Router.push("/setup-payment") : " not pushed" }
                    } else {
                        console.error("err is here", err);
                        setError(err.message);
                        setTimeout(function () {
                            setError("");
                        }, 3500);
                        setloading("Register");
                    }
                });
        }
    }

    const bookCurrentConsultation = () => {
        if (clinician.calendlyURL) {
            openPopupWidget({
                url: clinician.calendlyURL,
                prefill: {
                    email: participant.email,
                    firstName: participant.firstName,
                    lastName: participant.lastName,
                    name: participant.firstName + " " + participant.lastName,
                },
            });
        }
    };
    const verifyPaymentDetails = () => {
        if (false) {
            Router.push(`/stripe-account-setup/?group=${group.id}`);
        } else {
            //bookCurrentConsultation();
        }
    }
    const selectSeesionDataTime = (value) => {
        if (!value) {
            setDateEmpty(true);
        } else {
            setBookingDate(value);
            setDateEmpty(false);
        }
    }
    const sorting = () => {
        let array = [], sortedarray = [];
        group.sessions.items.map((item) => {
            array.push(item);
        })
        sortedarray = arraySort(array, "sessionDate");
        setSortedDates(sortedarray);
    }

    return (
        <>
            <div className="flex h-full w-full">
                <Sidebar />
                <MainArea>
                    <div className="bg-light-pink">
                        {group ? (
                            <div className="sm:px-8 px-4  py-3 ">
                                <div className="flex mb-3">
                                    <TextNormal text="My Group" textColor="text-theme-gray-color" textSize="text-base" textWeight="font-normal" />
                                    <p className="mx-3">/</p>
                                    <TextNormal text={group.name} textColor="text-theme-blue-color" textSize="text-base" textWeight="font-normal" />
                                </div>
                                <div className="bg-white overflow-y-scroll rounded-lg sm:px-8 px-4 py-12" style={{ height }}>
                                    <div className="sm:flex items-center justify-between">
                                        <div className="sm:pb-0 pb-4">
                                            <Link href="/explore">
                                                <a>
                                                    <IconButton text="Back to Explore" fontclass='f-p-t' bgColor="bg-custom-btn-bg" textColor="text-theme-blue-color" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex justify-between items-center">

                                            <div className="sm:flex items-center">
                                                {group.type && group.type === "single" ?
                                                    <div className="sm:mr-6  sm:pb-0 " >
                                                        <select required aria-label="Selected tab" onChange={(e) => selectSeesionDataTime(e.target.value)}
                                                            className='focus:outline-none f-p-t w-full px-3 py-2 border-2 rounded-lg cursor-pointer text-theme-blue-color text-base h-10 border-input-border  hover:border-theme-blue-color bg-white hover:border-home-blue-color'>
                                                            <option value="">Select Session</option>
                                                            {sortedDates && sortedDates.map((item) => {
                                                                let day = standardDate(item.sessionDate).dateNumber;
                                                                let month = standardDate(item.sessionDate).monthName;
                                                                let year = standardDate(item.sessionDate).fullYear;
                                                                let finalTime = '-';
                                                                if (item.sessionTime && item.sessionDate) {
                                                                    let hours = item.sessionTime.substring(0, 2);
                                                                    let minutes = item.sessionTime.substring(2, 5);
                                                                    if (hours >= 12) {
                                                                        finalTime = (hours % 12) + minutes + ' PM';
                                                                    } else {
                                                                        finalTime = (hours % 12) + minutes + ' AM';
                                                                    }
                                                                }
                                                                return (
                                                                    <option value={item.id} key={item.id}>{day} {month} {year} - {finalTime} </option>
                                                                );
                                                            })}

                                                        </select>

                                                    </div>
                                                    : null}
                                                {loading === "Successful" ? (
                                                    <div className="mr-4 f-p-t">
                                                        <SimpleButton disabled={loading === "Booking..." || loading === "Verifying..."} textColor={"text-white"} bgColor={"bg-theme-blue-color"} paddingX="px-16" paddingY="py-2" btnText={loading} fontWeight="font-normal" />
                                                    </div>
                                                ) : (
                                                        <div onClick={() => bookSeat()} className="mr-4">
                                                            <SimpleButton disabled={loading === "Booking..." || loading === "Verifying..."} textColor={"text-white"} bgColor={"bg-theme-blue-color"} paddingX="px-16" paddingY="py-2" btnText={loading} fontWeight="font-normal" />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-4 justify-end  h-10 flex ">
                                        <div className="w-9/12 ">
                                            {group.type && group.type === "single" && dateEmpty ?
                                                <p className="text-red-400 text-right f-p-t font-medium text-base">Please Select Date</p>
                                                : ""
                                            }
                                        </div>
                                        <div className="w-3/12">
                                            <p className="text-red-500 f-p-t  text-right font-medium  text-base pr-4">{error}</p>
                                        </div>
                                    </div>

                                    <div className="w-full pt-5 sm:flex justify-between">
                                        <div className="sm:w-5/12">
                                            <div>
                                                <TextSmall text={group.name} textColor="text-theme-blue-color" textSize="text-5xl" fontWeight="font-bold" fontclass="f-r-t" />
                                            </div>
                                            <div className="py-3 sm:text-left text-center">
                                                <TextNormal text="DESCRIPTION " textColor="text-theme-gray-color" textSize="text-lg" textWeight="font-normal" />
                                            </div>
                                            <div className="sm:text-left text-center">
                                                <TextNormal text={group.description} textColor="text-custom-black" textSize="text-base" textWeight="font-normal" />
                                            </div>
                                            <div className="pt-6 flex flex-wrap">
                                                {group.tags.items.map((single, index) => {
                                                    return single.tag && <TagGroup key={index} text={single.tag.name} />;
                                                })}
                                            </div>
                                            <div className="pt-20 sm:text-left text-center sm:mb-0 mb-8">
                                                <TextNormal text="About Therapist " textColor="text-theme-gray-color" fontclass='f-p-t' textSize="text-lg" textWeight="font-normal" />
                                            </div>
                                            <div className="pt-3 f-p-t">{clinician && <TextWithImage text={clinician.firstName + " " + clinician.lastName + " / " + clinician.credentials} height="h-16" width="w-16" fontclass='f-p-t' imgUrl={clinician.featuredImage ? clinician.featuredImage : placeHolderImageClinician} textColor="text-theme-blue-color" />}</div>
                                            <div className="pt-3 sm:text-left text-center">{clinician && <TextNormal text={clinician.bio} textColor="text-custom-black" textSize="text-base" textWeight="font-normal" />}</div>
                                        </div>
                                        <div className="sm:w-1/2 sm:mt-o mt-8">
                                            <div className="">
                                                <div className="border-2 border-gray-300 rounded-lg sm:py-6  sm:px-10 p-2">
                                                    <h1 className="text-center text-2xl text-theme-blue-color f-p-t font-semibold ">How to join this group</h1>
                                                    <p className="flex-shrink-0 leading-loose pt-2 f-p-t text-custom-black font-normal text-base">1) Select a date and time you would like to attend and book your seat</p>
                                                    <p className="flex-shrink-0 leading-loose pt-1 f-p-t text-custom-black font-normal text-base">2) Your new group and session dates and times will appear on the ‘My Groups’ page</p>
                                                    <p className="flex-shrink-0 leading-loose pt-1 f-p-t text-custom-black font-normal text-base">3) When it is time for your group session, click on the session details to access your Google Meet link</p>
                                                    <p className="flex-shrink-0 leading-loose pt-1 f-p-t text-custom-black font-normal text-base">4) Google Meet will launch a new browser tab for your session</p>
                                                    {/*{clinician && clinician.calendlyURL && (*/}
                                                    {/*<div>*/}
                                                    {/*/!* Condition to disable schedule consultation *!/*/}
                                                    {/*{ checkSC === false ?*/}
                                                    {/*<div className=" text-center py-4" onClick={() => { verifyPaymentDetails() }}>*/}
                                                    {/*<SimpleButton textColor="text-theme-blue-color" bgColor="bg-custom-btn-bg" borderClasses="" btnText="Schedule Consultation" fontWeight="font-Normal" />*/}
                                                    {/*</div> :*/}
                                                    {/*<div className=" text-center py-4 flex items-center justify-center cursor-not-allowed">*/}
                                                    {/*<div className='bg-gray-100 w-52 flex items-center justify-center cursor-not-allowed text-gray-600 px-5 h-10 focus:outline-none f-p-t'>*/}
                                                    {/*Register*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*}*/}
                                                    {/*</div>*/}
                                                    {/*)}*/}
                                                </div>
                                                <div className="border-2 border-gray-300 rounded-lg sm:p-6 p-2 mt-20">
                                                    <div className="sm:flex items-center justify-between">
                                                        <ImgWithSingleText imgUrl="/static/images/calender.svg"
                                                            text={
                                                                // monthName(startMonth) + " " + startDate + (occurrences || endDate ? " - " + (occurrences ? occurrences + " Occurrences" : monthName(endMonth) + " " + endDate + ", " + endYear) : "")
                                                                startFullDate ? startFullDate : "" ||
                                                                    !occurrences ? "" : endFullDate
                                                            }
                                                            textColor="text-custom-black  " />
                                                        <div className="sm:mt-o mt-2 sm:ml-0 ml-8">{/*<SimpleButton textColor="text-theme-blue-color" bgColor="bg-custom-btn-bg" borderClasses="" btnText="Add To Calendar" width="" fontWeight="font-Normal" />*/}</div>
                                                    </div>
                                                    <div className=" py-6">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <img src="/static\images\clock.svg" className="w-6 h-6 mr-5" />
                                                            </div>
                                                            <div>
                                                                <p className="text-base font-medium leading-3 f-p-t text-custom-black">
                                                                    {/* <span>Every </span> */}
                                                                    {/* {days &&
                                                                        days.map((day, i) => {
                                                                            return <span key={i}>{day}, </span>;
                                                                        })} */}
                                                                    <span>{sessionTime}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" ">
                                                        <ImgWithSingleText imgUrl="/static\images\money.svg" text={"$" + group.price + " / Session"} textColor="text-custom-black  " />
                                                    </div>
                                                    <div className="flex pt-6">
                                                        <ImgWithSingleText imgUrl="/static\images\zoom.svg" text="Google Meet" textColor="text-custom-black  " />
                                                        <div className="ml-4 cursor-pointer" onClick={() => setModal(true)}>
                                                            <TextNormal text="How To connect " textColor="text-theme-blue-color" textSize="text-base" textWeight="font-medium" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className='w-full'>
                                    <Loader />
                                </div>
                            )}
                    </div>
                </MainArea>
            </div>
            {modal && <InstructionModal show={modal} setModal={setModal} />}
            {leave && <LeaveModal participant={participant} show={leave} setLeave={setLeave} setConfirm={setConfirm} />}
            {cancelSessionModal && <CancelModal show={cancelSessionModal} setCancel={setCancel} />}
        </>
    );
};
export default Index;
