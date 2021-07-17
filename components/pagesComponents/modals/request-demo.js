import React
, { useEffect, useState }
  from "react";
// import TextSmall from "../../common-components/text/small";
// import SimpleButton from "../../unique-components/simple-button";
import OutsideClick from "react-outside-click-handler";
// import csc from 'country-state-city'; 
const Index = ({ setShowPopoup }) => {
  const [iFramWidth, setIFramWidth] = useState(600);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [jobTitle, setJobTitle] = useState('');
  // const [states] = useState(csc.getStatesOfCountry('231'));
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState(null);
  // const [company, setCompany] = useState('');
  // const [employees, setEmployees] = useState('');
  // const [state, setState] = useState(''); 
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const validateObj = {
  //     firstName,
  //     lastName,
  //     jobTitle,
  //     company,
  //     state,
  //     phone,
  //     email,
  //     employees
  //   }
  //   console.log(JSON.stringify(validateObj))
  //   setShowPopoup(false)
  // };
  // useEffect(() => {

  // }, []);

  function reportWindowSize() {
    var screenResoultion = window.screen.width
    if (screenResoultion <= 768 && screenResoultion > 425) {
      setIFramWidth(280)
    }
    else if (screenResoultion <= 425) {
      setIFramWidth(250)
    }
    else {
      setIFramWidth(600)
    }
  }

  window.onresize = reportWindowSize;
  return (
    <>
      <div className={"bg-modal-overlay inset-0 fixed"}>
        <div className="flex justify-center items-center w-full h-screen">
          <section className="sm:w-5/12 w-full flex justify-center items-center sm:px-0 px-4 sm:py-0 py-8">
            <OutsideClick onOutsideClick={() => setShowPopoup(false)}>
              <div className="bg-white   rounded-lg  mt-8">
                <div className="w-full">
                  <div className="flex  justify-end pt-6 pr-6 cursor-pointer" onClick={() => setShowPopoup(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8C8C8C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>

                <div className=" sm:px-12 px-4 pb-8 font-normal leading-6">
                  {/* <div>
                    <h1 style={{ fontSize: "28px", textAlign: "center" }}>Welcome to Kaya!</h1>
                  </div> */}
                  {/* <div className="pt-6">
                    <TextSmall text="Interested in learning more about Kaya and how we can support your employees through group care?" textColor="text-theme-black-color" fontWeight="font-normal" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                  </div>
                  <div className="pt-6">
                    <TextSmall text="Fill out the form below and we'll reach out to schedule a demo and answer any questions you have. Thanks!" textColor="text-theme-black-color" fontWeight="font-normal" lineHeight="leading-6" fontclassName="f-p-t" textSize="text-base" alignment="text-left" />
                  </div> */}
                  {/* <div
                    className="bg-white   w-full rounded-lg"
                  > */}
                  <iframe frameborder="0" height="580px" width={iFramWidth} src="https://cdn.forms-content.sg-form.com/3308fcb8-cf8c-11eb-b560-ae191194e8df" />
                  {/* <form className="" onSubmit={(event) => onSubmit(event)}>
                      <div className="lg:p-10 h-full flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 w-full">
                          <div className="mt-3">
                            <div className="text-gray-800">
                              <input
                                required
                                type="text"
                                id="username"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="px-4 py-2 w-full placeholder-gray-500   mt-2 focus:outline-none hover:border-home-blue-color border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-gray-800">
                              <input
                                required
                                type="text"
                                id="username"
                                placeholder="Job Title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                className="px-4 py-2 w-full placeholder-gray-500   mt-2 focus:outline-none hover:border-home-blue-color  border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-gray-800">
                              <input
                                required
                                type="number"
                                id="username"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="px-4 py-2 w-full  placeholder-gray-500  mt-2 focus:outline-none hover:border-home-blue-color  border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="rounded-md relative h cursor-pointer">
                              <select
                                aria-label="Selected tab"
                                required
                                onChange={(event) => setEmployees(event.target.value)}
                                className="focus:outline-none placeholder-gray-500   w-full px-5 py-2  mt-2 text-sm border-b-2 border-fuchsia-600  rounded text-home-heading text-base appearance-none  h-12  border-input-border hover:border-home-blue-color bg-white"
                              >Employees
                                 <option className=" text-gray-500 text-opacity-5  " value="" selected disabled hidden >Employees  </option>
                                <option value="1-20">1-20 Employees</option>
                                <option value="21-200">21-200 Employees</option>
                                <option value="201-10,000">201-10,000 Employees</option>
                                <option value="10,000">10,000+ Employees</option>
                              </select>
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
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-1/2 mt-2 lg:mt-0 lg:ml-16">
                          <div className="mt-3 ">
                            <div className="text-gray-800">
                              <input
                                required
                                type="text"
                                min="0"
                                id="username"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}

                                className="px-4 py-2 w-full  placeholder-gray-500  mt-2 focus:outline-none hover:border-home-blue-color  border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>
                          <div className="mt-3 ">
                            <div className="text-gray-800">
                              <input
                                required
                                type="email"
                                min="0"
                                id="Email"
                                placeholder="Email  "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                                className="px-4 py-2 w-full placeholder-gray-500   mt-2 focus:outline-none hover:border-home-blue-color  border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>
                          <div className="mt-3 ">
                            <div className="text-gray-800">
                              <input
                                required
                                type="text"
                                min="0"
                                id="username"
                                placeholder="Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}

                                className="px-4 py-2 w-full placeholder-gray-500   mt-2 focus:outline-none hover:border-home-blue-color  border-b-2 border-fuchsia-600 text-gray-800 placeholder-black h-12 border-input-border"
                              />
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="rounded-md relative h cursor-pointer">
                              <select
                                required
                                aria-label="Selected tab"
                                onChange={(event) => setState(event.target.value)}
                                className="focus:outline-none  placeholder-gray-500  w-full px-5 py-2  mt-2 text-sm border-b-2 border-fuchsia-600  rounded text-home-heading text-base appearance-none  h-12  border-input-border hover:border-home-blue-color bg-white"
                                id="state"
                              >
                                <option className="text-xs text-theme-gray-color bg-white outline-none" />
                                <option className=" text-gray-500  " value="" selected disabled hidden >States  </option>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler placeholder-gray-500 icon-tabler-chevron-down absolute pointer-events-none inset-0 m-auto mr-4 mb-3"
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
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-between">
                        <SimpleButton textColor="text-theme-white-color" bgColor="bg-theme-blue-color " borderClasses="" btnText={"Submit"} width="sm:w-40 w-full" fontWeight="font-normal" />
                      </div>
                    </form> */}


                </div>
                {/* </div> */}


              </div>
            </OutsideClick>
          </section>
        </div>
      </div>
    </>
  );
};
export default Index;
