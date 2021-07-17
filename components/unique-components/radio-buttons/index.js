import React from "react"
import Style from "./style"
const Index = ({ text, onChange, value, checked }) => {

    const changeValue = (value) => {
        if(onChange){
            onChange(value);
        }
    };

    return (
       <>
       <div className="flex items-center">
            <div className="flex items-center">
                <div className="bg-white rounded-full w-3 h-3 flex flex-shrink-0 justify-center items-center relative p-px">
                    <input value={value ? value : ""} onChange={event => changeValue(event.target.value)} type="radio" name="radio" checked={checked ? checked : ""} className="checkbox appearance-none focus:outline-none border rounded-full absolute cursor-pointer w-full h-full checked:border-none" />
                    <div className="check-icon hidden bg-theme-blue-color rounded-full w-2 h-2 z-1"/>
                </div>
                <p className="pl-3 text-theme-blue-color text-base leading-6 f-p-t font-normal">{text}</p>
            </div>
            
        </div>
                <Style/>
       </>
    );
}

export default Index
