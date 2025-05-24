import { useState } from "react";
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";


export default function HomePage({bgscreen}){
    const [item, setItem] = useState(true)
    const connitems = [
                    {icon : <FaLinkedin/>, link : "https://www.linkedin.com/in/ridhosoru/"},
                    {icon : <FaGithub/>, link : "https://github.com/ridhosoru"},
                    {icon :<FaInstagram/>, link : "https://www.instagram.com/ridhosoru/"}
                     ];

    function ButtonConnb(){
        return(
            <button className={`h-[40px] w-[250px] ${bgscreen ? 'condivdark' : 'condiv' }`}>Contact Me</button>
        )
    }

    function ButtonConnA(){
        return(
            <div className="flex items-center justify-center gap-5">
                <button className={`h-[40px] w-[100px] ${bgscreen ? 'condivdark' : 'condiv' }`}
                        onClick={(e)=>{setItem(false);}}>→</button>
                <div className="flex gap-10 ">
                    {connitems.map((item,index)=>(
                        <a  
                            key ={index}
                            href={item.link} 
                            target="_blank" 
                            className={`flex h-[40px] w-[100px] items-center justify-center text-4xl rounded-2xl ${bgscreen ? 'condivdark' : 'condiv' }`}
                        >{item.icon}</a>
                    ))}
                </div>
            </div>
            
        )
    }
    return(
        <div className="hidden md:block">
            <div className="flex container h-screen w-3/4 mx-auto">
                <div className={`flex flex-col h-1/2 w-3/4  mx-auto my-auto items-center justify-center `}>
                    <div className={`text-6xl font-bold ${bgscreen ? 'text-white' : 'text-[#7965C1]' } `}>Welcome to my website</div>
                    <div className={`text-4xl mt-4 font-bold ${bgscreen ? 'text-[#FA812F]' : 'text-[#7965C1]'} `}>I'm Yohanes Ridho Soru</div>
                    <div className={`text-2xl mt-4 font-bold italic  ${bgscreen ? 'text-white' : 'text-[#7965C1]'} `}>"An ordinary man who has a passion for programming and electrical"</div>
                    <div className="flex mt-6 gap-10  text-white">
                        <div onClick={(e)=>{
                            setItem(!item);
                            console.log(item);

                        }}>
                            {!item && <ButtonConnA/>}
                            {item && <ButtonConnb/>}
                        </div>
                        <button className={`h-[40px] w-[250px] ${bgscreen ? 'condivdark' : 'condiv' }`}>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}