import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoIosImages } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { FaNewspaper } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";
import { NavLink } from 'react-router-dom';


const navItems = [
    { to: "/", icon: <MdDashboard /> },
    { to: "banners", icon: <IoIosImages /> },
    { to: "services", icon: <GrBusinessService /> },
    { to: "channels", icon: <GrChannel /> },
    { to: "newschannels", icon: <FaNewspaper /> },
];




const Navbar = () => {


    return (
        <div className='bg-[#E6F1F8] h-full px-4 py-8 flex flex-col justify-between'>
            <div className='flex-grow flex flex-col gap-20'>
                <h1 className='logo text-center text-3xl font-bold p-4 text-white relative z-10'>PMC</h1>

                <ul className='flex flex-col items-center text-3xl'>
                    {
                        navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className={ ({isActive}) => `hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500 ${isActive ? "bg-zinc-800 text-white hover:scale-100" : ""}`}
                            >
                                {item.icon}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
            <div className='text-3xl flex justify-center'>
                <span className='p-4 bg-zinc-800 rounded-full text-white hover:bg-black hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500 cursor-pointer'>
                    <FaUser />
                </span>
            </div>
        </div>
    )
}

export default Navbar
