import { useState } from "react";
import { Storage } from "aws-amplify";
import Loader from "../../common-components/loader";
import ImageRound from "../../common-components/image-round";
import SimpleButton from "../../common-components/simple-button";
import { s3ImagePrefix } from "../../../config";

const PhotoUploader = ({ setBusy, inline, setProfileImg, profileImg, disabled }) => {
    const [loading, setLoading] = useState(false);
    const PhotoUplaoderHandler = (e) => {
        setBusy && setBusy(true);
        let file = e.target.files[0];
        if (file) {
            setLoading(true);
            Storage.put(file.name, file, {
                level: "public",
                cacheControl: "max-age=2592000, public",
                contentType: file.type,
            }).then((res) => {
                setBusy(false);
                setLoading(false);
                setProfileImg(s3ImagePrefix + res.key);
            });
        }
    };
    return (
        <div>
            {loading ? (
                <div className="h-24 w-24 rounded-full bg-wave-violet relative cursor-pointer flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                <div className={inline ? "flex items-center" : "flex flex-col items-center"}>
                    <div className="w-24 h-24 relative rounded-full border-4 border-theme-blue-color z-20">
                        <ImageRound ImgUrl={profileImg} />
                    </div>
                    <div className={inline ? "ml-6" : "pt-5"}>
                        <div className="relative my-4">
                            <SimpleButton textColor="text-theme-blue-color " bgColor={(disabled ? "opacity-50 cursor-default" : "cursor-pointer") + " bg-mobile-menu-bg"} borderClasses=" rounded-lg " btnText={"Upload Photo"} isRequired fontWeight=" font-normal " width="  " />
                            <input disabled={disabled} onChange={(e) => PhotoUplaoderHandler(e)} type="file" name="myImage" accept="image/*" className={"absolute inset-0 opacity-0 " + (disabled ? "cursor-default" : "cursor-pointer")} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default PhotoUploader;
