import React, { useEffect, useState } from 'react';
import GroupTables from '../../major-components/group-tables';
import Sidebar from '../../major-components/sideBar';
import MainArea from '../../major-components/mainArea';
import Loader from '../../common-components/loader';
import { standardDate, tConvert, getWindowHeight } from '../../function';
import sortArray from 'array-sort';
import CancelSingleSession from './models/cancelSingleSession';
import CancelMultiSession from './models/cancelMultiSession';

import Link from 'next/link';
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
const MonthNumber = (mon) => {
  var monthNumber
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
  monthArray.map((m, i) => {
    if (m.substring(0, 3) === mon) {
      monthNumber = i + 1
    }
  }
  )
  return monthNumber
};
const Index = ({ participant, dispatch }) => {
  const [list, setList] = useState(null);
  const [upcoming, setUpComing] = useState(true);
  const [filter, setFilter] = useState(null);
  let date = new Date();
  const [mainData, setMainGroups] = useState(null);
  const [query, setQuery] = useState(false);
  const [sort, setSort] = useState(false);
  const [show, setModal] = useState(false);
  const [current, setCurrent] = useState(false);
  const [height, setHeight] = useState(false);
  var monthValue = ""
  var previousMonthNumber
  useEffect(() => {
    if (participant) {
      listRelatedSessions(participant.groups.items);
    }
    setHeight(getWindowHeight() - 360);
  }, [participant]);
  const listRelatedSessions = (items) => {
    let sessions = [];
    items.forEach(single => {
      let dup = { ...single };
      delete dup.sessions;
      if (single) {
        if (!single?.sessionId) {
          single?.group.sessions.items.forEach(duplicate => {
            duplicate.group = dup.group;
            duplicate.groupParticipantId = single.id;
          })
          sessions = [...sessions, ...single?.group.sessions.items];
        } else {
          single?.group.sessions.items.forEach(main => {
            if (single?.sessionId.indexOf(main.id) !== -1) {
              main.group = dup.group;
              main.groupParticipantId = single.id;
              sessions.push(main);
            }
          })
        }
      }
    })

    sessions.forEach(single => {
      single.fullDate = new Date(single.sessionDate + 'T' + single.sessionTime);
    })
    sessions = sortArray(sessions, "fullDate");
    setList(sessions);
    setMainGroups(sessions);
  }

  const makeCall = async (upcoming) => {
    setUpComing(upcoming);
    setList(sortArray(list, "fullDate", { reverse: !upcoming }));
  };
  const refreshList = (groupId) => {
    setList(list.filter(single => single.groupId !== groupId));
  };

  const search = (e) => {
    e.preventDefault();
    if (query) {
      let filtered = mainData.filter(
        (single) =>
          (single.group &&
            single.group.name &&
            single.group.name.toLowerCase().indexOf(query.toLowerCase()) >=
            0) ||
          (single.group &&
            single.group.clinician &&
            single.group.clinician.fullName
              .toLowerCase()
              .indexOf(query.toLowerCase()) >= 0)
      );
      setList(sort ? sortArray(filtered, sort) : filtered);
    } else {
      setList(sort ? sortArray(mainData, sort) : mainData);
    }
  };

  const setSortValue = (value) => {
    setSort(value);
    setList(sortArray(list, value));
  };
  const removeSession = (sessionId) => {
    setList(list.filter(single => single.id !== sessionId));
  };

  const POPUPS = () => {
    switch (show) {
      case 1:
        return (
          <CancelSingleSession
            refreshList={removeSession}
            participant={participant}
            current={current}
            setModal={setModal}
            dispatch={dispatch}
          />
        );
      case 2:
        return (
          <CancelMultiSession
            refreshList={refreshList}
            participant={participant}
            current={current}
            setModal={setModal}
          />
        );
      default:
        return;
    }
  };

  const checkExist = () => {
    const value = list.find(item => (upcoming ? (item.fullDate > date) : (item.fullDate < date)));
    return !!value;
  }

  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full">
          <div className="bg-white">
            <MainArea>
              <div className="bg-light-pink">
                <form
                  onSubmit={(event) => search(event)}
                  className="sm:flex justify-end"
                >
                  <div className=" sm:flex items-center justify-between">
                    <div className="lg:w-84 sm:px-8 sm:py-2 mt-2">
                      <div className="relative text-gray-700">
                        <button
                          type="submit"
                          className="focus:outline-none absolute  flex items-center pl-3 h-full text-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search text-black"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </button>
                        <input
                          onChange={(event) => setQuery(event.target.value)}
                          id="search"
                          placeholder="Search by Group or Therapist"
                          className="focus:outline-none  hover:border-home-blue-color font-normal lg:w-full flex items-center pl-12 py-2 text-sm border-gray-400 border-2 rounded-lg h-12"
                        />
                      </div>
                    </div>
                    <div className="sm:mx-8 sm:w-48">
                      <div className="relative  cursor-pointer f-p-t">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none inset-0 m-auto mr-4 mb-3"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#9E9E9E"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <select
                          defaultValue="default"
                          onChange={(event) => setSortValue(event.target.value)}
                          aria-label="Selected tab"
                          className="check focus:outline-none rounded-lg w-full px-5 py-2  mt-2 text-sm border-2  text-home-heading appearance-none h-12 hover:border-home-blue-color bg-white"
                        >
                          <option value="default" disabled>
                            Sort
                          </option>
                          <option value="group.name">Group Name</option>
                          <option value="group.clinician.fullName">
                            Therapist Name
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </MainArea>
            {/* </MainArea> */}
            {show && <POPUPS />}
          </div>
          <div className="bg-light-pink pb-6">
            <div className="flex items-center bg-light-pink pb-5">
              <div className=" pb-3 h-full">
                <div className=" sm:flex px-8 h-full">
                  <Link href="/my-sessions">
                    <a>
                      <div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">
                        <h1 className="text-lg f-p-t font-semibold text-theme-blue-color">
                          My Sessions
                        </h1>
                      </div>
                    </a>
                  </Link>
                  <Link href="/my-groups">
                    <a>
                      <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">
                        <h1 className="text-lg font-semibold text-theme-gray-color f-p-t ">
                          My Groups
                        </h1>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              {/* in btw this */}
            </div>
            <div className="xl:px-8 -mt-3 px-3 ">
              <div className="bg-white rounded-lg rounded-tl-sm px-8 pt-12">
                <div className="flex justify-between">
                  <p
                    onClick={() => {
                      makeCall(true);
                    }}
                    className={
                      'cursor-pointer text-lg font-semibold f-p-t ' +
                      (upcoming
                        ? 'text-theme-blue-color'
                        : 'text-theme-gray-color')
                    }
                  >
                    Upcoming Sessions
                  </p>
                  <p
                    onClick={() => {
                      makeCall(false);
                    }}
                    className={
                      'cursor-pointer text-lg font-semibold f-p-t ' +
                      (!upcoming
                        ? 'text-theme-blue-color'
                        : 'text-theme-gray-color')
                    }
                  >
                    Past Sessions
                  </p>
                </div>
                <div className="overflow-y-scroll" style={{ height }}>
                  {list ? (
                    checkExist() ? (

                      list.map((item, index) => {
                        if (upcoming ? (item.fullDate > date) : (item.fullDate < date)) {
                          var monthName = MonthName((item.fullDate).toString().substring(4, 7))
                          if (monthValue === monthName) {
                            monthValue = "IHaveMonthValue"
                          }
                          else {
                            if (monthValue === "IHaveMonthValue") {
                              if (MonthNumber((item.fullDate).toString().substring(4, 7)) > previousMonthNumber)
                                monthValue = monthName
                            }
                            else {
                              monthValue = monthName
                            }
                          }
                          previousMonthNumber = MonthNumber((item.fullDate).toString().substring(4, 7))
                        }
                        return (upcoming ? (item.fullDate > date) : (item.fullDate < date)) && (
                          <div className="">
                            { monthValue === "IHaveMonthValue" ? "" :
                              <div className="flex justify-between mt-2">
                                <p className='text-base font-normal text-gray-700'   >
                                  {monthValue}
                                </p>
                              </div>}
                            <div key={item.id} className="w-full">
                              <GroupTables
                                tConvert={tConvert}
                                setCurrent={setCurrent}
                                setModal={setModal}
                                standardDate={standardDate}
                                item={item}
                              />
                            </div>
                          </div>
                        );
                      })
                    ) : (
                        <div className="flex items-center py-48 justify-center">
                          <p className=" f-p-t text-base font-medium leading-6 text-center">
                            No related sessions found
                        </p>
                        </div>
                      )
                  ) : (
                      <Loader />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;