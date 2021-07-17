import React from "react"

const Index = ({ circle_text,circleColor,textColor,text_size,text_weight,width,height})=>{
    return(
        <>
            <div className={"btn-light-gray rounded-full justify-center items-center flex " + " " + (circleColor ? circleColor : " bg-theme-blue-color ") + (text_size ? text_size : " text-lg ") + (textColor ? textColor : " text-white ") + (text_weight ? text_weight : " font-medium ") + (width ? width : "  w-10  ") +  (height ? height : "  h-10  ") }>
                {(circle_text ? circle_text : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l5 5l10 -10" />
                    </svg>)} 
                                
            </div>
        </>
    ) 
}

export default Index