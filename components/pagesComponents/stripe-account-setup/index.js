import React ,{useState} from "react";
import TextSmall from "../../common-components/text/small"
import SimpleInput from "../../common-components/inputs/simple-input"
import axios from 'axios';
import { api } from '../../../helpers/api';
import { API, graphqlOperation } from 'aws-amplify';
import { emailRequest, paymentPath } from '../../../config';
import { updateParticipant } from '../../../apii/graphql/mutations';
import IconButton from "../../unique-components/icon-button";
import Link from "next/link";

import Header from "../../header";
import Router from "next/router";

const Index = ({ participant, groupId }) => {
  const [ccNum, setCcNum] = useState('');
  const [ccExpMonth, setCcExpMonth] = useState('');
  const [ccExpYear, setCcExpYear] = useState('');
  const [ccHolder, setCcHolder] = useState('');
  const [cvc, setCvc] = useState('');
  const [isCard , setIsCard]= useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading]= useState(false);
  const [submissionError, setSubmissionError] = useState(false);


  const onSubmitCardDetails = (e)=>{
      e.preventDefault();
      setSubmissionError(false);
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
              Router.push("/explore-detail/"+groupId+"?schedule=true")
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
        setIsCard(false);
        setSubmissionError('Payment info not added. Please try again');
      });
    }
    const back=()=>{
      Router.push(`/explore-detail/${groupId}`)
    }
  return (
    <>
     <div
                className="w-full h-full bg-no-repeat bg-cover"
                style={{backgroundImage: `url(${"/static/images/bg_top.svg"})`}}
            >
      <Header />
      <style>{`
      body{
        overflow: auto!important;
      }
      `}</style>
        <div className=" h-full w-full ">
         
            <div className="bg-wave-violet h-full">             
              <div className=" py-3 ">
                <div className="bg-btn-wave-violet py-12 px-8 h-full">
                <div className=" flex justify-center sm:pb-0 pb-4 w-1/2">
                      <button onClick={()=> back()} className="flex items-center rounded-lg pr-5 cursor-pointer focus:outline-none h-10 text-home-blue-color border hover:border-theme-blue-color ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left ml-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6666B3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <span className=" text-base leading-6 text-theme-blue-color  py-2 font-normal">Back</span>
                        </button>
                      </div>
                  <div className="flex items-center justify-center w-full">
                      <form onSubmit={(e)=> onSubmitCardDetails(e)} className="sm:w-1/3  ">
                        <div className="flex flex-col f-p-t items-center justify-center">
                          <div className = "py-2">
                            <TextSmall
                              text="Set payment account"
                              textColor="text-theme-blue-color"
                              textSize="text-2xl"
                              fontWeight="font-medium"
                            />
                        </div>
                        <TextSmall
                          text="You won't be charged until you are signed up for group sessions. You also will not be charged for any consultations."
                          textColor="text-theme-gray-color"
                          textSize="text-base"
                          fontWeight="font-normal"
                          alignment="sm:text-center"
                        />
                        </div>
                        <div className="pb-6 pt-6">
                        <SimpleInput
                            maxLength={16}
                            padding={'px-4'}
                            type={'tel'}
                            label={'true'}
                            placeholder={'Enter Name'}
                            textColor={'text-black'}
                            id={'name'}
                            labelText={'Card Holder Name'}
                            isRequired
                            value={ccHolder}
                            setTextValue={setCcHolder}
                          />    
                          </div>
                        <div className="pb-6">
                        <SimpleInput
                            maxLength={16}
                            padding={'px-4'}
                            type={'tel'}
                            label={'true'}
                            placeholder={'Enter card number'}
                            textColor={'text-black'}
                            id={'cardNumber'}
                            labelText={'Card Number'}
                            isRequired
                            value={ccNum}
                            setTextValue={setCcNum}
                          /> 
                          </div>
                        <div className="pb-6 w-full sm:flex ">
                            <div className="sm:w-1/2 sm:pb-0 pb-6">
                                <SimpleInput label="true"   maxLength={2}   value={ccExpMonth} setTextValue={setCcExpMonth} textColor={'text-black'} labelText="Expiration Month" type="text" placeholder="03" isRequired/>
                            </div>
                            <div className="sm:w-1/2 sm:ml-3 sm:pb-0 pb-6">
                                <SimpleInput label="true"  maxLength={4}   value={ccExpYear} setTextValue={setCcExpYear} textColor={'text-black'} labelText="Expiration Year" type="text" placeholder="2024" isRequired/>
                            </div>
                            
                        </div>
                        <div className="pb-6">
                        <SimpleInput
                            maxLength={16}
                            padding={'px-4'}
                            type={'tel'}
                            label={'true'}
                            placeholder={'042'}
                            textColor={'text-black'}
                            id={'ccNumber'}
                            labelText={'CVC'}
                            isRequired
                            value={cvc}
                            setTextValue={setCvc}
                          />               
                            </div>
                        <div className="pb-40">
                        {loading ? (
                            <button
                              disabled={loading}
                              type="submit"
                              className='focus:outline-none  f-p-t text-white w-full  text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-12 font-semibold text-home-blue-color  bg-theme-blue-color'

                            >
                              <div className = "flex justify-center">
                              <img
                                src="/static/images/loader.svg"
                                style={{ width: '30px', height: '30px' }}
                                alt=""
                              />
                              </div>
                            </button>
                          ):(
                          <button
                          type= "submit"
                          disabled={loading}
                          className=
                            'focus:outline-none f-p-t text-white w-full  text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-12 font-semibold text-home-blue-color  bg-theme-blue-color'
                        >
                          Confirm
                        </button>
                          )}
                          <div className = "h-12">
                           {submissionError ? 
                            <p className = "text-red-500 f-p-t pt-4 text-center font-medium  text-base pr-4"> {submissionError} </p>
                            : null}
                        </div>
                      </div>
                    </form>
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
