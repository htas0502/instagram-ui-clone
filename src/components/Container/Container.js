

function Container() {


    return (
        <div className="flex flex-1 justify-center items-center h-[1000px] bg-red-300 display">
            <div className="flex lg:w-[1025px] justify-center h-full bg-emerald-700">
                {/* Story & Content */}
                <div className="w-[630px] h-full">
                    {/* stories */}
                    <div className="w-full h-[101px] bg-sky-400 mt-[16px] mb-[24px]"></div>
                    {/* posts */}
                    <div className="flex justify-center w-full h-full bg-neutral-700">
                        {/* items container */}
                        <div className="w-[470px] h-full">
                            {/* item */}
                            <div className="w-full h-auto bg-slate-500">
                                {/* user  */}
                                <div className="w-full h-[45px] mb-3 flex justify-between bg-amber-900">
                                    {/* avatar */}
                                    <div className="w-[45px] h-[45px] mr-[12px] bg-black">
                                        <img />
                                    </div>
                                    {/* username & time */}
                                    <div className="flex flex-1">
                                        <h3 className="flex items-center">Username</h3>
                                        <p className="flex items-center"> . 10 min</p>
                                    </div>
                                    {/* option */}
                                    <div className="w-[32px]">
                                        <div className="w-[24px] h-[24px] ml-[8px]">...</div>
                                    </div>
                                </div>
                                {/* image */}
                                <div className="w-full h-[550px] bg-white">
                                    <img />
                                </div>
                                {/* reaction */}
                                <div className="w-full h-[40px] mt-1 mb-1 bg-slate-400">
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Profile & Suggested Accounts */}
                <div className="lg:flex-1 md:w-0 bg-slate-700"></div>
            </div>
        </div>
    );
}

export default Container;
