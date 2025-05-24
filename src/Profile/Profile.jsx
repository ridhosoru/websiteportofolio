export default function Profile({bgscreen}){
    const exp = [
        {instansi:'Batam State Polytechnic',division:'Electrical Engineering', year:'(2020-2024)'},
        {instansi:'PT.Philips Industries',division:'Data Analytic Engineering', year:'(2023-2024)'}
    ];

    const proexp =[
        {name :'Holographic LED Fan Display', position:'Project Leader,Program division',year :'(2021)'},
        {name :'Automation Selection Wire Box', position:'Software Developer,Microcontroller Programmer',year :'(2022)'},
        {name :'Classification Product using YOLO v7 and Raspy4B', position:'Software Developer,Microcontroller Programmer,ML',year :'(2023)'},
        {name :'Prediction Measurement using sklearn-decision tree', position:'Software Developer,ML',year :'2024'},
        {name :'MTC APP using PyQt6', position:'Software Developer',year :'2025'},
    ];

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
                                <div className={`w-1 h-14 rounded-xl mx-auto ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}>
                                    <div>
                                        {exp.map((item,index)=>(
                                            <div    className="relative" 
                                                    key={index}
                                            >
                                                <div    className={`absolute -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}
                                                        style={{ top: `${index * 50}px`}}
                                                ></div>
                                                <div    className={`absolute flex flex-col ${index % 2 === 0  ? 'left-5' : 'right-5'}  -translate-y-1/2 items-center justify-center h-[40px] w-[140px] ${bgscreen ? 'text-white':'text-black'}`}
                                                        style={{ top: `${index * 50}px` }}
                                                >
                                                    <div className=" text-[10px] font-bold">{item.instansi}</div>
                                                    <div className=" text-[8px] italic">{item.division}</div>
                                                    <div className=" text-[8px] ">{item.year}</div>
                                                </div>
                                            </div>
                                        ))}    
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
                                <div className={`w-1 h-52 rounded-xl mx-auto ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}>
                                    <div>{
                                        proexp.map((item,index)=>(
                                            <div    className="relative"
                                                    key={index}
                                            >
                                                <div    className={`absolute -translate-x-1 w-3 h-3 rounded-full ${bgscreen ? 'bg-[#FA812F]':'bg-[#7965C1]'}`}
                                                        style={{ top: `${index * 50}px`}}
                                                ></div>
                                                <div    className={`absolute flex flex-col  ${index % 2 === 0  ? 'left-5' : 'right-5' } -translate-y-1/2 items-center justify-center h-[40px] w-[200px]  ${bgscreen ? 'text-white':'text-black'}`}
                                                        style={{ top: `${index * 50}px`}}
                                                >
                                                    <div className=" text-[10px] font-bold text-center">{item.name}</div>
                                                    <div className=" text-[8px] italic">{item.position}</div>
                                                    <div className=" text-[8px] ">{item.year}</div>
                                                </div>
                                            </div>
                                        ))
                                        }
                                        
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