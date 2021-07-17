import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";


const Index = ({signOut}) => {
   

  // const { logout } = useAuth0();

 

    return (
      <>
        <div>
          <div
            className="flex items-center pt-14 cursor-pointer"
            onClick={() => signOut()}
          >
            <p
              className="text-lg text-gray-600 mr-2 font-semibold"
              // onClick={() => logout()}
            >
              {/* <a href="/api/auth/logout">Logout</a> */}
              Logout
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-login"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#718096 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
          </div>
        </div>
      </>
    );
};
export default Index;
