import React, { useEffect, useState } from 'react';
import AvatarWithoutImage from '../../common-components/avatar/avatr-withoutpicture';
import TextSmall from '../../common-components/text/small';
import SideBar from '../../major-components/sideBar';
import MainArea from '../../major-components/mainArea';
import Link from 'next/link';
import { listPaymentss } from '../../../apii/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import Loader from '../../common-components/loader';
import sortArray from 'array-sort';
import { standardDate } from '../../function';
import Layout from '../../layout';
import { getWindowHeight } from '../../function';
const Index = ({ participant }) => {
  const [data, setData] = useState(null);
  const [height, setHeight] = useState(false);
  useEffect(() => {
    if (participant) {
      API.graphql(
        graphqlOperation(listPaymentss, {
          filter: { participantId: { eq: participant.id } },
        })
      )
        .then(async (res) => {
          setData(sortArray(res.data.listPaymentss.items, 'createdAt'));
        })
        .catch((err) => {
          if (err && err.data) {
            setData(sortArray(err.data.listPaymentss.items, 'createdAt'));
          }
          console.error('err is here', err);
        });
    }
    setHeight(getWindowHeight() - 235);
  }, [participant]);

  return (
    <Layout>
      <div className="flex h-full ">
        <SideBar />
        <div className="w-full">
          <MainArea />
          <div>
            <div className=" pb-3 h-full">
              <div className="bg-light-pink py-3 pb-5 sm:flex px-8 h-full">
                <Link href="/account-profile">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4 ">
                      <h1 className="text-lg font-semibold f-p-t text-theme-gray-color">
                        Profile
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/account-assesment">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4 ">
                      <h1 className="text-lg font-semibold f-p-t text-theme-gray-color">
                        Assessment
                      </h1>
                    </div>
                  </a>
                </Link>
                {/*<Link href="/account-billing">*/}
                  {/*<a>*/}
                    {/*<div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">*/}
                      {/*<h1 className="text-lg font-semibold f-p-t text-theme-blue-color">*/}
                        {/*Billing*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
                {/*<Link href="/account-payment-info">*/}
                  {/*<a>*/}
                    {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">*/}
                      {/*<h1 className="text-lg font-semibold f-p-t text-theme-gray-color">*/}
                        {/*Payment Info*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
              </div>
            </div>
            <div className="px-8 py-3 bg-light-pink -mt-5 pb-40">
              <div
                className="bg-white overflow-y-scroll sm:px-8 px-4 py-12 "
                style={{ height }}
              >
                {data ? (
                  data.length !== 0 ? (
                    <div className="py-3">
                      {data &&
                        data.map((item) => {
                          let date = standardDate(item?.createdAt);
                          return (
                            item && (
                              <div
                                key={item.id}
                                className="w-full border-2 rounded-l-lg rounded-r-lg my-2"
                              >
                                <div className="sm:flex sm:items-center sm:justify-between items-center justify-between  sm:px-6 py-3">
                                  <div className="sm:flex sm:items-center   ">
                                    <div>
                                      <div className=" sm:mb-0 mb-4">
                                        <TextSmall
                                          textColor="text-theme-blue-color"
                                          textSize="text-2xl"
                                          text={item.group.name}
                                          fontclassName="f-p-t"
                                          fontWeight="font-medium"
                                        />
                                      </div>
                                      <div className="sm:mb-0 mb-4">
                                        <TextSmall
                                          textColor="text-theme-gray-color"
                                          textSize="text-lg"
                                          text={`${date.monthName} ${date.dateNumber}, ${date.fullYear}`}
                                          fontclassName="f-p-t"
                                          fontWeight="font-regular"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:mb-0 mb-4">
                                    <TextSmall
                                      textColor="text-theme-blue-color"
                                      textSize="text-2xl"
                                      text={`-$${item.amount}`}
                                      fontclassName="f-p-t"
                                      fontWeight="font-medium"
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          );
                        })}
                    </div>
                  ) : (
                    <p>No payment record found</p>
                  )
                ) : (
                  <Loader height={height} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
