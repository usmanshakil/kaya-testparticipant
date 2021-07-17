const Index = () => {
    return (
        <>
            <div className="px-8">
                <div className="rounded-md   relative pr-6">
                    <select aria-label="Selected tab" className=" h-10 text-sm border-2 border-btn-light-gray-300  w-40 ml-2  rounded mt-2 text-theme-gray-color p-1 appearance-none ">
                        <option className="text-xs text-theme-gray-color">Duration</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down absolute  pointer-events-none inset-0  mr-0 ml-32 mt-5 " width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9E9E9E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                <br />
                <div className="rounded-md   relative pr-6">
                    <select aria-label="Selected tab" className=" h-10 text-sm border-2 border-btn-light-gray-300  w-40 ml-2  rounded mt-2 text-theme-gray-color p-1 appearance-none ">
                        <option className="text-xs text-theme-gray-color">Duration</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down absolute  pointer-events-none inset-0  mr-0 ml-32 mt-5 " width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9E9E9E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
        </>
    );
};
export default Index;
