
import Link from 'next/link'
import React , {useState , useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiFillWindows} from 'react-icons/ai'


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#fff');
    const [bgcolor, setBgcolor] = useState('transparent');


    const handl = () => { 
        setNav(!nav);
     }

     useEffect(() => {
        const changeColor= () => {  
            if(window.scrollY>=20) {
                setColor('#000');
                setBgcolor('#fff');
                 //
            }else{
                setColor('#fff');
                setBgcolor('transparent');
            }
        }
        window.addEventListener('scroll',   changeColor);
     },[])
  return (
    <div style={{ backgroundColor:`${bgcolor}` }} className='w-full fixed ease-in duration-300 top-0 left-0 z-[5]'>
        <div style={{ color:`${color} `}} className=' flex justify-between max-w-[1240px] py-1 px-4  items-center '>
            <Link href={"/"}>
                <h1 style={{ color:'${color}' }} className='text-xl font-bold'> Capture</h1>
            </Link>
            <ul style={{ backgroundColor:'${bgcolor}',color:'${color}' }} className=' sm:flex hidden'>
                
                    <li className=' p-4' ><Link href="/"> Home </Link></li>
                    <li className=' p-4' ><Link href="/"> Galary </Link></li>
                    <li className=' p-4'><Link href="/"> My Projects </Link></li>
                    <li className=' p-4'><Link href="/"> Contact </Link></li>
               
            </ul>
            {/* Mopile manue Button  */}
            <div style={{ backgroundColor:`${bgcolor}`,color:`${color}` }} onClick={handl} className=' block sm:hidden z-10 ' >
                {
                    nav ? < AiOutlineClose size={20} /> : < AiOutlineMenu size={20}   />
                }
                
            </div>
            {/* moblie menu  */}
            <div style={{ backgroundColor:`${bgcolor}`, color:`${color}` }} className={

                nav ?
                ' sm:hidden  absolute top-0 left-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300'
            :  'sm:hidden  absolute top-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black ease-in duration-300'
            }>
             <ul>
                
                <li className=" py-4 text-xl hover:text-gray-500"><Link href="/"> Home </Link></li>
                <li className=" py-4 text-xl hover:text-gray-500"><Link href="/"> Galary </Link></li>
                <li className=" py-4 text-xl hover:text-gray-500"><Link href="/"> My Projects </Link></li>
                <li className=" py-4 text-xl hover:text-gray-500"><Link href="/"> Contact </Link></li>
           
             </ul>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar