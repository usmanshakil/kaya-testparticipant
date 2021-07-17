import React from "react";
export default () => {
    return (
        <style>
            {`
            html, body, #__next{
                overflow-y: auto !important;
            }
            `}
        </style>
    );
};