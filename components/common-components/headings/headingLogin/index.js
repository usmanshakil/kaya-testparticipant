import React from "react";
const Index = ({ text , textColor }) => {
   return (
       <>
       <p className={"md:text-5xl text-2xl font-bold f-r-t leading-loose" + (textColor ? " " + textColor : " text-indigo-700 ")}>{(text ? "" + text : "Type Something")}</p>
       </>
    );
};

export default Index;