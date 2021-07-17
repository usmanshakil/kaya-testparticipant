import React, { useEffect, useState } from "react";
import Sidebar from "../../major-components/sideBar";
import MainArea from "../../major-components/mainArea";
import Loader from "../../common-components/loader";
import Link from "next/link";
import { getParticipantGroupDetail, getParticipantDetail } from "../../../api/graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import { standardDate } from "../../function";
import arraySort from "array-sort";
import { getWindowHeight } from "../../function";

const Index = ({ participant, userId }) => {
  const [list, setList] = useState(null);
  const [mainData, setMainGroups] = useState(null);
  const [query, setQuery] = useState(false);
  const [sort, setSort] = useState(false);
  const [height, setHeight] = useState(false);
  useEffect(() => {
    if (userId) {
      API.graphql(graphqlOperation(getParticipantDetail, { id: userId }))
        .then(async (res) => {
          let data = fixIndexes(res.data.getParticipant.groups.items);
          setList(data);
          setMainGroups(data);
        })
        .catch((err) => {
          if (err.data && err.data.getParticipant) {
            let data = fixIndexes(err.data.getParticipant.groups.items);
            setList(data);
            setMainGroups(data);
          }
          console.error("err", err);
        });
    }
    setHeight(getWindowHeight() - 285);
  }, [userId]);
  const fixIndexes = (items) => {
    items.forEach((single) => {
      if (single) {
        single.group.clinician = single.group.clinician.items[0];
      }
    });
    return items;
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
      setList(sort ? arraySort(filtered, sort) : filtered);
    } else {
      setList(sort ? arraySort(mainData, sort) : mainData);
    }
  };

  const setSortValue = (value) => {
    setSort(value);
    setList(arraySort(list, value));
  };

  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className='w-full'>
          <div className='bg-white'>
            <MainArea>
              <div className="bg-light-pink">
                <div className="flex justify-end pt-2 pb-1">
                  <form
                    onSubmit={(event) => search(event)}
                    className="sm:flex justify-end"
                  >
                    <div className=" sm:flex items-center justify-between">
                      <div className="lg:w-84 sm:pl-8 sm:py-2 mt-2">
                        <div className="relative text-gray-700">
                          <button
                            type="submit"
                            className="focus:outline-none absolute flex items-center pl-3 h-full text-gray-600"
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
                            className="focus:outline-none bg-white rounded-lg w-full px-5 py-2  mt-2 text-sm border-2  text-home-heading appearance-none h-12 hover:border-home-blue-color "
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
              </div>
            </MainArea>
            {/* </MainArea> */}
          </div>
          <div className="flex items-center -mt-3 bg-light-pink">
            <div className=" pb-8 h-full">
              <div className=" sm:flex px-8 h-full">
                <Link href="/my-sessions">
                  <a>
                    <div className="py-3 px-6 mt-2 -mb-6 rounded-tr-lg rounded-tl-lg mr-4">
                      <h1 className="text-lg f-p-t font-semibold text-theme-gray-color">
                        My Sessions
                          </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/my-groups">
                  <a>
                    <div className="py-3 px-6 mt-2 bg-white  -mb-6   rounded-tr-lg rounded-tl-lg mr-4">
                      <h1 className="text-lg font-semibold text-theme-blue-color f-p-t ">
                        My Groups
                          </h1>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className=' bg-light-pink'>
            <div className="px-4 xl:px-10 -mt-3 pb-6 ">
              <div className="rounded-lg bg-white w-full overflow-y-scroll px-8" style={{ height }}>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                  {list ? (
                    <table className="min-w-full bg-white pt-4 ">
                      <thead className="">
                        <tr className="w-full h-16  py-8 ">
                          <th className="pl-12 pt-6 text-theme-gray-color f-i-p uppercase font-normal pr-12 xl:pr-3 2xl:pr-12 text-left text-sm xl:text-xs 2xl:text-lg tracking-normal leading-4">
                            Pending Consultation
                            </th>
                          <th className="pl-2 pt-6 text-theme-gray-color f-i-p uppercase font-normal pr-12 xl:pr-3 2xl:pr-12 text-left text-sm xl:text-xs 2xl:text-lg tracking-normal leading-4">
                            Group Name
                            </th>
                          <th className="text-theme-gray-color pt-6 f-i-p uppercase font-normal pr-12 xl:pr-3 2xl:pr-12 text-left text-sm xl:text-xs 2xl:text-lg tracking-normal leading-4">
                            Therapist
                            </th>


                          <th className="text-theme-gray-color pt-6 f-i-p uppercase font-normal pr-12 xl:pr-3 2xl:pr-12 text-left text-sm xl:text-xs 2xl:text-lg tracking-normal leading-4">
                            Date Added
                            </th>


                          <th className="text-theme-gray-color pt-6 f-i-p uppercase font-normal  text-end pr-6 text-sm xl:text-xs 2xl:text-lg tracking-normal leading-4 rounded-r-lg">
                            Action
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.length !== 0 ? (
                          list.map((item, i) => {
                            let clinician = item ? item.group.clinician : {};
                            return (
                              item &&
                              item.group &&
                              item.group.clinician && (
                                <tr
                                  key={i}
                                  className="border-2 border-btn-light-gray rounded-lg f-p-t cursor-pointer transition duration-150 ease-in-out"
                                >
                                  <td className="pl-12 pr-12 xl:pr-3 2xl:pr-4 my-8 py-6 whitespace-no-wrap text-base xl:text-xs 2xl:text-base text-gray-800 tracking-normal leading-4 rounded-l-md">
                                    {item.approved ? (
                                      <p>-</p>
                                    ) : (
                                        <div className="h-5 w-5 border-solid rounded-full bg-theme-blue-color " />
                                      )}
                                  </td>
                                  <td className="pl-2 pr-12 xl:pr-3 2xl:pr-4 my-8 py-6 text-left whitespace-no-wrap text-base xl:text-xs 2xl:text-base text-gray-800 tracking-normal leading-4 rounded-l-md">
                                    {item.group.name}
                                  </td>
                                  <td className="text-base pr-12 xl:pr-3 2xl:pr-4 whitespace-no-wrap text-gray-800 xl:text-xs 2xl:text-base tracking-normal leading-4">
                                    {clinician.firstName} {clinician.lastName}
                                  </td>


                                  <td className="text-base pr-12 xl:pr-3 2xl:pr-4 whitespace-no-wrap text-gray-800 xl:text-xs 2xl:text-base tracking-normal leading-4">
                                    {item.approved ? (
                                      standardDate(item.createdAt).standardDate
                                    ) : (
                                        <p>-</p>
                                      )}
                                  </td>


                                  <td className="pr-12 xl:pr-3 2xl:pr-4 text-right rounded-r-md ">
                                    <Link
                                      as={"/group-detail/" + item.group.id}
                                      href="/group-detail/[id]"
                                    >
                                      <a>
                                        <button className="bg-custom-btn-bg transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-none     rounded text-theme-blue-color px-5 py-1 text-base">
                                          View
                                          </button>
                                      </a>
                                    </Link>
                                  </td>

                                </tr>
                              )
                            );
                          })
                        ) : (
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center pr-12 whitespace-no-wrap text-gray-800 tracking-normal leading-4 d-flex justify-content-center flex-column"
                              >
                                <div className="mb-3 mt-2"> You have not signed up for any groups yet</div>
                                <Link
                                  href="/explore"
                                >
                                  <a>
                                    <button className="pt-5 pb-5 pr-5 pl-5 mb-2 bg-custom-btn-bg transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-none     rounded text-theme-blue-color px-5 py-1 text-base">
                                      Explore Groups
                                          </button>
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          )}
                      </tbody>
                    </table>
                  ) : (
                      <Loader height={height} />
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
