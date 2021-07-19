import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import csc from 'country-state-city';
import { createParticipant } from '../../../apii/graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import Router from 'next/router';
import PhotoUploader from '../../common-components/PhotoUploader';

const Index = ({ user }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState(null);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [states, SetStates] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://i.ibb.co/RDJVY2T/Mask-Group-4.png'
  );
  const [busy, setBusy] = useState(false);
  const [pronouns, setPronouns] = useState(false);
  const [nickname, setNickname] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
    countryStateHandler();
  }, [user]);

  const countryStateHandler = () => {
    SetStates(csc.getStatesOfCountry('231'));
    setState(null);
    setCity(null);
  };

  const statesHandler = (Id) => {
    setState(states.find((sin) => sin.id === Id));
  };

  const createTherapist = (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    const payload = {
      featuredImage: profileImg,
      firstName,
      lastName,
      fullName: firstName + ' ' + lastName,
      email: user.email,
      phone: phone,
      bio: desc,
      username: user['cognito:username'],
      state: state.name,
      country: '',
      city,
      nickName: nickname,
      pronouns,
    };

    API.graphql(graphqlOperation(createParticipant, { input: payload }))
      .then(async (res) => {
        setUserId(res.data.createParticipant.id);
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
          'custom:dbUserId': res.data.createParticipant.id,
        });
        setLoader(false);
        Router.push('/almost_there_confimation');
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  };

  //

  return (
    <form>
      <form
        onSubmit={(event) => createTherapist(event)}
        className="flex flex-col items-center justify-center  w-full f-p-t sm:px-0 p-4 h-full bg-transparent relative "
      >
        <div className="">
          <h3 className="w-full leading-tight text-theme-blue-color text-5xl text-center f-r-t font-bold">
            Lets set up your profile!
          </h3>
        </div>
        <div className="py-6">
          <p className=" leading-3 text-theme-gray-color text-base  f-p-t  font-normal  sm:text-left text-center   ">
            Your profile information is only visible to your group therapist
          </p>
        </div>
        <div className="pt-6">
          <PhotoUploader
            inline={true}
            setProfileImg={setProfileImg}
            profileImg={profileImg}
            setBusy={setBusy}
          />
        </div>
        <div className="sm:flex pt-16 flex items-center justify-center w-full">
          <div className="w-1/2">
            <div className=" text-black">
              <label
                htmlFor="firstName"
                className="text-base font-normal leading-tight f-p-t"
              >
                First Name<span className="text-red-500 text-lg">*</span>
              </label>
              <input
                id="firstName"
                required
                className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                type="text"
                placeholder=""
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2 sm:ml-4">
            <div className=" text-black">
              <label
                htmlFor="lastName"
                className="text-base font-normal leading-tight f-p-t"
              >
                Last Name<span className="text-red-500 text-lg">*</span>
              </label>
              <input
                id="lastName"
                required
                className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                type="text"
                placeholder=""
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="sm:flex pt-16 flex items-center justify-center w-full">
          <div className=" w-1/2 ">
            <div className=" text-black">
              <label
                htmlFor="nickname"
                className="text-base font-normal leading-tight f-p-t"
              >
                Nickname (Optional)
              </label>
              <input
                id="nickname"
                className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                type="text"
                placeholder=""
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2 sm:ml-4 relative">
            <div className=" text-black">
              <div className=" text-black">
                <label
                  htmlFor="pronouns"
                  className="text-base font-normal leading-tight f-p-t"
                >
                  Preferred Pronouns
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
                required
                aria-label="Selected tab"
                onChange={(event) => setPronouns(event.target.value)}
                className="mt-2 focus:outline-none  w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none bg-white h-12"
                id="pronouns"
              >
                <option />
                <option>She/Her/Hers/Herself</option>
                <option>He/Him/His/Himself</option>
                <option>They/Them/Theirs/Themself</option>
                <option>Name/Name/Name's/Name's self</option>
                <option>Ze/Zir (Hir)/Zirs (Hirs)/Zirself (Hirself)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="sm:flex pt-8 flex items-center justify-center w-full">
          <div className=" w-1/2 ">
            <div className=" text-black">
              <label
                htmlFor="email"
                className="text-base font-normal leading-tight f-p-t"
              >
                Email<span className="text-red-500 text-lg">*</span>
              </label>
              <input
                disabled
                id="email"
                required
                className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                type="text"
                placeholder=""
                defaultValue={email}
              />
            </div>
          </div>
          <div className="w-1/2 sm:ml-4">
            <div className=" text-black">
              <label
                htmlFor="phone"
                className="text-base font-normal leading-tight f-p-t"
              >
                Phone<span className="text-red-500 text-lg">*</span>
              </label>
              <input
                id="phone"
                required
                className="px-4 w-full rounded-lg mt-2  focus:outline-none  border-btn-light-gray border-2 h-12"
                type="tel"
                placeholder=""
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="sm:flex py-8 items-center justify-center  w-full">
          <div className=" w-1/2 ">
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
                disabled={!states}
                required
                aria-label="Selected tab"
                onChange={(event) => statesHandler(event.target.value)}
                className="focus:outline-none dynamic-select w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none bg-white h-12"
                id="state"
              >
                <option className="text-xs text-theme-gray-color bg-white outline-none" />
                {states &&
                  states.map((item) => {
                    return (
                      <option
                        key={item.id}
                        value={item.id}
                        className="text-xs text-theme-gray-color bg-white outline-none"
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="w-1/2 sm:ml-4">
            <div className="rounded-lg relative  cursor-pointer f-p-t">
              <div className=" text-black">
                <label
                  htmlFor="city"
                  className="text-base font-normal fleading-tight"
                >
                  City<span className="text-red-500 text-lg">*</span>
                </label>
              </div>
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
              <select
                disabled={!state}
                required
                aria-label="Selected tab"
                onChange={(event) => setCity(event.target.value)}
                className="focus:outline-none  w-full px-4 text-sm border-2 border-btn-light-gray rounded-lg text-theme-gray-color appearance-none bg-white h-12"
                id="city"
              >
                <option className="text-xs text-theme-gray-color bg-white outline-none" />
                {state &&
                  csc.getCitiesOfState(state.id).map((item) => {
                    return (
                      <option
                        key={item.id}
                        value={item.name}
                        className="text-xs text-theme-gray-color bg-white outline-none"
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>

        <div className=" w-full ">
          <div className="   text-black">
            <label
              htmlFor="desc"
              className="text-base font-normal fleading-tight f-p-t"
            >
              Tell Us About Yourself
              <span className="text-red-500 text-lg">*</span>
            </label>
          </div>
          <textarea
            id="desc"
            onChange={(event) => setDesc(event.target.value)}
            className="pl-2 pt-2 mt-2 focus:outline-none  resize-none bg-white  w-full rounded-md text-base text-black h-32 border-btn-light-gray border-2  border-solid  "
          />
        </div>
        <div className="my-4 ">
          {loader ? (
            <button
              disabled={loader}
              type="submit"
              className="flex items-center justify-center focus:outline-none bg-theme-blue-color rounded-md text-white text-base tracking-widest leading-3 py-2 w-64 hover:opacity-90"
            >
              <img
                src="/static/images/loader.svg"
                style={{ width: '36px', height: '36px' }}
                alt=""
              />
            </button>
          ) : (
              <button
                type="submit"
                disabled={loader}
                className="focus:outline-none rounded-lg f-p-t text-white py-3 px-5 text-lg font-semibold bg-theme-blue-color w-full hover:opacity-90"
              >
                Profile Setup
              </button>
            )}
          <div className="flex flex-col mt-5">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        </div>
      </form>
    </form>
  );
};
export default Index;
