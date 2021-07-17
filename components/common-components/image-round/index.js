import React from "react";
import { placeHolderImageClinician } from "../../../config";

const Index = ({ ImgUrl }) => {
     return (
       <div className="h-full w-full flex items-center justify-between inset-0 relative  rounded-full">
                <img className=" absolute h-full w-full object-cover rounded-full " src={ImgUrl ? "" + ImgUrl : placeHolderImageClinician} />
       </div>
    );
}

export default Index;