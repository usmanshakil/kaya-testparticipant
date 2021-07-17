import React, { useState } from 'react';
import Style from './style';
import HeaderMain from '../../header';
import RequestDemo from '../../pagesComponents/modals/request-demo';
// import Link from 'next/link';
import { useUser } from "@auth0/nextjs-auth0";


const MainComponent = () => {
  const [showPopoup, setShowPopoup] = useState(false);

    const { user } = useUser();
    //     if (isLoading) return <div>Loading...</div>;
    //     if (error) return <div>{error.message}</div>;
        
  return (
    <>
      <div className="h-full">
        {/* 
        <Link>Login btn</Link>
        <br></br>
        <Link href="/api/auth/logout">Logout btn</Link> */}

         {/* {user && (
          <div>
            <h1> so here is the data ...</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )} */}
        
        <HeaderMain setShowPopoup={setShowPopoup} />
        <div className="px-2 md:px-20 w-full md:flex items-center justify-center h-full lg:pb-40">
          <div className="md:w-6/12 w-full md:text-left text-center sm:px-0 px-4">
            <p className="text-theme-gray-color text-2xl f-p-t font-medium">
              Finding Support Through Community
            </p>
            <div className="py-6">
              <h3 className="w-full f-r-t leading-tight text-theme-blue-color text-5xl font-bold">
                Experience therapy in a new way
              </h3>
            </div>
            <p className="leading-normal text-theme-gray-color text-lg f-p-t font-normal sm:text-left text-center">
              Kaya offers virtual groups therapy programs where you can find the
              support you need by connecting with offers through shared
              experiences.
            </p>
            <div className="my-6">
              <button
                onClick={() => {
                  setShowPopoup(true);
                }}
                className="focus:outline-none  rounded-lg  transition duration-150 ease-in-out hover:opacity-90 f-p-t  text-white px-5 py-4 bg-theme-blue-color border-2 border-theme-blue-color font-normal"
              >
                Request Demo
              </button>
            </div>
          </div>
          <div className="sm:w-6/10 sm:my-0 my-16 sm:px-0 px-4">
            <img
              src="/static\images\home-new-svg.svg"
              alt="Home Main SVG"
              className="w-full"
            />
          </div>
        </div>
        <Style />
      </div>
      {showPopoup && <RequestDemo setShowPopoup={setShowPopoup} />}
    </>
  );
};
export default MainComponent;



// import React from 'react';
// import Style from './style';
// import HeaderMain from '../../header';
// import Link from 'next/link';

// const MainComponent = () => {
//   return (
//     <div className="h-full">
//       <HeaderMain />
//       <div className="px-2 md:px-20 w-full md:flex items-center justify-center h-full lg:pb-40">
//         <div className="md:w-6/12 w-full md:text-left text-center sm:px-0 px-4">
//           <p className="text-theme-gray-color text-2xl f-p-t font-medium">
//             WE'RE ALL IN THIS TOGETHER
//           </p>
//           <div className="py-6">
//             <h3 className="w-full f-r-t leading-tight text-theme-blue-color text-5xl font-bold">
//               Experience therapy in a new way
//             </h3>
//           </div>
//           <p className="leading-normal text-theme-gray-color text-lg f-p-t font-normal sm:text-left text-center">
//             Find the support you need with Kaya's online professional therapy
//             groups designed to connect you with people who share similar
//             experiences.
//           </p>
//           <div className="my-6">
//             <Link href="/explore">
//               <a>
//                 <button className="focus:outline-none  rounded-lg  transition duration-150 ease-in-out hover:opacity-90 f-p-t  text-white px-5 py-4 bg-theme-blue-color border-2 border-theme-blue-color font-normal">
//                   Request Demo
//                 </button>
//               </a>
//             </Link>
//           </div>
//         </div>
//         <div className="sm:w-6/10 sm:my-0 my-16 sm:px-0 px-4">
//           <img
//             src="/static\images\home-new-svg.svg"
//             alt="Home Main SVG"
//             className="w-full"
//           />
//         </div>
//       </div>
//       <Style />
//     </div>
//   );
// };
// export default MainComponent;
