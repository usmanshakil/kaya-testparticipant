import React, { useEffect, useState } from 'react';
import Sidebar from '../../major-components/sideBar';
import TextNormal from '../../unique-components/text-base';
import GroupAnxietyManagment from '../../major-components/group-anxiety-managment';
import MainArea from '../../major-components/mainArea';
import {
  listGroupsCustom,
  listGroups,
} from '../../../api/graphql/customQueries';
import { API, graphqlOperation } from 'aws-amplify';
import Loader from '../../common-components/loader';
import arraySort from 'array-sort';
import { getWindowHeight } from '../../function';

const Index = ({ userId, participant }) => {
  const [groups, setGroups] = useState(null);
  const [group, setGroup] = useState(null);
  const [key, setKey] = useState(null);
  const [sortName, setSort] = useState(null);
  const [height, setHeight] = useState(false);
  const [date, setDate] = useState("");
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
  useEffect(() => {
    if (participant) {
      let filter = [];
      participant.tags.items.forEach((item) => {
        if (item.tag) {
          filter.push({ tagId: { eq: item.tag.id } });
        }
      });
      API.graphql(graphqlOperation(listGroups))
        .then((res) => {
          restructureData(res.data.listGroups.items);
        })
        .catch((err) => {
          if (
            err &&
            err.data &&
            err.data.listGroups &&
            err.data.listGroups.items
          ) {
            restructureData(err.data.listGroups.items);
          } else {
            setGroups([]);
          }
          console.error('err is here', err);
        });
    }
    var date = new Date().toDateString();
    setDate(formatDate(date));
    setHeight(getWindowHeight() - 237);
  }, [participant]);

  const restructureData = (array) => {
    let data = [];
    array.forEach((item) => {
      if (item.clinician) {
        item.clinician = item.clinician.items[0];
        data.push(item);
      }
    });
    setGroups(data);
  };

  const clinicianGroupsMain = (value) => {
    let group = [];
    if (value.length !== 0) {
      value.forEach((single) => {
        group = [...group, ...single.group.items];
      });
    }
    return group;
  };

  const tagGroupsMain = (value) => {
    let group = [];
    if (value.length !== 0) {
      value.forEach((single) => {
        if (single && single.groups && single.groups.items !== 0) {
          single.groups.items.forEach((item) => {
            if (item && item.group) {
              group.push(item.group);
            }
          });
        }
      });
    }
    return group;
  };

  const mergeAll = (groups) => {
    let data = [];
    groups.forEach((single) => {
      if (!data.find((item) => item.id === single.id)) {
        data.push(single);
      }
    });

    setGroups(
      sortName
        ? arraySort(resetClinicianObject(data), sortName)
        : resetClinicianObject(data)
    );
  };

  const resetClinicianObject = (item) => {
    item.forEach((single) => {
      single.clinician = single.clinician.items[0];
    });
    return item;
  };

  const filterExist = (all) => {
    let array = [];
    all.forEach((item) => {
      let exist = participant.groups.items.find(
        (single) => single && single.group.id === item.id
      );
      if (!exist || exist.group.type === 'multi') {
        array.push(item);
      }
    });

    return array;
  };

  const filterData = (value) => {
    API.graphql(graphqlOperation(listGroupsCustom(value)))
      .then(async (res) => {
        let clinicianGroups = clinicianGroupsMain(
          res.data.listClinicians.items
        );
        let tagGroups = tagGroupsMain(res.data.listTags.items);
        let groups = res.data.listGroups.items;
        let all = [...clinicianGroups, ...tagGroups, ...groups];
        mergeAll(filterExist(all));
      })
      .catch((err) => {
        if (err && err.data) {
          let clinicianGroups = clinicianGroupsMain(
            err.data.listClinicians.items
          );
          let tagGroups = tagGroupsMain(err.data.listTags.items);
          let groups = err.data.listGroups.items;
          let all = [...clinicianGroups, ...tagGroups, ...groups];
          mergeAll(filterExist(all));
        }
      });
  };

  const search = (event) => {
    event.preventDefault();
    setGroups(null);
    filterData(key);
  };

  const setSortValue = (value) => {
    setSort(value);
    setGroups(arraySort(groups, value));
  };

  return (
    <>
      <div className="flex h-full ">
        <Sidebar />
        <div className="w-full">
          <div className="w-full">
            <MainArea>
              <div className="px-6 h-full">
                <div className="sm:flex items-center justify-between pt-8">
                  <div className="sm:mb-0 mb-4">
                    <TextNormal
                      text="Explore Your Groups"
                      textColor="text-theme-blue-color"
                      textSize="text-2xl"
                      textWeight="font-medium"
                    />
                  </div>
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
                            onChange={(event) => setKey(event.target.value)}
                            id="search"
                            placeholder="Search by Group or Therapist"
                            className="focus:outline-none  hover:border-home-blue-color font-normal lg:w-full flex items-center pl-12 py-2 text-sm border-gray-400 border-2 rounded-lg h-12"
                          />
                        </div>
                      </div>
                      <div className="ml-8 sm:w-48">
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
                            onChange={(event) =>
                              setSortValue(event.target.value)
                            }
                            aria-label="Selected tab"
                            className="focus:outline-none rounded-lg w-full px-5 py-2  mt-2 text-sm border-2  text-theme-gray-color appearance-none h-12 hover:border-home-blue-color bg-white"
                          >
                            <option value="default" disabled>
                              Sort
                            </option>
                            <option value="name">Name</option>
                            {/* <option value="description">Description</option> */}
                            <option value="clinician.firstName">
                              Therapist First Name
                            </option>
                            <option value="clinician.lastName">
                              Therapist Last Name
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*<div>*/}
                {/*{*/}
                {/*participant &&*/}
                {/*<div className="flex items-center">*/}
                {/*<h3 className="font-medium font-11 f-r-t mr-4">Showing:</h3>*/}
                {/*<div className="flex flex-wrap">*/}
                {/*{*/}
                {/*participant.tags.items.map(item => {*/}
                {/*return item && item.tag &&(*/}
                {/*<div className='py-1'>*/}
                {/*<SingleTag key={item.id} text={item.tag.name} />*/}
                {/*</div>*/}
                {/*)*/}
                {/*})*/}
                {/*}*/}
                {/*<Link href="/account-assesment">*/}
                {/*<a>*/}
                {/*<div className="p-1 bg-white rounded-lg">*/}
                {/*<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6666B3" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
                {/*<path stroke="none" d="M0 0h24v24H0z" fill="none" />*/}
                {/*<path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />*/}
                {/*<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />*/}
                {/*<line x1={16} y1={5} x2={19} y2={8} />*/}
                {/*</svg>*/}
                {/*</div>*/}
                {/*</a>*/}
                {/*</Link>*/}
                {/*</div>                                    */}
                {/*</div>*/}
                {/*}*/}
                {/*</div>*/}
              </div>
            </MainArea>
          </div>

          <div
            className="sm:px-8 px-4 bg-light-pink overflow-y-scroll"
            style={{ height }}
          >
            {groups ? (
              <div className="h-full bg-light-pink">
                {groups.length !== 0 ? (
                  <>
                    <div className="flex flex-wrap pb-32">
                      {groups.filter(filterAfterCurrentDate => JSON.parse(filterAfterCurrentDate.schedule).sessionDate > date).map((item, index) => {
                        return (
                          <GroupAnxietyManagment
                            setGroup={setGroup}
                            group={group}
                            participant={participant}
                            setGroups={setGroups}
                            groups={groups}
                            userId={userId}
                            item={item}
                            key={index}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                    <div>
                      <p className="text-base font-bold text-center py-12">
                        No Groups Found{' '}
                      </p>
                    </div>
                  )}
              </div>
            ) : (
                <Loader />
              )}
          </div>
          {/* </MainArea> */}
        </div>
      </div>
    </>
  );
};
export default Index;
