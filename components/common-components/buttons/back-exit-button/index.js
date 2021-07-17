const Index = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <button className="focus:outline-none h-10 w-48 px-6 border-2 border-blue-500 hover:border-blue-500 rounded flex  text-blue-600 items-center hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <span className="ml-1 text-blue-600 mb-1 leading-3">Add products</span>
                    </button>
                </div>
                <div>
                    <button className="focus:outline-none h-10 w-40 border-2 border-blue-500 hover:border-blue-500 rounded   text-blue-600 ">text</button>
                </div>
            </div>
        </>
    );
};
export default Index;
