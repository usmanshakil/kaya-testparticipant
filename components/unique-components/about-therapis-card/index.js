const Index = () => {
    return (
        <>
            <div className="p-12">
                <div>
                    <p className="font-normal text-lg text-theme-gray-color uppercase pb-6">about therapist</p>
                </div>
                <div className="flex items-center pb-3">
                    <img src={"/static/images/Mask Group.png"} />
                    <h1 className="text-2xl font-medium p-2">Jane Smith / PhD</h1>
                </div>
                <div className="w-full flex justify-between">
                    <div className="text-base font-normal w-1/3 ">It focuses on both the negative thoughts associated with social anxiety and the resulting emotions and behaviors (or avoidances). In a Cognitive Behavioral Therapy (CBT) group for social anxiety, the goal is to learn that social situations are not as threatening as they seem. We will work together as a group to address our needs and work through our situations.</div>
                    <div className="w-1/2 h-32 border-2 rounded-md  p-6">
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <div className="flex ">
                                    <img src={"/static/images/calander.png"} />
                                    <p className="font-medium font-base leading-6 pl-4">June 1 - October 31, 2020</p>
                                </div>
                                <div className="flex mt-6">
                                    <img src={"/static/images/money1.png"} />
                                    <p className="font-medium font-base leading-6 pl-4">$65 / Session</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <img src={"/static/images/icon-clock.png"} />
                                    <p className="font-medium font-base leading-6 pl-4">Every Wednesday, 4:30pm PST</p>
                                </div>
                                <div className="flex mt-6">
                                    <img src={"/static/images/zoom.png"} />
                                    <p className="font-medium font-base leading-6 pl-4">Google Meet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
