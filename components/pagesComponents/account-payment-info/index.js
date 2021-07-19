import React, { useEffect, useState } from 'react';
import SimpleButton from '../../unique-components/simple-button';
import Link from 'next/link';
import TextSmall from '../../common-components/text/small';
import SimpleInput from '../../common-components/inputs/simple-input';
import SideBar from '../../major-components/sideBar';
import MainArea from '../../major-components/mainArea';
import axios from 'axios';
import { emailRequest, paymentPath } from '../../../config';
import { updateParticipant } from '../../../apii/graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { getWindowHeight } from '../../function';
import { apii } from '../../../helpers/apii';
import csc from 'country-state-city';

const Index = ({ participant }) => {
  const [loading, setLoading] = useState(false);
  const [delInProg, setDelInProg] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [disCard, setDiscard] = useState(true);
  const [disBill, setDisbill] = useState(true);
  const [ccNum, setCcNum] = useState('');
  const [ccExpMonth, setCcExpMonth] = useState('');
  const [ccExpYear, setCcExpYear] = useState('');
  const [ccHolder, setCcHolder] = useState('');
  const [cvc, setCvc] = useState('');
  const [billingName, setBillingName] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [billingCityState, setBillingCityState] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [emptyAddress, setEmptyAddress] = useState(false);
  const [emptyHolder, setEmptyHolder] = useState(false);
  const [emptyMonth, setEmptyMonth] = useState(false);
  const [emptyYear, setEmptyYear] = useState(false);
  const [emptyCcNum, setEmptyNum] = useState(false);
  const [emptyBillName, setEmptyBillName] = useState(false);
  const [emptyZip, setEmptyZip] = useState(false);
  const [emptyCity, setEmptyCity] = useState(false);
  const [emptyCvc, setEmptyCvc] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [height, setHeight] = useState(false);
  const [state, setState] = useState(null);
  const [states, SetStates] = useState(null);
  const [city, setCity] = useState('');
  const [cityVal, setCityVal] = useState('');

  useEffect(() => {
    countryStateHandler();
  }, []);

  const countryStateHandler = () => {
    SetStates(csc.getStatesOfCountry('231'));
    setState(null);
    setCity(null);
  };

  const statesHandler = (Id) => {
    setState(states.find((sin) => sin.id === Id));
    setCity('');
  };


  useEffect(() => {
    if (!participant || !participant.paymentDetails) {
      setIsCard(false);
    } else {
      setIsCard(true);
      let paymentInfo = JSON.parse(participant.paymentDetails);
      setPaymentDetails(paymentInfo);
    }
    if (participant && participant.billingInformtion) {
      let billingInformtion = JSON.parse(participant.billingInformtion);
      setBillingName(billingInformtion.name);
      setBillingZip(billingInformtion.zip);
      setBillingCityState(billingInformtion.email);
      setBillingAddress(billingInformtion.billingAddress);
      setCity(billingInformtion.email[0].city)
    }
    setHeight(getWindowHeight() - 245);
  }, [participant]);
  function formatMonth(input) {
    if (input.value < 0) input.value = Math.abs(input.value);
    if (input.value > 12) input.value = 12;
    if (input.value.length > 2) input.value = input.value.slice(0, 2);
  }
  function formatYear(input) {
    if (input.value < 0) input.value = Math.abs(input.value);
    // if (input.value < 2021) input.value = 2021;
    if (input.value.length > 4) input.value = input.value.slice(0, 4);
  }

  const updateCcInfo = () => {
    setDiscard(!disCard);

    if (!disCard) {
      if (!ccNum) {
        setEmptyNum(true);
        setDiscard(false);
      }
      if (!ccExpMonth) {
        setDiscard(false);
        setEmptyMonth(true);
      }
      if (!ccExpYear) {
        setDiscard(false);
        setEmptyYear(true);
      }
      if (!cvc) {
        setDiscard(false);
        setEmptyCvc(true);
      }
      if (!ccHolder) {
        setDiscard(false);
        setEmptyHolder(true);
      } else {
        setSubmissionError('');
        setLoading(true);
        // let email = 'abdul.basit.atd@gmail.com';
        let email = participant.email;
        let payload = {
          email: email,
          card: {
            number: ccNum,
            exp_month: ccExpMonth,
            exp_year: ccExpYear,
            cvc: cvc,
          },
        };
        axios
          .post(paymentPath, payload)
          .then((res) => {
            let required = JSON.stringify(res.data.data);
            let payload = {
              id: participant.id,
              paymentDetails: required,
            };
            API.graphql(graphqlOperation(updateParticipant, { input: payload }))
              .then(async (res) => {
                if (res.data) {
                  setLoading(false);
                  let paymentInfo = JSON.parse(
                    res.data.updateParticipant.paymentDetails
                  );
                  setPaymentDetails(paymentInfo);
                  setIsCard(true);
                }
              })
              .catch((err) => {
                console.log('payment error', err);
                if (err.data) {
                  setLoading(false);
                  let paymentInfo = JSON.parse(
                    err.data.updateParticipant.paymentDetails
                  );
                  setPaymentDetails(paymentInfo);
                  setIsCard(true);
                } else {
                  setIsCard(false);
                  setLoading(false);
                  setSubmissionError(
                    'Payment info not added. Please try again'
                  );
                }
              });
          })
          .catch((err) => {
            console.log('axios err', err);
            setLoading(false);
            setDiscard(false);
            setIsCard(false);
            setSubmissionError('Payment info not added. Please try again');
          });
      }
    }
  };

  const sendAlert = async () => {
    const payload = {
      type: "billingInfoChangedParticipant",
      params: {
        participantName: participant.firstName,
        email: participant.email,
      }
    };

    await apii.postApi(emailRequest, payload).then((res) => {
    }).catch((err) => {
      console.log(err);
    });
  }

  const BillingValidation = () => {
    if (city === '') {
      setCityVal('Please choose city first')
    } else {
      updateBillingInfo();
      setCityVal('')
    }
  }

  const updateBillingInfo = async () => {
    setDisbill(!disBill);
    if (!!state) {
      setBillingCityState([{ state: state.name, city: city }])
    }
    if (!disBill) {
      if (!billingName) {
        setEmptyBillName(true);
        setDisbill(false);
      }
      if (!billingZip) {
        setDisbill(false);
        setEmptyZip(true);
      }
      if (!billingCityState) {
        setDisbill(false);
        setEmptyCity(true);
      }
      if (!billingAddress) {
        setDisbill(false);
        setEmptyAddress(true);
      } else {
        let billingInfo;
        if (!!state) {
          billingInfo = {
            name: billingName,
            zip: billingZip,
            email: [{ state: state.name, city: city }],
            billingAddress: billingAddress,
          };
        } else {
          billingInfo = {
            name: billingName,
            zip: billingZip,
            email: billingCityState,
            billingAddress: billingAddress,
          };
        }
        let payload = {
          id: participant.id,
          billingInformtion: JSON.stringify(billingInfo),
        };
        await API.graphql(graphqlOperation(updateParticipant, { input: payload }))
          .then(async (res) => {
            sendAlert();
          })
          .catch((err) => {
            if (err.data.updateParticipant) {
              sendAlert();
            }
            console.log("err", err);
          });
      }
    }
  };

  const setCcHolderName = (value) => {
    setEmptyHolder(false);
    setCcHolder(value);
  };
  const setCcardNum = (value) => {
    setEmptyNum(false);
    setCcNum(value);
  };
  const deleteCard = () => {
    setDelInProg(true);
    setDeleteError('');
    setSubmissionError('');
    let newrequired = null;
    let newpayload = {
      id: participant.id,
      paymentDetails: newrequired,
    };
    API.graphql(graphqlOperation(updateParticipant, { input: newpayload }))
      .then(async (res) => {
        setDelInProg(false);
        if (res.data) {
          if (!res.data.updateParticipant.paymentDetails) {
            setCcHolder('');
            setCcNum('');
            setCcExpMonth('');
            setCcExpYear('');
            setCvc('');
            setDiscard(false);
            setIsCard(false);
            setIsConfirm(false);
          } else {
            console.error('err', err);
            setDeleteError('Card deletion failed. Please try again');
            setIsConfirm(false);
          }
        }
      })
      .catch((err) => {
        setDelInProg(false);
        if (err.data) {
          if (err.data.updateParticipant.paymentDetails == null) {
            setCcHolder('');
            setCcNum('');
            setCcExpMonth('');
            setCvc('');
            setIsCard(false);
            setDiscard(false);
            setIsConfirm(false);
          } else {
            console.error('err', err);
            setDeleteError('Card deletion failed. Please try again');
            setIsConfirm(false);
          }
        }
      });
  };

  return (
    <>
      <div className="flex h-full mt-6 billing">
        <SideBar />
        <MainArea>
          {isConfirm && (
            <section className="inset-0 flex justify-center items-center bg-gray-300 fixed h-full">
              <div>
                <div className="relative flex flex-col justify-center items-center   bg-white px-16 rounded-lg">
                  <div
                    onClick={() => setIsConfirm(false)}
                    className="absolute right-0 top-0 pt-6 pr-6 cursor-pointer text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                  <div className="pt-12 pb-6">
                    <p className=" text-lg font-medium f-r-t leading-9 text-home-blue-color">
                      Remove Credit Card
                    </p>
                  </div>
                  <div className="w-10/12 pb-8 font-normal leading-6 text-center flex justify-center">
                    <p className=" leading-6 f-p-t  text-home-heading font-regular  text-base ">
                      Are you sure you want to remove credit card?
                    </p>
                  </div>
                  <div className="justify-center pb-12 text-home-heading flex">
                    <div className="mr-4">
                      {delInProg ? (
                        <button
                          disabled
                          type="button"
                          className="focus:border-theme-blue-color focus:outline-none f-p-t py-3  px-5 transition duration-150 ease-in-out hover:opacity-90 rounded text-base font-semibold text-theme-blue-color bg-custom-btn-bg w-16"
                        >
                          <img src="/static/images/loader.svg" />
                        </button>
                      ) : (
                          <button
                            onClick={deleteCard}
                            type="button"
                            className="focus:border-theme-blue-color focus:outline-none f-p-t py-3  px-5 transition duration-150 ease-in-out hover:opacity-90 rounded text-base font-semibold text-theme-blue-color bg-custom-btn-bg w-16"
                          >
                            Yes
                          </button>
                        )}
                    </div>
                    <div>
                      <button
                        onClick={() => setIsConfirm(false)}
                        type="button"
                        className="focus:border-theme-blue-color focus:outline-none f-p-t py-3  px-5 transition duration-150 ease-in-out hover:opacity-90 rounded text-base font-semibold text-theme-blue-color bg-custom-btn-bg w-16 "
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          <div>
            <div className=" pb-3 h-full">
              <div className=" sm:flex px-8 h-full">
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
                    {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4 ">*/}
                      {/*<h1 className="text-lg font-semibold f-p-t text-theme-gray-color">*/}
                        {/*Billing*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
                {/*<Link href="/account-payment-info">*/}
                  {/*<a>*/}
                    {/*<div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">*/}
                      {/*<h1 className="text-lg font-semibold f-p-t text-theme-blue-color">*/}
                        {/*Payment Info*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
              </div>
            </div>
            <div className="px-8 py-3 ">
              <div
                className="bg-white overflow-y-scroll sm:px-8 px-4 py-12 "
                style={{ height }}
              >
                <div className="sm:flex md:flex lg:flex ">
                  {loading ? (
                    <div className="sm:w-1/3 sm:mr-64 flex justify-center items-center h-full pt-32">
                      <img
                        className="w-12"
                        alt="loading"
                        src="/static/images/loader.svg"
                      />
                    </div>
                  ) : (
                      <div className="sm:w-1/3 sm:mr-64">
                        {isCard ? (
                          <div>
                            <div className="flex justify-between items-center">
                              <div className="sm:mb-0 mb-4">
                                <TextSmall
                                  textColor="text-theme-blue-color"
                                  textSize="text-lg"
                                  text="Added Credit cards "
                                  fontclassName="f-p-t"
                                  fontWeight="font-medium"
                                />
                              </div>
                              <div onClick={() => setIsConfirm(true)}>
                                <SimpleButton
                                  textColor="text-theme-blue-color"
                                  bgColor="bg-custom-btn-bg"
                                  borderClasses=""
                                  btnText={'Remove'}
                                  width=""
                                  fontWeight="font-Normal"
                                />
                              </div>
                            </div>
                            <div className="mt-6">
                              <label
                                htmlFor="text"
                                className="text-base f-p-t font-normal leading-tight"
                              >
                                Card Number
                            </label>
                              <div className="flex items-center mt-5">
                                <img
                                  src="/static\images\credit.svg"
                                  alt=""
                                  className="mr-5"
                                />
                                <img
                                  src="/static\images\credit.svg"
                                  alt=""
                                  className="mr-5"
                                />
                                <img
                                  src="/static\images\credit.svg"
                                  alt=""
                                  className="mr-5"
                                />
                                <p className=" text-theme-gray-color f-p-t text-sm">
                                  {paymentDetails.source.last4}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <label
                                htmlFor="text"
                                className="text-base f-p-t font-normal leading-tight"
                              >
                                Expiration Date
                            </label>
                              <p className=" text-theme-gray-color f-p-t text-sm mt-5">
                                {paymentDetails.source.exp_month} /{' '}
                                {paymentDetails.source.exp_year}
                              </p>
                            </div>
                            <p className="mt-6 text-red-500">{deleteError}</p>
                          </div>
                        ) : (
                            <>
                              <div className="sm:flex items-center justify-between">
                                <div className="sm:mb-0 mb-4">
                                  <TextSmall
                                    textColor="text-theme-blue-color"
                                    textSize="text-lg"
                                    text="Credit Card Information "
                                    fontclassName="f-p-t"
                                    fontWeight="font-medium"
                                  />
                                </div>
                                <div
                                  onClick={updateCcInfo}
                                  className="sm:mx-0 mx-24 sm:mb-0 mb-8"
                                >
                                  <SimpleButton
                                    textColor="text-theme-blue-color"
                                    bgColor="bg-custom-btn-bg"
                                    borderClasses=""
                                    btnText={disCard ? 'Add' : ' Save '}
                                    width=""
                                    fontWeight="font-Normal"
                                  />
                                </div>
                              </div>
                              <div className="mt-6">
                                <div className="mt-6 w-full">
                                  <SimpleInput
                                    maxLength={16}
                                    padding={disCard ? 'px-0' : 'px-4'}
                                    value={ccNum}
                                    setTextValue={setCcardNum}
                                    type={'tel'}
                                    disable={disCard}
                                    label={'true'}
                                    placeholder={'Enter card number'}
                                    textColor={'text-black'}
                                    id={'ccNumber'}
                                    labelText={'Card Number'}
                                    isRequired
                                  />
                                  {emptyCcNum && (
                                    <p className="text-red-500 my-2">Required</p>
                                  )}
                                </div>
                                <div className="flex items-center mt-6">
                                  <div className="w-1/2">
                                    <label
                                      htmlFor="text"
                                      className="text-base font-normal leading-tight f-p-t"
                                    >
                                      Expiration Month
                                  <span className="text-red-500 text-lg">
                                        *
                                  </span>
                                    </label>
                                    <div
                                      className={
                                        disCard
                                          ? 'rounded-lg flex items-center mt-2'
                                          : 'border-btn-light-gray hover:border-theme-blue-color border-2 rounded-lg flex items-center mt-2'
                                      }
                                    >
                                      <input
                                        value={ccExpMonth}
                                        onChange={(e) => {
                                          setEmptyMonth(false);
                                          setCcExpMonth(e.target.value);
                                        }}
                                        onInput={(e) => {
                                          formatMonth(e.target);
                                        }}
                                        type="number"
                                        name="month"
                                        placeholder="03"
                                        disabled={disCard}
                                        className="appearance-none w-20 focus:border-theme-blue-color focus:outline-none p-2 rounded-l-lg"
                                      />
                                    </div>
                                    {emptyMonth && (
                                      <p className="text-red-500 my-2">Required</p>
                                    )}
                                  </div>
                                  <div className="w-1/2 ml-10">
                                    <label
                                      htmlFor="text"
                                      className="text-base font-normal leading-tight f-p-t"
                                    >
                                      Expiration Year
                                  <span className="text-red-500 text-lg">
                                        *
                                  </span>
                                    </label>
                                    <div
                                      className={
                                        disCard
                                          ? 'rounded-lg flex items-center mt-2'
                                          : 'border-btn-light-gray hover:border-theme-blue-color  border-2 rounded-lg flex items-center mt-2'
                                      }
                                    >
                                      <input
                                        value={ccExpYear}
                                        onChange={(e) => {
                                          setEmptyYear(false);
                                          setCcExpYear(e.target.value);
                                        }}
                                        onInput={(e) => {
                                          formatYear(e.target);
                                        }}
                                        type="number"
                                        name="year"
                                        placeholder="2024"
                                        disabled={disCard}
                                        className="appearance-none w-20 focus:border-theme-blue-color focus:outline-none p-2 rounded-l-lg"
                                      />
                                    </div>
                                    {emptyYear && (
                                      <p className="text-red-500 my-2">Required</p>
                                    )}
                                  </div>
                                </div>
                                <div className="w-full mt-6">
                                  <div className="w-32">
                                    <label
                                      htmlFor="text"
                                      className="text-base font-normal leading-tight f-p-t"
                                    >
                                      CVC
                                  <span className="text-red-500 text-lg">
                                        *
                                  </span>
                                    </label>
                                    <div
                                      className={
                                        disCard
                                          ? 'rounded-lg flex items-center mt-2'
                                          : 'border-btn-light-gray hover:border-theme-blue-color border-2 rounded-lg flex items-center mt-2'
                                      }
                                    >
                                      <input
                                        value={cvc}
                                        onChange={(e) => {
                                          setEmptyCvc(false);
                                          setCvc(e.target.value);
                                        }}
                                        type="tel"
                                        name="cvc"
                                        placeholder="342"
                                        maxLength={3}
                                        size={2}
                                        disabled={disCard}
                                        className="appearance-none w-20 focus:border-theme-blue-color focus:outline-none p-2 rounded-l-lg"
                                      />
                                    </div>
                                    {emptyCvc && (
                                      <p className="text-red-500 my-2">Required</p>
                                    )}
                                  </div>
                                </div>
                                <div className=" w-full mt-6">
                                  <SimpleInput
                                    padding={disCard ? 'px-0' : 'px-4'}
                                    value={ccHolder}
                                    setTextValue={setCcHolderName}
                                    disable={disCard}
                                    label={'true'}
                                    placeholder={'Enter Name'}
                                    textColor={'text-black'}
                                    type={'text'}
                                    id={'textInput'}
                                    labelText={'Card Holder Name'}
                                    isRequired
                                  />
                                  {emptyHolder && (
                                    <p className="text-red-500 my-2">Required</p>
                                  )}
                                </div>
                                {submissionError && (
                                  <div className="mt-6 text-red-500">
                                    {submissionError}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                      </div>
                    )}
                  <div className="sm:w-1/3 sm:mt-0 mt-8 ">
                    <div className="sm:flex items-center justify-between">
                      <div className="sm:mb-0 mb-4">
                        <TextSmall
                          textColor="text-theme-blue-color"
                          textSize="text-lg"
                          text="Billing Information "
                          fontclassName="f-p-t"
                          fontWeight="font-medium"
                        />
                      </div>
                      <div
                        onClick={BillingValidation}
                        className="sm:mx-0 mx-24 sm:mb-0 mb-8"
                      >
                        <SimpleButton
                          textColor="text-theme-blue-color"
                          bgColor="bg-custom-btn-bg"
                          borderClasses=""
                          btnText={disBill ? 'Edit' : 'Save'}
                          width=""
                          fontWeight="font-Normal"
                        />
                      </div>
                    </div>
                    <div className=" w-full mt-6">
                      <div className="flex flex-col">
                        <label
                          htmlFor="ccHold"
                          className="text-base font-normal leading-tight f-p-t"
                        >
                          Card Holder Name
                          <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                          disabled={disBill}
                          onChange={(e) => {
                            setEmptyBillName(false);
                            setBillingName(e.target.value);
                          }}
                          value={billingName}
                          id="ccHold"
                          className={
                            '  w-full rounded-lg mt-2 text-black placeholder-gray-400 focus:border-theme-blue-color focus:outline-none border-btn-light-gray border-2 h-12 px-4' +
                            (disBill ? ' ' : ' px-4')
                          }
                          placeholder="Enter Name"
                        />
                        {emptyBillName && (
                          <p className="text-red-500 my-2">Required</p>
                        )}
                      </div>
                    </div>
                    <div className=" w-full mt-6">
                      <div className="flex flex-col">
                        <label
                          htmlFor="address"
                          className="text-base font-normal leading-tight f-p-t"
                        >
                          Billing Address
                          <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                          disabled={disBill}
                          onChange={(e) => {
                            setEmptyAddress(false);
                            setBillingAddress(e.target.value);
                          }}
                          value={billingAddress}
                          id="address"
                          placeholder="Enter billing address"
                          className={
                            ' w-full rounded-lg mt-2 text-black placeholder-gray-400 focus:border-theme-blue-color focus:outline-none border-btn-light-gray border-2 h-12 px-4' +
                            (disBill ? ' ' : ' px-4')
                          }
                        />
                        {emptyAddress && (
                          <p className="text-red-500 my-2">Required</p>
                        )}
                      </div>
                    </div>

                    <div className=" w-full mt-6">
                      <div className="mr-1">
                        <div className="rounded-lg relative  cursor-pointer f-p-t">
                          <div className=" text-black">
                            <label
                              htmlFor="text"
                              className="text-base font-normal fleading-tight"
                            >
                              State<span className="text-red-500 text-lg">*</span>
                            </label>
                          </div>
                          {!disBill &&
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none inset-0 m-auto mr-2 mb-3"
                              width="20"
                              height="20"
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
                          }
                          {!disBill && !!billingCityState ?
                            <select
                              disabled={!states}
                              required
                              aria-label="Selected tab"
                              onChange={(event) => statesHandler(event.target.value)}
                              className="focus:outline-none mt-2 dynamic-select w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-black appearance-none bg-white h-12"
                              id="state"
                            >
                              <option className="text-xs text-black bg-white outline-none">{billingCityState[0].state}</option>
                              {
                                states &&
                                states.map((item) => {
                                  return (
                                    <option
                                      key={item.id}
                                      value={item.id}
                                      className="text-xs text-black bg-white outline-none"
                                    >
                                      {item.name}
                                    </option>
                                  );
                                })}
                            </select>
                            :
                            <div>
                              {!!billingCityState ?
                                <p className='focus:outline-none mt-2 flex items-center dynamic-select w-full px-4 rounded-lg text-black appearance-none bg-white h-12'>{billingCityState[0].state}</p>
                                :
                                <select
                                  disabled={!states}
                                  required
                                  aria-label="Selected tab"
                                  onChange={(event) => statesHandler(event.target.value)}
                                  className={ (!disBill && 'border-2 border-btn-light-gray') + "focus:outline-none mt-2 dynamic-select w-full px-4  text-gray-400 rounded-lg appearance-none bg-white h-12"}
                                  id="state"
                                >
                                  <option className="text-xs text-gray-400 bg-white outline-none">Choose State</option>
                                  {
                                    states &&
                                    states.map((item) => {
                                      return (
                                        <option
                                          key={item.id}
                                          value={item.id}
                                          className="text-xs text-gray-400 bg-white outline-none"
                                        >
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className='mt-6'>
                        <div className="rounded-lg relative  cursor-pointer f-p-t">
                          <div className=" text-black">
                            <label
                              htmlFor="city"
                              className="text-base font-normal fleading-tight"
                            >
                              City<span className="text-red-500 text-lg">*</span>
                            </label>
                          </div>
                          {!disBill &&
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events/-none inset-0 m-auto mr-2 mb-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#9E9E9E"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          }
                          {!disBill ?
                            <select
                              disabled={!state}
                              required
                              aria-label="Selected tab"
                              onChange={(event) => setCity(event.target.value)}
                              className="focus:outline-none mt-2 dynamic-select w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-black appearance-none bg-white h-12"
                              id="city"
                            >
                              <option className="text-xs text-black bg-white outline-none">{city}</option>
                              {
                                state &&
                                csc.getCitiesOfState(state.id).map((item) => {
                                  return (
                                    <option
                                      key={item.id}
                                      value={item.name}
                                      className="text-xs text-black bg-white outline-none"
                                    >
                                      {item.name}
                                    </option>
                                  );
                                })
                              }
                            </select>
                            :
                            <div>
                              {!!billingCityState ?
                                <p className='focus:outline-none mt-2 flex items-center dynamic-select w-full px-4 rounded-lg text-black appearance-none bg-white h-12'>{billingCityState[0].city}</p>
                                :
                                <select
                                  disabled={!state}
                                  required
                                  aria-label="Selected tab"
                                  onChange={(event) => setCity(event.target.value)}
                                  className="focus:outline-none mt-2 dynamic-select w-full px-4 text-gray-400 text-sm rounded-lg appearance-none bg-white h-12"
                                  id="city"
                                >
                                  <option className="bg-white text-gray-400 outline-none">Choose City</option>
                                  {
                                    state &&
                                    csc.getCitiesOfState(state.id).map((item) => {
                                      return (
                                        <option
                                          key={item.id}
                                          value={item.name}
                                          className="text-xs text-gray-400 bg-white outline-none"
                                        >
                                          {item.name}
                                        </option>
                                      );
                                    })
                                  }
                                </select>
                              }
                            </div>
                          }
                        </div>
                        <p className='text-sm text-red-600 py-1'>{cityVal}</p>
                      </div>
                    </div>
                    <div className=" w-full mt-6">
                      <div className="flex flex-col">
                        <label
                          htmlFor="zip"
                          className="text-base font-normal f-p-t leading-tight"
                        >
                          Zip Code
                          <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                          disabled={disBill}
                          onChange={(e) => {
                            setEmptyZip(false);
                            setBillingZip(e.target.value);
                          }}
                          value={billingZip}
                          id="zip"
                          maxLength={5}
                          type="text"
                          className={
                            'w-full rounded-lg mt-2  focus:border-theme-blue-color focus:outline-none border-btn-light-gray border-2 h-12 px-4  ' +
                            (disBill ? ' ' : ' px-4')
                          }
                          placeholder="Enter Zip Code"
                        />
                        {emptyZip && (
                          <p className="text-red-500 my-2">Required</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainArea>
      </div>
    </>
  );
};
export default Index;
