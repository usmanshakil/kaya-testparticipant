import React, { useState, useEffect } from 'react';
import Header from '../../header';
import Title from '../../common-components/title';
import TextSmall from '../../common-components/text/small';
import HeadingLarge from '../../common-components/headings/headingLogin';
import MessageBox from '../../unique-components/text-box/message-box/index';
import Button from '../../common-components/buttonlogin';
import Pagination from '../../unique-components/pagination';
import { useRouter } from 'next/router';
import { updateParticipant } from '../../../api/graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';

const Index = () => {
  const router = useRouter();
  let totalpages = [1, 2, 3, 4];
  const [pageNum, setPageNum] = useState(1);
  const [referral, setReferral] = useState(null);
  const [reaction, setReaction] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [depression, setDepression] = useState(0);
  const [energy, setEnergy] = useState(0);

  const [goals, setGoals] = useState([]);
  const [indivTherapy, setIndivTherapy] = useState(null);
  const [groupTherapy, setGroupTherapy] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUserId();
  }, [userId]);

  const onSetPageNum = (value) => {
    if (referral !== null && value !== 4) {
      setPageNum(value);
    }
    if (value === 4 && referral !== null && goals.length !== 0) {
      setPageNum(value);
    }
  };
  const handlesCheckBox = (event) => {
    let dup = [...goals];
    if (event.target.checked) {
      dup.push(event.target.value);
    } else {
      dup = dup.filter((e) => e !== event.target.value);
    }
    setGoals(dup);
  };
  const getUserId = async () => {
    return await Auth.currentAuthenticatedUser()
      .then((data) => {
        setUserId(data.attributes['custom:dbUserId']);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  const submitAssesment = () => {
    let answers = {
      referral: referral,
      reaction: {
        health: reaction,
        anxiety: anxiety,
        depression: depression,
        energy: energy,
      },
      goals: goals,
      indivTherapy: indivTherapy,
      groupTherapy: groupTherapy,
    };
    let assessment = JSON.stringify(answers);
    let payload = {
      id: userId,
      assessment: assessment,
    };

    API.graphql(graphqlOperation(updateParticipant, { input: payload }))
      .then(async (res) => {
        router.push('explore');
      })
      .catch((err) => {
        console.error('error', err);
        router.push('explore');
      });
  };

  return (
    <>
      <div className="relative z-10 min-h-screen">
        {pageNum == 1 ? (
          <>
            <img
              src="/static/images/whatbringsyouleft.svg"
              alt=""
              className="absolute bottom-0"
            />
            <img
              src="/static/images/whatbringsyouright.svg"
              alt=""
              className="absolute right-0 bottom-0"
            />
          </>
        ) : pageNum == 2 && referral !== null ? (
          <>
            <img
              src="/static/images/howYouFeeling.svg"
              alt=""
              className="absolute bottom-0"
            />
            <img
              src="/static/images/howyoufeelingright.svg"
              alt=""
              className="absolute right-0 top-0"
            />
          </>
        ) : pageNum == 3 ? (
          <>
            <img
              src="/static/images/group_type.svg"
              alt=""
              className="absolute bottom-0 w-1/6"
            />
          </>
        ) : pageNum == 4 && goals.length > 0 ? (
          <>
            <img
              src="/static/images/goalsSetLeft.svg"
              alt=""
              className="absolute pt-20"
            />
            <img
              src="/static/images/goalsSetRight.svg"
              alt=""
              className="absolute right-0 bottom-0"
            />
          </>
        ) : (
          <>
            <img
              src={'/static/images/individual.svg'}
              className="right-0 bottom-0 absolute"
            />
            <img
              src={'/static/images/Frame 358.svg'}
              className="left-0 bottom-0 absolute"
            />
          </>
        )}

        <Header />
        <div className="container mx-auto flex flex-col items-center justify-center  sm:px-0 px-4 relative z-20">
          {pageNum === 1 ? (
            <>
              <div>
                <Title
                  textColor="text-theme-blue-color"
                  text="What brings you here?"
                  textSize="text-5xl"
                  fontclassName="f-r-t"
                  alignment="text-center"
                  fontWeight="font-bold"
                />
              </div>
              <div className="sm:w-11/12 mx-auto relative">
                <div
                  onChange={(e) => {
                    setReferral(e.target.value);
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <input
                    type="radio"
                    value="I’m looking for support"
                    name="referral"
                    checked={referral === 'I’m looking for support'}
                    id="radio1"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio1"
                    className="mt-12 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I’m looking for support
                  </label>

                  <input
                    type="radio"
                    value="I’m trying something new"
                    name="referral"
                    checked={referral === 'I’m trying something new'}
                    id="radio2"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio2"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I’m trying something new
                  </label>

                  <input
                    type="radio"
                    value="I was referred"
                    name="referral"
                    checked={referral === 'I was referred'}
                    id="radio3"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio3"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I was referred
                  </label>

                  <input
                    type="radio"
                    value="Not sure yet"
                    name="referral"
                    id="radio4"
                    checked={referral === 'Not sure yet'}
                    className="hidden"
                  />
                  <label
                    htmlFor="radio4"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 focus:border-4 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Not sure yet
                  </label>
                </div>
                <div className="flex justify-center pt-5 text-base font-medium">
                  <a
                    className="w-full flex justify-center"
                    onClick={() => {
                      setPageNum(2);
                    }}
                  >
                    <Button
                      btnText="Continue"
                      bgColor="bg-theme-blue-color"
                      textColor="text-white"
                      width="sm:w-2/5 w-full"
                      btnText_size="text-lg"
                    />
                  </a>
                </div>
              </div>
            </>
          ) : pageNum === 2 ? (
            <>
              <div className="w-11/12 mx-auto relative">
                <Title
                  textColor="text-theme-blue-color"
                  text="How have you been feeling lately?"
                  textSize="text-5xl"
                  fontclassName="f-r-t"
                  alignment="text-center"
                  fontWeight="font-bold"
                />
                <h2 className="text-center leading-relaxed text-lg f-p-t font-medium text-theme-gray-color pt-4">
                  Try to focus on the past 2 weeks or so
                </h2>
                <div className="flex justify-center sm:px-6 mt-32 text-2xl ">
                  <div className="w-2/3">
                    <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                      Overall mental health
                    </h2>
                    <div className="w-full">
                      <div className="slidecontainer mt-5 w-full relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          className="slider rounded-lg"
                          id="myRange"
                          value={reaction}
                          onChange={(event) => {
                            setReaction(event.target.value);
                          }}
                        />
                        <output
                          className="font-bold text-lg f-p-t -mt-8 absolute inset-0 text-gray-dark"
                          style={{
                            left:
                              reaction < 40
                                ? parseInt(reaction) + 0 + '%'
                                : reaction < 60
                                ? reaction - 1 + '%'
                                : reaction == 90
                                ? reaction - 3 + '%'
                                : reaction == 100
                                ? reaction - 4 + '%'
                                : reaction - 2 + '%',
                            marginLeft: '1px',
                          }}
                        >
                          {reaction >= 10 ? reaction / 10 : 0}
                        </output>
                      </div>
                      <div className="flex justify-between mt-5 px-2">
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Unwell
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Struggling
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Coping
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Healthy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:px-6 mt-8 text-2xl ">
                  <div className="w-2/3">
                    <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                      Anxiety
                    </h2>
                    <div className="w-full">
                      <div className="slidecontainer mt-5 w-full relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          className="slider rounded-lg"
                          id="myRange2"
                          value={anxiety}
                          onChange={(event) => {
                            setAnxiety(event.target.value);
                          }}
                        />
                        <output
                          className="font-bold text-lg f-p-t -mt-8 inset-0 absolute text-gray-dark -ml-2"
                          style={{
                            left:
                              anxiety < 40
                                ? parseInt(anxiety) + 0 + '%'
                                : anxiety < 60
                                ? anxiety - 1 + '%'
                                : anxiety == 90
                                ? anxiety - 3 + '%'
                                : anxiety == 100
                                ? anxiety - 4 + '%'
                                : anxiety - 2 + '%',
                            marginLeft: '1px',
                          }}
                        >
                          {anxiety >= 10 ? anxiety / 10 : 0}
                        </output>
                      </div>
                      <div className="flex justify-between mt-5 px-10">
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          None at all
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Very High
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:px-6 mt-8 text-2xl ">
                  <div className="w-2/3">
                    <h2 className="mb-8 font-semibold f-p-t text-theme-blue-color">
                      Stress
                    </h2>
                    <div className="w-full">
                      <div className="slidecontainer mt-5 w-full relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          className="slider rounded-lg"
                          id="myRange3"
                          value={depression}
                          onChange={(event) => {
                            setDepression(event.target.value);
                          }}
                        />
                        <output
                          className="font-bold text-lg f-p-t -mt-8 inset-0 absolute text-gray-dark -ml-2"
                          style={{
                            left:
                              depression < 40
                                ? parseInt(depression) + 0 + '%'
                                : depression < 60
                                ? depression - 1 + '%'
                                : depression == 90
                                ? depression - 3 + '%'
                                : depression == 100
                                ? depression - 4 + '%'
                                : depression - 2 + '%',
                            marginLeft: '1px',
                          }}
                        >
                          {depression >= 10 ? depression / 10 : 0}
                        </output>
                      </div>
                      <div className="flex justify-between mt-5 px-10">
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Free as a bird
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Overwhelmed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:px-6 mt-8 text-2xl ">
                  <div className="w-2/3">
                    <h2 className="mb-8 font-semibold f-p-t text-theme-blue-color">
                      Energy
                    </h2>
                    <div className="w-full">
                      <div className="slidecontainer mt-5 w-full relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          className="slider rounded-lg"
                          id="myRange4"
                          value={energy}
                          onChange={(event) => {
                            setEnergy(event.target.value);
                          }}
                        />
                        <output
                          className="font-bold text-lg f-p-t -mt-8 inset-0 absolute text-gray-dark -ml-2"
                          style={{
                            left:
                              energy < 40
                                ? parseInt(energy) + 0 + '%'
                                : energy < 60
                                ? energy - 1 + '%'
                                : energy == 90
                                ? energy - 3 + '%'
                                : energy == 100
                                ? energy - 4 + '%'
                                : energy - 2 + '%',
                            marginLeft: '2px',
                          }}
                        >
                          {energy >= 10 ? energy / 10 : 0}
                        </output>
                      </div>
                      <div className="flex justify-between mt-5 px-10">
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Depleted
                        </div>
                        <div className="text-theme-gray-color text-xs sm:text-lg f-p-t font-medium leading-6">
                          Too much
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-5 text-base font-medium mt-32">
                  <a
                    className="flex justify-center w-2/3"
                    onClick={() => setPageNum(3)}
                  >
                    <Button
                      btnText="Continue"
                      bgColor="bg-theme-blue-color"
                      textColor="text-white"
                      width="w-1/2"
                      btnText_size="text-lg"
                    />
                  </a>
                </div>
              </div>
            </>
          ) : pageNum === 3 ? (
            <>
              <div className="sm:w-11/12  mx-auto px-4 sm:px-0">
                <Title
                  textColor="text-theme-blue-color"
                  text="What are some of your therapy goals?"
                  textSize="text-5xl"
                  fontclassName="f-r-t"
                  alignment="text-center"
                  fontWeight="font-bold"
                />
                <div className="flex justify-center">
                  <div className="lg:w-1/2 px-20">
                    <h2 className="text-center text-lg pt-2">
                      Select as many as you like. You can change your goals at
                      any time from your profile.
                    </h2>
                  </div>
                </div>
                <div
                  onChange={(e) => {
                    handlesCheckBox(e, e.target.id);
                  }}
                  className="flex flex-col items-center"
                >
                  <input
                    type="checkbox"
                    value="Reduce anxiety & stress"
                    name="Goal1"
                    id="Goal1"
                    className="hidden"
                    checked={
                      !!goals.find((item) => item === 'Reduce anxiety & stress')
                    }
                  />
                  <label
                    htmlFor="Goal1"
                    className="mt-12 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Reduce anxiety & stress
                  </label>

                  <input
                    type="checkbox"
                    value="Improve relationships"
                    name="Goal2"
                    id="Goal2"
                    className="hidden"
                    checked={
                      !!goals.find((item) => item === 'Improve relationships')
                    }
                  />
                  <label
                    htmlFor="Goal2"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Improve relationships
                  </label>

                  <input
                    type="checkbox"
                    value="Better manage depression"
                    name="Goal3"
                    id="Goal3"
                    className="hidden"
                    checked={
                      !!goals.find(
                        (item) => item === 'Better manage depression'
                      )
                    }
                  />
                  <label
                    htmlFor="Goal3"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Better manage depression
                  </label>

                  <input
                    type="checkbox"
                    value="Learn new coping skills"
                    name="Goal4"
                    id="Goal4"
                    className="hidden"
                    checked={
                      !!goals.find((item) => item === 'Learn new coping skills')
                    }
                  />
                  <label
                    htmlFor="Goal4"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Learn new coping skills
                  </label>

                  <input
                    type="checkbox"
                    value="Find a support system"
                    name="Goal5"
                    id="Goal5"
                    className="hidden"
                    checked={
                      !!goals.find((item) => item === 'Find a support system')
                    }
                  />
                  <label
                    htmlFor="Goal5"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Find a support system
                  </label>

                  <input
                    type="checkbox"
                    value="Learn from others"
                    name="Goal6"
                    id="Goal6"
                    className="hidden"
                    checked={
                      !!goals.find((item) => item === 'Learn from others')
                    }
                  />
                  <label
                    htmlFor="Goal6"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Learn from others
                  </label>

                  <input
                    type="checkbox"
                    value="Live a healthier lifestyle"
                    name="Goal7"
                    id="Goal7"
                    className="hidden"
                    checked={
                      !!goals.find(
                        (item) => item === 'Live a healthier lifestyle'
                      )
                    }
                  />
                  <label
                    htmlFor="Goal7"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    Live a healthier lifestyle
                  </label>
                </div>
                <div className="flex justify-center pt-5 text-base font-medium">
                  <a
                    className="w-full flex justify-center"
                    onClick={() => {
                      setPageNum(4);
                    }}
                  >
                    <Button
                      btnText="Continue"
                      bgColor="bg-theme-blue-color"
                      textColor="text-white"
                      width="sm:w-2/5 w-full"
                      btnText_size="text-lg"
                    />
                  </a>
                </div>
              </div>
            </>
          ) : pageNum === 4 ? (
            <>
              <div className="sm:w-11/12  mx-auto px-4 sm:px-0">
                <Title
                  textColor="text-theme-blue-color"
                  text="Have you ever been in therapy?"
                  textSize="text-5xl"
                  fontclassName="f-r-t"
                  alignment="text-center"
                  fontWeight="font-bold"
                />

                <div
                  onChange={(e) => {
                    setIndivTherapy(e.target.value);
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="flex w-full mt-6 ">
                    <div className="w-2/3 pr-85px">
                      <Title
                        textColor="text-theme-blue-color"
                        text="Individual therapy"
                        textSize="text-2xl"
                        fontclassName="f-r-t"
                        alignment="text-center"
                        fontWeight="font-bold"
                      />
                    </div>
                  </div>
                  <input
                    type="radio"
                    value="I have never been to individual therapy"
                    name="indivTherapy"
                    id="indivTherapy1"
                    className="hidden"
                    checked={
                      indivTherapy === 'I have never been to individual therapy'
                    }
                  />
                  <label
                    htmlFor="indivTherapy1"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have never been to individual therapy
                  </label>

                  <input
                    type="radio"
                    value="I have been to individual therapy in the past"
                    name="indivTherapy"
                    id="indivTherapy2"
                    className="hidden"
                    checked={
                      indivTherapy ===
                      'I have been to individual therapy in the past'
                    }
                  />
                  <label
                    htmlFor="indivTherapy2"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have been to individual therapy in the past
                  </label>

                  <input
                    type="radio"
                    value="I am currently in individual therapy"
                    name="indivTherapy"
                    id="indivTherapy3"
                    className="hidden"
                    checked={
                      indivTherapy === 'I am currently in individual therapy'
                    }
                  />
                  <label
                    htmlFor="indivTherapy3"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I am currently in individual therapy
                  </label>
                </div>
                <div className="flex w-full mt-12 ">
                  <div className="w-2/3 " style={{ paddingRight: '5.3rem' }}>
                    <Title
                      textColor="text-theme-blue-color"
                      text="Group therapy"
                      textSize="text-2xl"
                      fontclassName="f-r-t"
                      alignment="text-center"
                      fontWeight="font-bold"
                    />
                  </div>
                </div>
                <div
                  onChange={(e) => {
                    setGroupTherapy(e.target.value);
                  }}
                  className="flex flex-col items-center"
                >
                  <input
                    type="radio"
                    value="I have never been to group therapy"
                    name="groupTherapy"
                    id="groupTherapy1"
                    className="hidden"
                    checked={
                      groupTherapy === 'I have never been to group therapy'
                    }
                  />
                  <label
                    htmlFor="groupTherapy1"
                    className="mt-6 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have never been to group therapy
                  </label>

                  <input
                    type="radio"
                    value="I have been to group therapy in the past"
                    name="groupTherapy"
                    id="groupTherapy2"
                    className="hidden"
                    checked={
                      groupTherapy ===
                      'I have been to group therapy in the past'
                    }
                  />
                  <label
                    htmlFor="groupTherapy2"
                    className="mt-5 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have been to group therapy in the past
                  </label>

                  <input
                    type="radio"
                    value="I am currently in group therapy"
                    name="groupTherapy"
                    id="groupTherapy3"
                    className="hidden"
                    checked={groupTherapy === 'I am currently in group therapy'}
                  />
                  <label
                    htmlFor="groupTherapy3"
                    className="mt-5 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-5 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I am currently in group therapy
                  </label>
                </div>
                <div className="flex justify-center pt-5 text-base font-medium">
                  <a
                    className="w-full flex justify-center"
                    onClick={submitAssesment}
                  >
                    <Button
                      btnText="Finish"
                      bgColor="bg-theme-blue-color"
                      textColor="text-white"
                      width="sm:w-2/5 w-full"
                      btnText_size="text-lg"
                    />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="sm:w-11/12 mx-auto px-4 sm:px-0">
                <Title
                  textColor="text-theme-blue-color"
                  text="Your group therapy experience"
                  textSize="text-5xl"
                  fontclassName="f-r-t"
                  alignment="text-center"
                  fontWeight="font-bold"
                />

                <div
                  onChange={(e) => {
                    setGroupTherapy(e.target.value);
                  }}
                  className="flex flex-col items-center"
                >
                  <input
                    type="radio"
                    value="I have never been to group therapy"
                    name="groupTherapy"
                    id="groupTherapy1"
                    className="hidden"
                  />
                  <label
                    htmlFor="groupTherapy1"
                    className="mt-12 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have never been to group therapy
                  </label>

                  <input
                    type="radio"
                    value="I have been to group therapy in the past"
                    name="groupTherapy"
                    id="groupTherapy2"
                    className="hidden"
                  />
                  <label
                    htmlFor="groupTherapy2"
                    className="mt-5 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I have been to group therapy in the past
                  </label>

                  <input
                    type="radio"
                    value="I am currently in group therapy"
                    name="groupTherapy"
                    id="groupTherapy3"
                    className="hidden"
                  />
                  <label
                    htmlFor="groupTherapy3"
                    className="mt-5 flex justify-center cursor-pointer focus:outline-none f-p-t rounded-lg py-3 font-medium text-base px-5 border-solid border-2 sm:w-2/5 w-full bg-transparent text-gray-600"
                  >
                    I am currently in group therapy
                  </label>
                </div>
                <div className="flex justify-center pt-5 text-base font-medium">
                  <a
                    className="w-full flex justify-center"
                    onClick={submitAssesment}
                  >
                    <Button
                      btnText="Finish"
                      bgColor="bg-theme-blue-color"
                      textColor="text-white"
                      width="sm:w-2/5 w-full"
                      btnText_size="text-lg"
                    />
                  </a>
                </div>
              </div>
            </>
          )}

          <div className="container mx-auto pt-64 pb-4">
            <div className="flex w-full justify-center">
              <div className="flex">
                {totalpages.map((el, i) => {
                  return (
                    <div key={i} className="pl-2">
                      <Pagination
                        pageNum={i}
                        setPageNum={onSetPageNum}
                        width={pageNum == i + 1 ? ' w-12 ' : ' w-10 '}
                        height={pageNum == i + 1 ? ' h-12 ' : ' h-10 '}
                        circle_text={pageNum == i + 1 ? pageNum : ' '}
                        circleColor={
                          pageNum == i + 1
                            ? 'bg-theme-blue-color -mt-1 cursor-pointer'
                            : pageNum > i + 1
                            ? 'bg-theme-blue-color cursor-pointer'
                            : ' bg-custom-btn-bg'
                        }
                      >
                        {pageNum > i + 1 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-check "
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        )}
                      </Pagination>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                    input[type=radio]:checked + label {
                        border-color: #6666B3 !important;
                        color: #6666B3 !important;
                    }
                    input[type=radio]:checked + label{
                        border:2px solid;
                    }
                    input[type=checkbox]:checked + label {
                        border-color: #6666B3 !important;
                        color: #6666B3 !important;
                    }
                    input[type=checkbox]:checked + label{
                        border:2px solid;
                    }
                    `}
      </style>
    </>
  );
};
export default Index;
