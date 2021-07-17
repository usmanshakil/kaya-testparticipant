import React from "react";
import AvatarWithImage from "../../common-components/avatar/avatar-with-picture";
import { Consumer } from "../../../store";

const Index = ({ participant }) => {
  return participant ? (
            <div className="flex  bg-custom-btn-bg rounded-l-md py-4 px-12  border-r-4 border-theme-blue-color justify-between  items-center shadow-md">
                <p className={" f-p-t text-base font-medium leading-6 text-theme-blue-color "}>
                    {participant.firstName} {participant.lastName}
                </p>
                <div className="flex-shrink-0 flex items-center mr-12 w-12 h-12 relative ">
                    <div className="pl-6">
                        <AvatarWithImage
                            BorderRadius="rounded-full"
                            ImgBorderRadius="rounded-full"
                            height="h-12"
                            width="w-12"
                            imgUrl={participant.featuredImage ? participant.featuredImage : "https://i.ibb.co/RDJVY2T/Mask-Group-4.png"}
                        />
                    </div>
                </div>
          </div>
  ) : (
      <div className="flex bg-custom-btn-bg rounded-l-md py-4 px-12  border-r-4 border-theme-blue-color justify-between  items-center shadow-md">
          <div className="h-4 w-20 bg-gray-400 rounded animate-pulse" />
          <div className="flex-shrink-0 flex items-center mr-12 w-12 h-12 relative ">
              <div className="pl-6">
                  <AvatarWithImage
                      BorderRadius="rounded-full"
                      ImgBorderRadius="rounded-full"
                      height="h-12"
                      width="w-12"
                      imgUrl="https://i.ibb.co/RDJVY2T/Mask-Group-4.png"
                  />
              </div>
          </div>
      </div>
  );
};

const Container = () => {
    return (
        <Consumer>
            {({ participant }) => {
                return <Index participant={participant}/>;
            }}
        </Consumer>
    )
}

export default Container;
