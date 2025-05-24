import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaMoon,FaRegMoon } from "react-icons/fa";

export default function NavbarPage({bgscreen, setBgscreen }){
    const navItems =[
        {classname:'Home', route: '#Home'},
        {classname:'Profile', route: '#Profile'},
        {classname:'Skills', route: '#Skills'},
        {classname:'Project', route: '#Project'}
    ];
    const[selected,setSelected] = useState('Home');
    const printText = `print("${selected}")`
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScrolled = ()=>{
            const scrollPos = window.scrollY;
            navItems.forEach((item)=>{
                const getId = document.getElementById(item.classname);
                if (getId) {
                    const getTop = getId.offsetTop;
                    const getHigh = getId.offsetHeight;

                    if(scrollPos >= getTop-100 && scrollPos < getTop + getHigh-100){
                        setSelected(item.classname)
                    }
                
                }; 
            });
        }
        window.addEventListener('scroll',handleScrolled);
        return ()=>window.removeEventListener("scroll", handleScrolled);
    })
    
    function TypeAn(){
        return(
            <TypeAnimation
                key={printText} 
                sequence={[
                    printText,
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
    />
        )
    }
    return(
        <div className="hidden md:block">
            <div className={`flex fixed left-[12.5%] top-2 container w-3/4 h-12 items-center 
                            justify-between ${bgscreen ? 'bg-black outline outline-2 outline-[#FA812F]' :'bg-[#7965C1]' }  rounded-2xl text-white shadow-2xl`}> 
                <div className="mx-4 font-bold text-white w-[50px]">{TypeAn()}</div>
                <div className="flex gap-10  mr-5 items-center justify-center">
                    {navItems.map((item,index)=>(
                        <a  key={index} 
                            href={item.route} 
                            className={`${item.classname} ${item.classname === selected  ? 'navOnclick': 'nav' } w-10 h-6 select-none`}
                            onClick={(e)=>{
                                // e.preventDefault();
                                setSelected(item.classname);
                            }}
                        >{item.classname}</a>
                    ))} 
                </div>
                <div className="mx-4">
                    <button 
                        className="text-[25px]"
                        onClick={()=>setBgscreen(!bgscreen)}
                    >
                    {!bgscreen &&<FaRegMoon/>}
                    {bgscreen && <FaMoon className="text-[#FA812F]"/>}

                    </button>
                </div>
            </div>
        </div>
    )
}