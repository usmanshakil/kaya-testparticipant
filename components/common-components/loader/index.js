import React from "react";

export default function Loader({ height }) {
    return(
        <div className={"w-full flex items-center justify-center "+(height ? "" : "h-screen")} style={{height}}>
            <img src="/static/images/loader.svg" className="w-12 h-12" alt=""/>
        </div>
    )
}