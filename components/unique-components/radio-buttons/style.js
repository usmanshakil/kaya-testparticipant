import React from "react";
export default () => {
    return (
        <style>
            {`
            .checkbox:checked + .check-icon {
                display: flex;
            }
                `}
        </style>
    );
};