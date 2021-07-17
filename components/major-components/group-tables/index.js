import React, { useState } from "react";
import Moment from "react-moment";
import sortArray from "array-sort";
import Link from "next/link";
import OutsideClick from "react-outside-click-handler";

const Index = ({ item, standardDate, tConvert, setModal, setCurrent }) => {
  let { group } = item;
  let clinician = group.clinician;

  const [show, setShow] = useState(false);

  const calculateCurrent = (value, date) => {
    const array = sortArray(value, "sessionDate");
    let position = 0;
    array.forEach((item, index) => {
      if (item.sessionDate === date) {
        position = (index + 1);
      }
    });
    return position;
  };

  const checkGroupType = () => {
    if (item && item.group) {
      if (item.type === "single") {
        let sessionDate = new Date(item.sessionDate + "T" + item.sessionTime + ":00");
        let current = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
        return current < sessionDate;
      }
      else {
        return true;
      }
    }
  };
  const leaveGroup = () => {
    if (item && item.group) {
      if (item.group.type === "single") {
        setCurrent(item);
        setModal(1);
      }
      else {
        setCurrent(item);
        setModal(2);
      }
    }
  };

  return item && item.group && (
    <>
      <div className="my-3 relative">
        <div className="lg:w-full  text-left bg-white table-auto">
          <div className="border-2 border-gray-200 flex items-center justify-between">
            <Link as={"/group-detail/" + item.group.id} href="/group-detail/[id]">
              <a className="w-1/3 flex text-gray-800 text-xs sm:text-sm  ">
                <div className="flex flex-col items-center border-r-2 border-gray-400 pl-10 pr-8">
                  <p className="text-2xl font-medium text-theme-blue-color ">{standardDate(item.sessionDate).dateNumber}</p>
                  <p className="text-lg font-normal text-theme-blue-color">{standardDate(item.sessionDate).dayNameHalf}</p>
                </div>
                <div className="pl-6 text- gray-800 text-xs sm:text-sm">
                  <p className="text-2xl font-medium text-theme-blue-color ">{tConvert(item.sessionTime)}</p>
                  <p className="text-lg font-normal text-theme-blue-color">{group.length} HRS</p>
                </div>
              </a>
            </Link>
            <Link as={"/group-detail/" + item.group.id} href="/group-detail/[id]">
              <a className="w-1/3 lg:py-6 text-gray-800 text-xs sm:text-sm text-left">
                <p className="text-2xl font-medium text-theme-blue-color ">
                  {group.name}
                </p>
                <p className="text-lg font-normal text-theme-blue-color">{clinician.credentials} {clinician.lastName}</p>
              </a>
            </Link>
            <div className="w-32 text-gray-800  sm:pr-10 text-xs sm:text-sm text-left rounded-r-md">
              <p className="text-base font-normal text-gray-700 ">Session</p>
              <p className="text-base font-normal text-gray-700">{calculateCurrent(group.sessions.items, item.sessionDate)} of {group.sessions.items.length}</p>
            </div>
            <div className="w-1/3 text-gray-800 lg:pr-20 text-xs sm:text-sm text-right flex justify-end">
              <Link as={"/group-detail/" + item.group.id} href="/group-detail/[id]">
                <a className="flex items-center">
                  <p className="text-2xl font-medium text-theme-blue-color capitalize">
                    <Moment fromNow={true} date={item.sessionDate} />
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3F51B5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </Link>
              {
                checkGroupType() &&
                <div className="">
                  <button onClick={event => setShow(!show)} className="absolute top-0 right-0 text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>
                  {
                    show &&
                    <OutsideClick onOutsideClick={() => setShow(false)}>
                      <ul className="absolute right-0 top-0 mt-8 mr-2 border bg-white shadow-sm sub-menu-farm z-10 rounded animate__fadeIn">
                        <li onClick={() => leaveGroup()} className="cursor-pointer w-32 h-12 px-4 py-2 hover:bg-gray-200 flex items-center">Leave Group</li>
                      </ul>
                    </OutsideClick>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
