import React from "react";
import { placeHolderImageClinician } from "../../../config";

const Index = ({ imgUrl, text, textColor, width, height, textSize }) => {
  return (
    <>
      <div className="flex items-center f-p-t">
        <div
          className={
            " rounded-full relative" +
            (width ? " " + width : "16") +
            (height ? " " + height : "16")
          }
        >
          <img
            className="absolute rounded-full inset-0 w-full h-full object-cover object-center"
            src={
              imgUrl
                ? imgUrl
                : placeHolderImageClinician
            }
          />
        </div>
        <h1
          className={
            " font-medium f-p-t p-2 ml-2 " +
            (textColor ? " " + textColor : "text-gray-900")
            +
            (textSize ? " " + textSize : " text-2xl ")
          }
        >
          {text ? text : "Jane Smith / PhD"}
        </h1>
      </div>
    </>
  );
};
export default Index;
