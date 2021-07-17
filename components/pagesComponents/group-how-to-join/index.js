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
import EventSuccess from "../../pagesComponents/modals/event-success";
import { getGroup } from "../../../api/graphql/customQueries";
import { createParticipantGroup } from "../../../api/graphql/customMutations";
import { listParticipantGroups } from "../../../api/graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import Loader from "../../common-components/loader";
import Link from "next/link";
import {
    placeHolderImageClinician,
    g_calendar_api_key,
    g_calendar_scopes,
    g_client_id,
    emailRequest
} from "../../../config";
import ReportClinicain from "../modals/report-clinician";
import { createReport } from "../../../api/graphql/mutations";
import { openPopupWidget } from "react-calendly";
import Router from "next/router";
import CancelSingleSession from "./models/cancelSingleSession";
import CancelMultiSession from "./models/cancelMultiSession";
import sortArray from "array-sort";
import { standardDate, getWindowHeight } from "../../function";
import TagGroup from "../../common-components/tags/tag-single";
import ConfirmModel from "../../pagesComponents/modals/my-groups"
import { api } from "../../../helpers/api";
const Index = ({ id, participant, invited, userId }) => {
    const [modal, setModal] = useState(false);
    const [group, setGroup] = useState(false);
    const [clinician, setClinician] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [reportInProg, setReportInProg] = useState(false);
    const [reportRes, setReportRes] = useState(false);
    const [reportResMsg, setReportResMsg] = useState("");
    const [days, setDays] = useState("");
    const [sessionTime, setSessionTime] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endYear, setEndYear] = useState("");
    const [eventDetails, setEventDetails] = useState([]);
    const [addEventLoading, setAddEventLoading] = useState(false);
    const [addEventSuccess, setAddEventSuccess] = useState(false);
    const [addEventError, setAddEventError] = useState(false);
    const [loading, setloading] = useState("Accept");
    const [error, setError] = useState("");
    const [show, setShowModal] = useState(false);
    const [approved, setApproved] = useState(false);
    const [occurrences, setOccurrences] = useState("");
    const [starts, setStarts] = useState("");
    const [ends, setEnds] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [height, setHeight] = useState(false);
    const [SessionDay, setSessionDay] = useState("");
    const [SessionMonth, setSessionMonth] = useState("");
    const [SessionYear, setSessionYear] = useState("");
    const [SessionDate, setSessionDate] = useState("");
    const [Time, setTime] = useState("");
    const [startFullDate, setStartFullDate] = useState('');
    const [endFullDate, setEndFullDate] = useState('');

    const monthName = (mon) => {
        return [
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
        ][mon - 1];
    };
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
    useEffect(() => {
        if (participant) {
            API.graphql(graphqlOperation(getGroup, { id }))
                .then((res) => {
                    setGroupData(res.data);
                })
                .catch((err) => {
                    console.error("err is here", err);
                    if (err && err.data && err.data.getGroup) {
                        setGroupData(err.data);
                    }
                });
        }
        setHeight(getWindowHeight() - 315);
    }, [participant]);

    useEffect(() => {
        if (group && group.type === "single") {
            let sessions = [];
            group.sessions.items.map((item) => {
                sessions.push(item);
            })
            extractSession(sessions);
        }
    }, [group])
    const extractSession = async (sessions) => {
        let result = await API.graphql(graphqlOperation(listParticipantGroups)).then(async (res) => {
            return res.data.listParticipantGroups.items.find((item) => { return item?.group.id === group.id })
        }).catch((err) => {
            if (err?.data?.listParticipantGroups) {
                return err.data.listParticipantGroups.items.find((item) => { return item?.group.id === group.id })
            }
            console.log('participantGroups', err);
        });
        let sessionsIds = JSON.parse(result.sessionId);
        let Allsessions = [];
        let AllsessionsDates = [];
        sessionsIds.map((s) => {
            let x = sessions.find((item) => { return item.id === s });
            Allsessions.push(x);
            let day = standardDate(x.sessionDate).dateNumber;
            let month = standardDate(x.sessionDate).monthName;
            let year = standardDate(x.sessionDate).fullYear;
            let date = day + " " + month + " " + year;
            AllsessionsDates.push(date);
        })
        detectClientValues(Allsessions);
        setSessionDate(AllsessionsDates);
        // let day = standardDate(Session.sessionDate).dateNumber;
        // let month = standardDate(Session.sessionDate).monthName;
        // let year = standardDate(Session.sessionDate).fullYear;


    }
    const setGroupData = (data) => {
        setGroup(data.getGroup);
        let toFind = data.getGroup.participants.items.find((element) => element?.participant.id === participant.id);
        if (toFind.approved) {
            setApproved(true);
        } else {
            setApproved(false);
        }
        setClinician(data.getGroup.clinician.items[0]);
        detectClientValues(data.getGroup.sessions.items);
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

    const detectClientValues = (sessions) => {
        let dup = sortArray(sessions, "sessionDate");
        let first = dup[0];
        let last = dup[dup.length - 1];
        setStarts(first);
        setEnds(last);
    };

    function initClient() {
        gapi.client
            .init({
                apiKey: g_calendar_api_key,
                clientId: g_client_id,
                scope: g_calendar_scopes,
            })
            .then(
                function () {
                    gapi.auth2.getAuthInstance().isSignedIn.listen(checkSigninStatus);
                    checkSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                },
                function (error) {
                    console.error("error", JSON.stringify(error, null, 2));
                }
            );
    }

    function checkSigninStatus(isSignedIn) {
        if (isSignedIn) {
            gapi.client.load("calendar", "v3", createAnEvent);
        } else {
            gapi.auth2.getAuthInstance().signIn();
            gapi.client.load("calendar", "v3", createAnEvent);
        }
    }

    const identifyVariables = (initial) => {
        switch (initial) {
            case "weeks":
                return "WEEKLY";
            case "months":
                return "MONTHLY";
            case "years":
                return "YEARLY";
            default:
                return;
        }
    };

    const identifyVariablesInitial = (initial) => {
        switch (initial) {
            case "weeks":
                return "BYWEEK";
            case "months":
                return "BYMONTH";
            case "years":
                return "BYYEARDAY";
            default:
                return;
        }
    };

    const getAllDates = () => {
        let dates = "";
        group.sessions.items.forEach((starts, index) => {
            if (index !== 0) {
                dates =
                    dates +
                    (index === 1 ? "" : ",") +
                    starts.sessionDate.replace(/-/g, "");
            }
        });
        return dates;
    };

    const getOccurrences = () => {
        let endDate = addDay(ends.sessionDate).replace(/-/g, "");
        let newDays = [],
            stringified = [];
        switch (eventDetails.type) {
            case "no_repeat":
                return [];
            case "daily":
                return [
                    "RRULE:FREQ=" + eventDetails.type.toUpperCase() + ";UNTIL=" + endDate,
                ];
            case "weekly":
                newDays = [...days];
                stringified = [];
                newDays.forEach((day) =>
                    stringified.push(day.substring(0, 2).toUpperCase())
                );
                stringified = stringified.toString();
                return [
                    "RRULE:FREQ=" +
                    eventDetails.type.toUpperCase() +
                    ";BYDAY=" +
                    stringified +
                    ";UNTIL=" +
                    endDate,
                ];
            case "monthly":
                // newDays = [...days];
                // stringified = [];
                // newDays.forEach((day) => stringified.push(day.substring(0, 2).toUpperCase()));
                // stringified = stringified.toString();
                // return ["RRULE:FREQ=" + identifyVariables(eventDetails.jumpType) + ";INTERVAL="+eventDetails.jumpNumber+";"+"BYDAY=" + stringified + ";UNTIL=" + endDate];
                return ["RDATE;VALUE=DATE:" + getAllDates()];
            default:
                return "";
        }
    };

    Date.prototype.addHours = function (h) {
        this.setTime(this.getTime() + h * 60 * 60 * 1000);
        return this;
    };

    const addDay = (date) => {
        let result = new Date(date);
        result.setDate(result.getDate() + 1);
        return standardDate(result).standardDateRe;
    };
    function createAnEvent() {
        setAddEventLoading(true);
        let startsDate, endsDate = null;
        if (group) {
            startsDate = new Date(starts.sessionDate + "T" + starts.sessionTime);
            endsDate = new Date(
                starts.sessionDate + "T" + starts.sessionTime
            ).addHours(parseInt(group.length));
        }
        let event = {
            summary: group.name,
            description: group.description,
            start: {
                dateTime: startsDate,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            end: {
                dateTime: endsDate,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, //"America/Los_Angeles"
            },
            recurrence: getOccurrences(),
            reminders: {
                useDefault: true,
            },
        };

        let createEvent = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
        });
        createEvent.execute(function (eve) {
            if (eve.code && eve.code === 400) {
                setAddEventError(true);
                setAddEventSuccess(false);
                setAddEventLoading(false);
                setTimeout(() => {
                    setAddEventError(false);
                }, 3000);
            } else {
                setAddEventLoading(false);
                setAddEventError(false);
                setAddEventSuccess(true);
            }
        });
    }

    const getEvents = () => {
        setAddEventLoading(true);
        gapi.load("client:auth2", initClient);
    };
    const reportClinician = async (reason) => {
        setReportInProg(true);
        let input = {
            body: reason,
            clinicianId: clinician.id,
            groupId: group.id,
            participantId: id,
            type: "participant",
        };

        await API.graphql(graphqlOperation(createReport, { input }))
            .then(async (res) => {
                const payload = {
                    type: "reportOnTherapist",
                    params: {
                        participantName: participant.firstName,
                        participantEmail: participant.email,
                        clinicianName: clinician.firstName
                    }
                }
                api.postApi(emailRequest, payload).then((res) => {

                }).catch((err) => {

                })

                setReportRes(true);
                setReportResMsg("Report Submitted Successfully");
                setTimeout(() => {
                    setIsConfirm(false);
                    setReportRes(false);
                }, 2000);
                setReportInProg(false);
            })
            .catch((err) => {
                setReportResMsg("There was an error. Please try again");
                setTimeout(() => {
                    setIsConfirm(false);
                    setReportRes(false);
                }, 2000);
                setReportInProg(false);
            });
    };

    const seatsLeft = () => {
        let max = group.maxParticipants;
        let bookedSeats = group.participants.items.length;
        return parseInt(max) - bookedSeats;
    };

    const bookSeat = () => {
        if (seatsLeft()) {
            setloading("Verifying...");
            API.graphql(graphqlOperation(getGroup, { id: id })).then((res) => {
                let single = res.data.getGroup.participants.items.find(
                    (single) => single.participant.id === userId
                );
                if (!single) {
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
                    setloading("Booking...");
                    let payload = {
                        participantGroupGroupId: id,
                        participantGroupParticipantId: userId,
                        approved: false,
                    };
                    API.graphql(
                        graphqlOperation(createParticipantGroup, { input: payload })
                    )
                        .then((res) => {
                            setloading("Successful");
                            setTimeout(function () {
                                Router.replace("/group-detail/" + id);
                            }, 3500);
                        })
                        .catch((err) => {
                            console.error("err is here", err);
                            setError(err.message);
                            setTimeout(function () {
                                setError("");
                            }, 3500);
                            setloading("Book");
                        });
                } else {
                    setError("Already a member.");
                    setloading("Book");
                    setTimeout(function () {
                        setError("");
                    }, 3500);
                }
            });
        } else {
            setError("No seats left.");
            setTimeout(function () {
                setError("");
            }, 3500);
        }
    };

    const decline = () => {
        Router.replace("/group-detail/" + id);
    };

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
    const checkGroupType = () => {
        if (group && group.sessions.items[0]) {
            let item = group.sessions.items[0];
            if (item.type === "no_repeat") {
                let sessionDate = new Date(
                    item.sessionDate + "T" + item.sessionTime + ":00"
                );
                let current = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
                return current < sessionDate;
            } else {
                return true;
            }
        }
    };

    const leaveGroup = () => {
        let item = group.sessions.items[0];
        if (item && item.group) {
            if (item.type === "no_repeat") {
                setShowModal(1);
            } else {
                setShowModal(2);
            }
        }
    };

    const POPUPS = () => {
        switch (show) {
            case 1:
                return (
                    <CancelSingleSession
                        group={group}
                        participant={participant}
                        setModal={setShowModal}
                        setConfirm={setConfirm}
                    />
                );
            case 2:
                return (
                    <CancelMultiSession
                        group={group}
                        setConfirm={setConfirm}
                        participant={participant}
                        setModal={setShowModal}
                    />
                );
            default:
                return;
        }
    };
    return (
        <>
            <div className="flex h-full ">
                <Sidebar />
                <div className='w-full'>
                    <div className='bg-white'>
                        <MainArea />
                    </div>
                    <div className="bg-light-pink pb-40 w-full">
                        {group ? (
                            <div className="sm:px-8 px-4  py-3 ">
                                <div className="flex mb-3">
                                    <TextNormal text="My Group" textColor="text-theme-gray-color" textSize="text-base" textWeight="font-normal" />
                                    <p className="mx-3">/</p>
                                    <TextNormal text={group.name} textColor="text-theme-blue-color" textSize="text-base" textWeight="font-normal" />
                                </div>
                                <div className="bg-white sm:px-8 px-4 pt-12 pb-2 rounded-lg">
                                    <div className="sm:flex items-center justify-between pb-4">
                                        <div className="sm:pb-0 pb-4">
                                            <Link href="/my-groups">
                                                <a>
                                                    <IconButton text="Back to My Groups" bgColor="bg-custom-btn-bg" textColor="text-theme-blue-color" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="sm:flex">
                                            {/* {clinician && clinician.calendlyURL && (
                                <div className="sm:mr-6 sm:pb-0 pb-4" onClick={() => bookCurrentConsultation()}>
                                  <SimpleButton textColor="text-theme-blue-color" bgColor="bg-custom-btn-bg" borderClasses="" btnText="Book Consultation" width="sm:w-full " fontWeight="font-Normal" />
                                </div>
                            )} */}
                                            {checkGroupType() && (
                                                <div onClick={() => leaveGroup()} className="sm:pb-0 pb-4">
                                                    <SimpleButton textColor="text-theme-blue-color" bgColor="bg-custom-btn-bg" borderClasses="" btnText="Leave Group" width="sm:w-full w-40" fontWeight="font-Normal" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full pt-1 sm:flex justify-between overflow-y-scroll" style={{ height }}>
                                        <div className="sm:w-5/12">
                                            <div>
                                                <TextSmall text={group.name} textColor="text-theme-blue-color" textSize="text-5xl" fontWeight="font-bold" fontclassName="f-r-t" />
                                            </div>
                                            <div className="py-3 sm:text-left text-center">
                                                <TextNormal text="DESCRIPTION " textColor="text-theme-gray-color" textSize="text-lg" textWeight="font-normal" />
                                            </div>
                                            <div className="sm:text-left text-center">
                                                <TextNormal text={group.description} textColor="text-custom-black" textSize="text-base" textWeight="font-normal" />
                                            </div>
                                            <div className="pt-6 flex flex-wrap">
                                                {
                                                    group.tags.items.map(single => {
                                                        return single.tag && (
                                                            <div className='py-1'>
                                                                <TagGroup text={single.tag.name} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="pt-20 sm:text-left text-center sm:mb-0 mb-8">
                                                <TextNormal text="About Therapist " textColor="text-theme-gray-color" textSize="text-lg" textWeight="font-normal" />
                                            </div>

                                            <div className="pt-3 flex justify-between items-center">
                                                <TextWithImage
                                                    text={
                                                        clinician.firstName +
                                                        " " +
                                                        clinician.lastName +
                                                        " / " +
                                                        clinician.credentials
                                                    }
                                                    height="h-16"
                                                    width="w-16"
                                                    imgUrl={
                                                        clinician.featuredImage
                                                            ? clinician.featuredImage
                                                            : placeHolderImageClinician
                                                    }
                                                    textColor="text-theme-blue-color"
                                                />
                                                <div
                                                    className="flex-shrink-0"
                                                    onClick={() => setIsConfirm(true)}
                                                >
                                                    <SimpleButton
                                                        textColor="text-theme-blue-color"
                                                        bgColor="bg-custom-btn-bg"
                                                        borderClasses=""
                                                        btnText="Report Clinician"
                                                        width=""
                                                        fontWeight="font-Normal"
                                                    />
                                                </div>
                                            </div>
                                            <div className="pt-4 sm:text-left text-center">
                                                <TextNormal
                                                    text={clinician.bio}
                                                    textColor="text-custom-black"
                                                    textSize="text-base"
                                                    textWeight="font-normal"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:w-1/2 sm:mt-o mt-8">
                                            <div className="">
                                                <div className="border-2 border-theme-gray-color rounded-lg sm:p-6 p-2">
                                                    <div className="sm:flex items-center justify-between">
                                                        <ImgWithSingleText
                                                            imgUrl="/static/images/calender.svg"
                                                            text={
                                                                // group && group.type === "single" ? SessionDate && SessionDate.map((d) => <p>{d}</p>) : monthName(startMonth) +
                                                                //     " " +
                                                                //     startDate +
                                                                // (occurrences || endDate
                                                                //     ? " - " +
                                                                //     (occurrences
                                                                //         ? occurrences + " Occurrences"
                                                                //         : monthName(endMonth) +
                                                                //         " " +
                                                                //         endDate +
                                                                //         ", " +
                                                                //         endYear)
                                                                //     : "")
                                                                startFullDate ? startFullDate : "" ||
                                                                    !occurrences ? "" : endFullDate
                                                            }
                                                            textColor="text-custom-black leading-6 "
                                                        />
                                                        {addEventLoading ? (
                                                            <div className="sm:mt-o mt-2 sm:ml-0 ml-8">
                                                                <button
                                                                    disabled
                                                                    className="focus:outline-none f-p-t text-base px-10 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-10  font-semibold text-theme-blue-color bg-custom-btn-bg cursor-not-allowed "
                                                                >
                                                                    <img
                                                                        src="/static/images/loader.svg"
                                                                        className="w-8 h-8"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                                <div
                                                                    onClick={getEvents}
                                                                    className="sm:mt-o mt-2 sm:ml-0 ml-8"
                                                                >
                                                                    <button className="focus:outline-none f-p-t text-white text-base xl:text-xs 2xl:text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-10 font-Normal text-theme-blue-color bg-custom-btn-bg xl:w-40 2xl:w-auto">Add To Calendar</button>
                                                                    {addEventError && (
                                                                        <p className="text-sm text-red-400 f-p-t mt-2">
                                                                            Unexpected error occurred
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            )}
                                                    </div>
                                                    <div className="pt-3 pb-6">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <img
                                                                    src="/static\images\clock.svg"
                                                                    className="w-6 h-6 mr-5"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="text-base font-medium leading-3 f-p-t text-custom-black">
                                                                    {/* <span>{group && group.type === "single" ? "On" :" Every"} </span> */}
                                                                    {days &&
                                                                        days.map((day, i) => {
                                                                            return <span key={i}>{day}, </span>;
                                                                        })}
                                                                    <span>{sessionTime}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" ">
                                                        <ImgWithSingleText
                                                            imgUrl="/static\images\money.svg"
                                                            text={"$" + group.price + " / Session"}
                                                            textColor="text-custom-black  "
                                                        />
                                                    </div>
                                                    <div className="flex  py-6">
                                                        <ImgWithSingleText
                                                            imgUrl="/static\images\zoom.svg"
                                                            text="Google Meet"
                                                            textColor="text-custom-black  "
                                                        />
                                                        <div
                                                            className="ml-4 cursor-pointer"
                                                            onClick={() => setModal(true)}
                                                        >
                                                            <TextNormal
                                                                text="How To connect "
                                                                textColor="text-theme-blue-color"
                                                                textSize="text-base"
                                                                textWeight="font-medium"
                                                            />
                                                        </div>
                                                    </div>
                                                    {approved && (
                                                        <div className="sm:pl-8">
                                                            <div className="sm:flex">
                                                                <TextNormal
                                                                    text="Session link: "
                                                                    textColor="text-theme-gray-color"
                                                                    textSize="text-base"
                                                                    textWeight="font-normal"
                                                                />{" "}
                                                                <div className="ml-4">
                                                                    <div className="sm:mt-0 mt-2 sm:ml-0 ml-8">
                                                                        <a href={group.zoomLink} target="_blank">
                                                                            <TextNormal
                                                                                text={group.zoomLink}
                                                                                textColor="text-theme-blue-color"
                                                                                textSize="text-base"
                                                                                textWeight="font-normal"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {invited ? (
                                                    <div className="border-2 border-theme-gray-color rounded-lg sm:p-6 p-2 mt-16">
                                                        <div className="pt-12">
                                                            <p className="   leading-4 text-theme-blue-color text-5xl f-r-t font-bold text-center  ">
                                                                Invitation
                                      </p>
                                                            <div className="pt-6">
                                                                <p className=" leading-7 text-theme-gray-color text-lg f-p-t font-normal text-center">
                                                                    You are invited to join this Group.
                                        </p>
                                                            </div>
                                                        </div>
                                                        <div className="px-48 pt-8 pb-12">
                                                            <div className="flex items-center justify-between ">
                                                                <div>
                                                                    <button
                                                                        onClick={() => bookSeat()}
                                                                        className="focus:outline-none f-p-t text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-10  font-Normal text-theme-blue-color bg-custom-btn-bg"
                                                                    >
                                                                        {loading}
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        onClick={() => decline()}
                                                                        className="focus:outline-none f-p-t text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-10  font-Normal text-theme-blue-color bg-custom-btn-bg"
                                                                    >
                                                                        Decline
                                          </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col mt-5">
                                                                <p className="text-red-600 text-center">
                                                                    {error}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                        ""
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <Loader />
                            )}
                    </div>
                    {/* </MainArea> */}
                </div>
            </div>
            {addEventSuccess && <EventSuccess setShowPopoup={setAddEventSuccess} />}
            {modal && <InstructionModal show={modal} setModal={setModal} />}
            {show && <POPUPS />}
            {isConfirm && (
                <ReportClinicain
                    reportInProg={reportInProg}
                    reportRes={reportRes}
                    reportResMsg={reportResMsg}
                    reportClinician={reportClinician}
                    setIsConfirm={setIsConfirm}
                />
            )}
            {
                confirm &&
                <ConfirmModel show={confirm} setConfirm={setConfirm} />
            }
        </>
    );
};
export default Index;
