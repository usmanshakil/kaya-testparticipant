import React, { useEffect } from "react";
import { loadIntercom } from "intercom-next";


function IntercomWidget({data}) {
    useEffect(() => {
        loadIntercom({
            appId: "vvwwspdr",
            email: data.email,
            name: data.fullName,
            ssr: false,
            initWindow: true,
            delay: 0,
        });
    }, []);

    return(
        <div/>
    )
}

export default IntercomWidget;