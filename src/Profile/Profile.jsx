export default function Profile({bgscreen}){
    return(
        <div className="hidden md:block">
            <div className={`flex flex-col container h-screen w-3/4 mx-auto  `}>
                <div className={`flex w-[100%] justify-center text-3xl font-bold mt-16 ${bgscreen ? 'text-[#FA812F]':'text-[#7965C1]'}`}>
                    <div>Profile</div>
                </div>
                <div className={`flex w-[100%] justify-center ${bgscreen ? 'text-white':'text-black'}`}>
                    <div className="w-[60%] justify-center text-center mt-2 text-sm">
                        Hello,I am Ridho Soru.I am freshgraduate of the Batam State Polytechnic majoring in Electrical Engineering with the Mechatronics Engineering Study Program.
                        I am very interested in programming and electricity. Currently I am developing several applications as my portfolio.
                    </div>
                </div>
                <div className="flex  w-[100%] h-[100%]">
                    <div className="w-[50%] mt-14">
                        <div className="w-[100%] h-[10%] flex mx-auto justify-center items-center ">
                             <div className={`font-bold text-xl ${bgscreen ? 'text-[#FA812F]':'text-[#7965C1]'}`}>Experience</div>
                        </div>
                        <div className="w-[100%] h-[80%] ">
                            <div className="h-[80%] w-[90%]  mx-auto mt-8 flex justify-center">
                                <div className={`w-1 h-20 rounded-xl mx-auto ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-0 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-0 left-5 -translate-y-1/2 items-center justify-center h-[40px] w-[140px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold">Batam State Polytechnic</div>
                                                <div className=" text-[8px] italic">Electrical Engineering</div>
                                                <div className=" text-[8px] ">(2020-2024)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-20 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-20 right-5 -translate-y-1/2 items-center justify-center h-[40px] w-[160px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold">PT. Philips Industries Batam</div>
                                                <div className=" text-[8px] italic">Data Analytic Engineering Intern</div>
                                                <div className=" text-[8px] ">(2023-2024)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="w-[50%] mt-14">
                        <div className="w-[100%] h-[10%] flex mx-auto justify-center items-center">
                             <div className={`font-bold text-xl ${bgscreen ? 'text-[#FA812F]':'text-[#7965C1]'}`}>Project Experience</div>
                        </div>
                        <div className="w-[100%] h-[80%] ">
                            <div className="h-[80%] w-[90%] mx-auto mt-8 flex justify-center">
                                <div className={`w-1 h-44 rounded-xl mx-auto ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-0 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-0 left-5 -translate-y-1/2 items-center justify-center h-[40px] w-[200px]  ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold text-center">Holographic LED Fan Display</div>
                                                <div className=" text-[8px] italic">Project Leader,Program division</div>
                                                <div className=" text-[8px] ">(2021)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-10 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-10 right-5 -translate-y-1/2 items-center justify-center h-[40px] w-[200px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold">Automation Selection Wire Box</div>
                                                <div className=" text-[8px] italic">Software Developer,Microcontroller Programmer</div>
                                                <div className=" text-[8px] ">(2022)</div>
                                            </div>
                                        </div>
                                    </div>
                                     <div>
                                        <div className="relative">
                                            <div className={`absolute top-20 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-20 left-5 -translate-y-1/2 items-center justify-center h-[40px] w-[200px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold text-center">Classification Product using YOLO v7 and Raspy4B</div>
                                                <div className=" text-[8px] italic">Software Developer,Microcontroller Programmer,ML</div>
                                                <div className=" text-[8px] ">(2023)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-32 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-32 right-5 -translate-y-1/2 items-center justify-center h-[40px] w-[200px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold text-center">Prediction Measurement using sklearn-decision tree</div>
                                                <div className=" text-[8px] italic">Software Developer,ML</div>
                                                <div className=" text-[8px] ">(2024)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <div className={`absolute top-44 -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}></div>
                                            <div className={`absolute flex flex-col top-44 left-5 -translate-y-1/2 items-center justify-center h-[40px] w-[200px] ${bgscreen ? 'text-white':'text-black'}`}>
                                                <div className=" text-[10px] font-bold text-center">MTC APP using PyQt6</div>
                                                <div className=" text-[8px] italic">Software Developer</div>
                                                <div className=" text-[8px] ">(2025)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
        </div>
    )
}