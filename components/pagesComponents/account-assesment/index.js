import React, { useState, useEffect } from 'react';
import TextSmall from '../../common-components/text/small';
import Sidebar from '../../major-components/sideBar';
import MainArea from '../../major-components/mainArea';
import Link from 'next/link';
import SimpleButton from '../../unique-components/simple-button';
import { updateParticipant } from '../../../api/graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Loader from '../../common-components/loader';
import { getWindowHeight } from '../../function';

const Index = ({ id, participant }) => {
  const [disCard, setDiscard] = useState(true);
  const [assessment, setAssessment] = useState(null);
  const [goals, setGoals] = useState([]);
  const [dupGoals, setDupGoals] = useState([]);
  const [reaction, setReaction] = useState('');
  const [anxiety, setAnxiety] = useState('');
  const [depression, setDepression] = useState('');
  const [energy, setEnergy] = useState('');
  const [height, setHeight] = useState(false);
  useEffect(() => {
    if (participant && participant.assessment) {
      let assess = JSON.parse(participant.assessment);
      setAssessment(assess);
      overAllMentalHealth(assess.reaction.health);
      overAllAnxiety(assess.reaction.anxiety);
      overAllDepression(assess.reaction.depression);
      overAllEnergy(assess.reaction.energy);
      let newGroups = [];
      participant.tags.items.forEach((sin) => {
        if (sin && sin.tag) {
          sin.tag.relationId = sin.id;
          newGroups.push(sin.tag);
        }
      });
      setGoals(assess.goals);
    }
    setHeight(getWindowHeight() - 235);
  }, [participant]);
  // const updateGoals = (index, event) => {
  //   let newGoals = [...goals];
  //   newGoals[index].goal = event.target.value;
  //   setGoals(newGoals);
  // };
  const handlesCheckBox = (event) => {
    let dup = [...goals];
    if (event.target.checked) {
      dup.push(event.target.value);
    } else {
      dup = dup.filter((e) => e !== event.target.value);
    }
    setGoals(dup);
  };
  const updateAssessment = () => {
    setDiscard(!disCard);

    let answers = {
      referral: assessment && assessment.referral ? assessment.referral : ' ',
      reaction: {
        health: reaction,
        anxiety: anxiety,
        depression: depression,
        energy: energy,
      },
      goals: goals,
      indivTherapy:
        assessment && assessment.indivTherapy ? assessment.indivTherapy : ' ',
      groupTherapy:
        assessment && assessment.groupTherapy ? assessment.groupTherapy : ' ',
    };

    setDiscard(!disCard);
    let assessmentString = JSON.stringify(answers);
    let payload = {
      id: id,
      assessment: assessmentString,
    };

    API.graphql(graphqlOperation(updateParticipant, { input: payload }))
      .then(async (res) => {
        let assessRes = JSON.parse(res.data.updateParticipant.assessment);
        setAssessment(assessRes);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  const overAllMentalHealth = (value) => {
    const range = document.getElementById('mentalRange');
    const rangeV = document.getElementById('mentalSlide');
    const newValue = Number(
        ((value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.3;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    setReaction(value);
  };

  const overAllAnxiety = (value) => {
    const range = document.getElementById('AnxietyRange');
    const rangeV = document.getElementById('AnxietySlide');
    const newValue = Number(
        ((value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.3;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    setAnxiety(value);
  };

  const overAllDepression = (value) => {
    const range = document.getElementById('DepressionRange');
    const rangeV = document.getElementById('DepressionSlide');
    const newValue = Number(
        ((value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.3;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    setDepression(value);
  };

  const overAllEnergy = (value) => {
    const range = document.getElementById('EnergyRange');
    const rangeV = document.getElementById('EnergySlide');
    const newValue = Number(
        ((value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.3;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    setEnergy(value);
  };

  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full">
          <MainArea />
          <div className="bg-light-pink">
            <div className="h-3" />
            <div className=" pb-3 h-full">
              <div className=" sm:flex px-8 h-full">
                <Link href="/account-profile">
                  <a>
                    <div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4 ">
                      <h1 className="text-lg font-semibold text-theme-gray-color">
                        Profile
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href="/account-assesment">
                  <a>
                    <div className="py-3 px-6 mt-2 bg-white -mb-6 rounded-tr-lg rounded-tl-lg mr-4">
                      <h1 className="text-lg font-semibold text-theme-blue-color">
                        Assessment
                      </h1>
                    </div>
                  </a>
                </Link>
                {/*<Link href="/account-billing">*/}
                  {/*<a>*/}
                    {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">*/}
                      {/*<h1 className="text-lg font-semibold text-theme-gray-color">*/}
                        {/*Billing*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
                {/*<Link href="/account-payment-info">*/}
                  {/*<a>*/}
                    {/*<div className="py-3 px-6 mt-2  -mb-6 rounded-lg mr-4">*/}
                      {/*<h1 className="text-lg font-semibold text-theme-gray-color">*/}
                        {/*Payment Info*/}
                      {/*</h1>*/}
                    {/*</div>*/}
                  {/*</a>*/}
                {/*</Link>*/}
              </div>
            </div>
            {participant ? (
              <div className="px-8 py-3 h-full bg-light-pink pb-20">
                <div
                  className="bg-white pb-20 overflow-y-scroll px-8 py-6"
                  style={{ height }}
                >
                  <div className="">
                    <div onClick={updateAssessment}>
                      <div className="flex items-center justify-end">
                        <SimpleButton
                          textColor="text-theme-blue-color"
                          bgColor="bg-custom-btn-bg"
                          borderClasses=""
                          btnText={disCard ? 'Edit' : ' Save '}
                          width=""
                          fontWeight="font-Normal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 w-full">
                    <div>
                      <div className="mb-3 ">
                        <TextSmall
                          textColor="text-theme-blue-color"
                          textSize="text-2xl"
                          text="Your Goals "
                          fontclassName="f-p-t"
                          fontWeight="font-medium"
                        />
                      </div>

                      {disCard ? (
                        goals &&
                        goals.map((goal, i) => {
                          return (
                            <div className="w-full">
                              <input
                                type="checkbox"
                                value="Goals"
                                name="Goal"
                                id="Goal"
                                className="hidden"
                              />
                              <label
                                htmlFor="Goal"
                                className="mt-1 flex f-p-t py-3 font-medium text-base px-1  sm:w-2/5 w-full bg-transparent text-gray-600"
                              >
                                {goal}
                              </label>
                            </div>
                          );
                        })
                      ) : (
                        <>
                          <div
                            onChange={(e) => {
                              handlesCheckBox(e, e.target.id);
                            }}
                            className="w-full"
                          >
                            <div className="flex f-p-t font-medium text-base py-3 px-5  sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Reduce anxiety & stress"
                                name="Goal1"
                                id="Goal1"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) => item === 'Reduce anxiety & stress'
                                  )
                                }
                              />
                              <label
                                className="px-5 cursor-pointer"
                                htmlFor="Goal1"
                              >
                                Reduce anxiety & stress
                              </label>
                            </div>

                            <div className="flex  f-p-t font-medium text-base  py-3 px-5  sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Improve relationships"
                                name="Goal2"
                                id="Goal2"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) => item === 'Improve relationships'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal2"
                                className="px-5 cursor-pointer"
                              >
                                Improve relationships
                              </label>
                            </div>
                            <div className="flex focus:outline-none f-p-t font-medium text-base px-5 py-3  sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Better manage depression"
                                name="Goal3"
                                id="Goal3"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) =>
                                      item === 'Better manage depression'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal3"
                                className="px-5 cursor-pointer"
                              >
                                Better manage depression
                              </label>
                            </div>

                            <div className="flex  focus:outline-none f-p-t font-medium text-base px-5  py-3 sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Learn new coping skills"
                                name="Goal4"
                                id="Goal4"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) => item === 'Learn new coping skills'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal4"
                                className="px-5 cursor-pointer"
                              >
                                Learn new coping skills
                              </label>
                            </div>
                            <div className="flex  focus:outline-none f-p-t font-medium text-base px-5  py-3 sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Find a support system"
                                name="Goal5"
                                id="Goal5"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) => item === 'Find a support system'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal5"
                                className="px-5 cursor-pointer"
                              >
                                Find a support system
                              </label>
                            </div>

                            <div className="flex focus:outline-none f-p-t font-medium text-base px-5 py-3  sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Learn from others"
                                name="Goal6"
                                id="Goal6"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) => item === 'Learn from others'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal6"
                                className="px-5 cursor-pointer"
                              >
                                Learn from others
                              </label>
                            </div>
                            <div className="flex focus:outline-none f-p-t font-medium text-base px-5  py-3 sm:w-2/5 w-full bg-transparent text-gray-600">
                              <input
                                type="checkbox"
                                value="Live a healthier lifestyle"
                                name="Goal7"
                                id="Goal7"
                                className="mt-5px cursor-pointer"
                                checked={
                                  goals &&
                                  !!goals.find(
                                    (item) =>
                                      item === 'Live a healthier lifestyle'
                                  )
                                }
                              />
                              <label
                                htmlFor="Goal7"
                                className="px-5 cursor-pointer"
                              >
                                Live a healthier lifestyle
                              </label>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="relative w-full md:w-2/3 2xl:w-1/2">
                        <h1 className="mb-10 mt-6 font-semibold f-p-t text-theme-blue-color text-2xl">
                          How have you been feeling lately?
                        </h1>

                        <div className="flex justify-center mt-10">
                          <div className="w-full">
                            <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                              Overall mental health
                            </h2>
                            <div className="w-full">
                              <div className="slidecontainer mt-5 w-full relative">
                                <input
                                  type="range"
                                  disabled={disCard}
                                  min="0"
                                  max="100"
                                  step="10"
                                  className="slider rounded-lg"
                                  id="mentalRange"
                                  value={reaction}
                                  onChange={(event) => {
                                    overAllMentalHealth(event.target.value);
                                  }}
                                />
                                <output
                                  id="mentalSlide"
                                  className="font-bold text-lg f-p-t -mt-8 absolute text-gray-dark"
                                  style={{ left: '' }}
                                >
                                  {reaction / 10}
                                </output>
                              </div>
                              <div className="flex justify-between mt-5 px-4">
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
                        <div className="flex justify-center mt-8">
                          <div className="w-full">
                            <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                              Anxiety
                            </h2>
                            <div className="w-full">
                              <div className="slidecontainer mt-5 w-full  relative">
                                <input
                                  type="range"
                                  disabled={disCard}
                                  min="0"
                                  max="100"
                                  step="10"
                                  className="slider rounded-lg"
                                  id="AnxietyRange"
                                  value={anxiety}
                                  onChange={(event) => {
                                    overAllAnxiety(event.target.value);
                                  }}
                                />
                                <output
                                  id="AnxietySlide"
                                  className="font-bold text-lg f-p-t -mt-8 absolute text-gray-dark"
                                >
                                  {anxiety / 10}
                                </output>
                              </div>
                              <div className="flex justify-between mt-5 px-4">
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
                        <div className="flex justify-center mt-8">
                          <div className="w-full">
                            <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                              Stress
                            </h2>
                            <div className="w-full">
                              <div className="slidecontainer mt-5 w-full  relative">
                                <input
                                  type="range"
                                  disabled={disCard}
                                  min="0"
                                  max="100"
                                  step="10"
                                  className="slider rounded-lg"
                                  id="DepressionRange"
                                  value={depression}
                                  onChange={(event) => {
                                    overAllDepression(event.target.value);
                                  }}
                                />
                                <output
                                  id="DepressionSlide"
                                  className="font-bold text-lg f-p-t -mt-8 absolute text-gray-dark"
                                >
                                  {depression / 10}
                                </output>
                              </div>
                              <div className="flex justify-between mt-5 px-4">
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
                        <div className="flex justify-center mt-8">
                          <div className="w-full">
                            <h2 className="mb-10 font-semibold f-p-t text-theme-blue-color">
                              Energy
                            </h2>
                            <div className="w-full">
                              <div className="slidecontainer mt-5 w-full  relative">
                                <input
                                  type="range"
                                  disabled={disCard}
                                  min="0"
                                  max="100"
                                  step="10"
                                  className="slider rounded-lg"
                                  id="EnergyRange"
                                  value={energy}
                                  onChange={(event) => {
                                    overAllEnergy(event.target.value);
                                  }}
                                />
                                <output
                                  id="EnergySlide"
                                  className="font-bold text-lg f-p-t -mt-8 absolute text-gray-dark"
                                >
                                  {energy / 10}
                                </output>
                              </div>
                              <div className="flex justify-between mt-5 px-4">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
          {/* </MainArea> */}
        </div>
      </div>
      {/* <style>
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
      </style> */}
    </>
  );
};
export default Index;
