import React from "react";
const Index = ({ btnText }) => {
  return (
    <>
      <ul>
        <li className="flex bg-mobile-menu-bg menu-in-active  w-64">
          <p className="text-theme-blue-color f-p-t text-lg font-semibold leading-6 py-6 pl-12 pr-24 ">
            {btnText ? "" + btnText : "Type Something"}
          </p>
        </li>
      </ul>
    </>
  );
};

export default Index;
