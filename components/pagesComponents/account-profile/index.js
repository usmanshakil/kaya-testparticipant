import React, { useEffect, useState } from "react";
import SimpleButton from "../../unique-components/simple-button";
import TextSmall from "../../common-components/text/small";
import SimpleInput from "../../common-components/inputs/simple-input";
import MessageBox from "../../unique-components/text-box/message-box";
import SideBar from "../../major-components/sideBar";
import MainArea from "../../major-components/mainArea";
import Link from "next/link";
import PhotoUploader from "../../common-components/PhotoUploader";
import csc from "country-state-city";
import { updateParticipant } from "../../../api/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import DeleteDisabled from "./modals";
import { getWindowHeight } from "../../function";

const Index = ({ id, participant, dispatch }) => {
    const [busy, setBusy] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [profileImg, setProfileImg] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [state, setState] = useState(null);
    const [states, SetStates] = useState(null);
    const [cities, setCities] = useState(null);
    const [city, setCity] = useState(null);
    const [bio, setBio] = useState(null);
    const [openDelete, setOpenDelete] = useState(false);
    const [height, setHeight] = useState(false);
    const [pronouns, setPronouns] = useState(false);
    const [nickname, setNickname] = useState(false);

    const countryStateHandler = (value) => {
        if (value) {
            setCity(cities.find((item) => item.id === value));
        }
    };
    const statesHandler = (Id) => {
        let current = states.find((sin) => sin.id === Id);
        let mainCities = csc.getCitiesOfState(current.id);
        setCities(mainCities);
        setState(current);
    };
    const updateProfile = () => {
        setDisabled(!disabled);
        if (!disabled) {
            let payload = {
                id: id,
                email: email,
                phone: phone,
                bio: bio,
                firstName: firstName,
                lastName: lastName,
                fullName: firstName + " " + lastName,
                featuredImage: profileImg,
                state: state.name,
                city: city.name,
                nickName: nickname,
                pronouns
            };

            API.graphql(graphqlOperation(updateParticipant, { input: payload })).then((res) => {
                dispatch({
                    type: "SET_PARTICIPANT",
                    payload: res.data.updateParticipant
                });
            }).catch((err) => {
                if(err && err.data){
                    dispatch({
                        type: "SET_PARTICIPANT",
                        payload: err.data.updateParticipant
                    });
                }
                console.error("error", err);
            });
            setDisabled(!disabled);
        }
    };
    useEffect(() => {
        if (participant) {
            setProfileImg(participant.featuredImage);
            setFirstName(participant.firstName);
            setLastName(participant.lastName);
            setNickname(participant.nickName);
            setPronouns(participant.pronouns);
            setEmail(participant.email);
            setPhone(participant.phone);
            setBio(participant.bio);
            let states = csc.getStatesOfCountry("231");
            let mainState = states.find(item => item.name === participant.state);
            setState(mainState);
            SetStates(csc.getStatesOfCountry("231"));
            let mainCities = null;
            if(mainState){
                mainCities = csc.getCitiesOfState(mainState.id);
                let currentCity = mainCities.find(item => item.name === participant.city);
                setCities(mainCities);
                setCity(currentCity);
            }
        }
        setHeight(getWindowHeight()-225);
    }, [participant]);
    return (
        <>
        <div className="flex h-full">
          <SideBar />
          <div className='w-full'>
            <div className=" bg-white">
              <MainArea/>
            </div>
            <div className="bg-light-pink pb-8">
              <div className="pb-3">
                <div className=" sm:flex px-8 h-full">
                  <Link href="/account-profile">
                    <a>
                      <div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">
                        <h1 className="text-lg f-p-t font-semibold text-theme-blue-color">
                          Profile
                        </h1>
                      </div>
                    </a>
                  </Link>
                  <Link href="/account-assesment">
                    <a>
                      <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">
                        <h1 className="text-lg font-semibold text-theme-gray-color f-p-t ">
                            Assessment
                        </h1>
                      </div>
                    </a>
                  </Link>
                  {/*<Link href="/account-billing">*/}
                    {/*<a>*/}
                      {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">*/}
                        {/*<h1 className="text-lg font-semibold text-theme-gray-color f-p-t ">*/}
                          {/*Billing*/}
                        {/*</h1>*/}
                      {/*</div>*/}
                    {/*</a>*/}
                  {/*</Link>*/}
                  {/*<Link href="/account-payment-info">*/}
                    {/*<a>*/}
                      {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">*/}
                        {/*<h1 className="text-lg font-semibold text-theme-gray-color f-p-t ">*/}
                          {/*Payment Info*/}
                        {/*</h1>*/}
                      {/*</div>*/}
                    {/*</a>*/}
                  {/*</Link>*/}
                </div>
              </div>
              <div className="px-8 py-3 ">
                <div className="bg-white sm:px-8 overflow-y-scroll px-4 py-12" style={{height}}>
                  <div className="sm:flex items-center justify-end sm:mb-0 mb-8">
                    <a onClick={updateProfile}>
                      <SimpleButton
                          disabled={busy}
                          textColor="text-theme-blue-color"
                          bgColor="bg-custom-btn-bg"
                          borderClasses=""
                          btnText={disabled ? "Edit Details" : "Save"}
                          width=""
                          fontWeight="font-Normal"
                      />
                    </a>{" "}
                    <Link href="/account-change-password">
                      <a>
                        <SimpleButton
                            textColor="text-theme-blue-color"
                            bgColor="bg-custom-btn-bg"
                            borderClasses=""
                            btnText="Change Password"
                            width="ml-4"
                            fontWeight="font-Normal"
                        />
                      </a>
                    </Link>
                    <div onClick={() => setOpenDelete(true)}>
                      <SimpleButton
                          textColor="text-theme-blue-color"
                          bgColor="bg-custom-btn-bg"
                          borderClasses=""
                          btnText="Delete"
                          width="ml-4"
                          fontWeight="font-Normal"
                      />
                    </div>
                  </div>
                  <div id="acc_Pro" className="sm:w-10/12">
                    <div className="sm:flex sm:items-center sm:mx-0 mx-16 ">
                      <div className="sm:mx-0 mx-6">
                          {/* <AvatarWithImage BorderRadius="rounded-full" ImgBorderRadius="rounded-full" height="h-20" width="w-20" imgUrl="https://i.ibb.co/RDJVY2T/Mask-Group-4.png" /> */}
                        <PhotoUploader
                            disabled={disabled}
                            setBusy={setBusy}
                            inline={true}
                            setProfileImg={setProfileImg}
                            profileImg={profileImg}
                        />
                      </div>
                        {/* <div className="sm:ml-4 sm:mt-0 mt-8 ">
                         <SimpleButton textColor="text-theme-blue-color" bgColor="bg-custom-btn-bg" borderClasses="" btnText="Upload Photo" width="sm:w-full" fontWeight="font-Normal" />
                         </div> */}
                    </div>
                    <div className="mt-6">
                      <TextSmall
                          textColor="text-theme-blue-color"
                          textSize="text-2xl"
                          text="About You "
                          fontclassName="f-p-t"
                          fontWeight="font-medium"
                      />
                    </div>
                    <div className="mt-6">
                      <TextSmall
                          textColor="text-theme-gray-color"
                          textSize="text-base"
                          text="This information is only visible to group therapists. You can add a nickname if you prefer on the conferencing tool visible to other members before the session starts. "
                          fontclassName="f-p-t"
                          fontWeight="font-normal"
                      />
                    </div>
                    <div className="sm:flex pt-16 ">
                      <div className=" sm:w-1/2 ">
                        <SimpleInput
                            setTextValue={setFirstName}
                            disable={disabled}
                            value={firstName}
                            label={"true"}
                            placeholder={""}
                            textColor={"text-black"}
                            type={"text"}
                            id={"textInput1"}
                            labelText={"First Name"}
                            isRequired
                        />
                      </div>
                      <div className="sm:w-1/2 sm:ml-8 sm:mt-0 mt-4">
                        <SimpleInput
                            setTextValue={setLastName}
                            disable={disabled}
                            value={lastName}
                            label={"true"}
                            placeholder={""}
                            textColor={"text-black"}
                            type={"text"}
                            id={"textInput2"}
                            labelText={"Last Name"}
                            isRequired
                        />
                      </div>
                    </div>
                    <div className="sm:flex pt-16 ">
                      <div className=" sm:w-1/2 ">
                        <SimpleInput
                            setTextValue={setNickname}
                            disable={disabled}
                            value={nickname}
                            label={"true"}
                            placeholder={""}
                            textColor={"text-black"}
                            type={"text"}
                            id={"nickname"}
                            labelText={"Nick Name"}
                            isRequired
                        />
                      </div>
                      <div className="sm:w-1/2 sm:ml-8 sm:mt-0 mt-4">
                        <div className="rounded-lg relative  cursor-pointer f-p-t">
                          <div className=" text-black">
                            <label htmlFor="pronouns" className="text-base font-normal fleading-tight">
                              Preferred Pronouns<span className="text-red-500 text-lg">*</span>
                            </label>
                          </div>
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
                          <select disabled={!pronouns || disabled} required aria-label="Selected tab" value={pronouns ? pronouns : ""} onChange={(event) => setPronouns(event.target.value)} className="mt-1 focus:outline-none  w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none bg-white h-12" id="pronouns">
                              <option/>
                              <option>She/Her/Hers/Herself</option>
                              <option>He/Him/His/Himself</option>
                              <option>They/Them/Theirs/Themself</option>
                              <option>Name/Name/Name's/Name's self</option>
                              <option>Ze/Zir (Hir)/Zirs (Hirs)/Zirself (Hirself)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex sm:pt-16 pt-4 ">
                      <div className=" sm:w-1/2 ">
                        <SimpleInput
                            setTextValue={setEmail}
                            disable={disabled}
                            value={email}
                            label={"true"}
                            placeholder={""}
                            textColor={"text-black"}
                            type={"text"}
                            id={"textInput3"}
                            labelText={"Email"}
                            isRequired
                        />
                      </div>
                      <div className="sm:w-1/2 sm:ml-8 sm:mt-0 mt-4">
                        <SimpleInput
                            setTextValue={setPhone}
                            disable={disabled}
                            value={phone}
                            label={"true"}
                            placeholder={""}
                            textColor={"text-black"}
                            type={"text"}
                            id={"number"}
                            labelText={"Phone"}
                            isRequired
                        />
                      </div>
                    </div>
                    <div className="sm:flex sm:pt-16 pt-4 ">
                      <div className="sm:w-1/2 sm:pr-8 sm:pt-0 pt-4">
                        <div className="rounded-lg relative  cursor-pointer f-p-t">
                          <div className=" text-black">
                            <label
                                htmlFor="text"
                                className="text-base font-normal fleading-tight"
                            >
                              State<span className="text-red-500 text-lg">*</span>
                            </label>
                          </div>
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
                          <select
                              disabled={!states || disabled}
                              value={state ? state.id : ""}
                              required
                              aria-label="Selected tab"
                              onChange={(event) =>
                                  statesHandler(event.target.value)
                              }
                              className="focus:border-theme-blue-color focus:outline-none   w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg appearance-none  h-12"
                              id="state"
                          >
                            <option className="text-xs bg-white outline-none" disabled />
                              {states &&
                              states.map((item) => {
                                  return (
                                      <option
                                          key={item.id}
                                          value={item.id}
                                          className="text-xs bg-white outline-none"
                                      >
                                          {item.name}
                                      </option>
                                  );
                              })}
                          </select>
                        </div>
                      </div>
                      <div className="sm:w-1/2 sm:pb-8 sm:pt-2 -mt-2 sm:pl-4 pl-0">
                        <div className="rounded-lg relative cursor-pointer f-p-t w-full">
                          <div className="text-black">
                            <label
                                htmlFor="country"
                                className="text-base font-normal fleading-tight"
                            >
                              City
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                          </div>
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
                          <select
                              disabled={disabled}
                              value={city ? city.id : ""}
                              required
                              aria-label="Selected tab"
                              onChange={(event) =>
                                  countryStateHandler(event.target.value)
                              }
                              className="focus:border-theme-blue-color focus:outline-none   w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg appearance-none  h-12"
                              id="country"
                          >
                            <option className="text-xs bg-white outline-none" disabled />
                              {cities &&
                              cities.map((item, i) => {
                                  return (
                                      <option
                                          key={i}
                                          value={item.id}
                                          className="text-xs bg-white outline-none"
                                      >
                                          {item.name}
                                      </option>
                                  );
                              })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="sm:pt-0 pt-4 ">
                      <MessageBox
                          disabled={disabled}
                          text={bio}
                          setTextValue={setBio}
                          width={"w-full"}
                          height={"h-32"}
                          BorderRadius={"rounded-md"}
                          textSize="text-base"
                          label={"true"}
                          labelText={"Tell Us About Yourself"}
                          textColor={"text-black"}
                          borderClasses="border-2 border-btn-light-gray focus:border-theme-blue-color focus:outline-none "
                          isRequired
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* </MainArea> */}
          </div>
            {openDelete && (
                <DeleteDisabled
                    id={id}
                    participant={participant}
                    setOpenDelete={setOpenDelete}
                />
            )}
        </div>
        </>
    );
};
export default Index;
