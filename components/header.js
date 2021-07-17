import React from "react";
import Button from '../components/common-components/buttons/simple-button';
import { useRouter } from 'next/router';
import Link from 'next/link';
const HeaderMain = ({ setShowPopoup }) => {
  const router = useRouter();
  return (
    <div className="sm:flex justify-between items-center pb-16 pt-6 px-12 relative">
      <Link href="/">
        <a>
          <img
            src="/static\images\logo.svg"
            alt=""
            className="sm:w-32 w-full"
          />
        </a>
      </Link>
      {router && router.pathname === '/' && (
        <div className="sm:flex items-center sm:mt-0 mt-4 space-x-2">

          <Link href="/">
            <a style={{ paddingTop: "4px" }}>
              <Button
                bgColor="bg-theme-transparent-color border-opacity-0"
                btnText="Home"
                paddingY="py-3 "
                paddingX="sm:px-8 w-full"
                textColor="text-theme-blue-color"
                fontclassName="f-p-t"
              />
            </a>
          </Link>
          <Link href="/login">
            <a style={{ paddingTop: "4px" }}>
              <Button
                bgColor="bg-theme-transparent-color border-opacity-0"
                btnText="Sign In"
                paddingY="py-3 "
                paddingX="sm:px-8 w-full"
                textColor="text-theme-blue-color"
                fontclassName="f-p-t"
              />
            </a>
          </Link>
          <div onClick={() => { setShowPopoup(true) }} className="sm:ml-8 sm:mt-0 mt-4">

            <Button
              bgColor="bg-theme-blue-color"
              btnText="Request Demo"
              paddingY="py-4"

              paddingX="sm:px-8 w-full"
              textColor="text-white"
              fontclassName="f-p-t"
              borderClasses="border-custom-btn-bg"
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMain;




// import Button from '../components/common-components/buttons/simple-button';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// const HeaderMain = () => {
//   const router = useRouter();

//   return (
//     <div className="sm:flex justify-between items-center pb-16 pt-6 px-12 relative">
//       <Link href="/">
//         <a>
//           <img
//             src="/static\images\logo.svg"
//             alt=""
//             className="sm:w-32 w-full"
//           />
//         </a>
//       </Link>
//       {router && router.pathname === '/' && (
//         <div className="sm:flex items-center sm:mt-0 mt-4">
//           <Link href="/login">
//             <a>
//               <Button
//                 bgColor="bg-theme-blue-color"
//                 btnText="Login"
//                 paddingY="py-3 "
//                 paddingX="sm:px-8 w-full"
//                 textColor="text-white"
//                 fontclassName="f-p-t"
//               />
//             </a>
//           </Link>
//           <div className="sm:ml-8 sm:mt-0 mt-4">
//             <Link href="/welcome">
//               <a>
//                 <Button
//                   bgColor="bg-custom-btn-bg"
//                   btnText="Sign Up"
//                   paddingY="py-4"
//                   paddingX="sm:px-8 w-full"
//                   textColor="text-theme-blue-color"
//                   fontclassName="f-p-t"
//                   borderClasses="border-custom-btn-bg"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderMain;
