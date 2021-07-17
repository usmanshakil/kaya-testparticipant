import React from "react";
const Index = ({ text , children , textColor , bgColor }) => {
  return (
       <>
       <button className={"flex items-center rounded-lg pr-5 cursor-pointer focus:outline-none h-10" + (textColor ? " " + textColor : " text-home-blue-color ") + (bgColor ? " " + bgColor : " bg-wave-violet ")}>
       <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left ml-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6666B3" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="15 6 9 12 15 18" />
</svg>
  <span className=" text-base leading-6  py-2 font-normal">{(text ? "" + text : "Type Something")}</span>
       </button>
       </>
    );
}

export default Index;