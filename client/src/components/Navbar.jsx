import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoIosImages } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { FaNewspaper } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";

const Navbar = () => {
    return (
        <div className='bg-[#E6F1F8] h-full px-4 py-8 flex flex-col justify-between'>
            <div className='flex-grow flex flex-col gap-20'>
                <h1 className='logo text-center text-3xl font-bold p-4 text-white relative z-10'>PMC</h1>

                <div className='flex flex-col items-center text-3xl'>
                    <a href='#' className='hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500'>
                        <MdDashboard />
                    </a>
                    <a href="#" className='hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500'>
                        <IoIosImages />
                    </a>
                    <a href="#" className='hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500'>
                        <GrBusinessService />
                    </a>
                    <a href="#" className='hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500'>
                        <GrChannel />
                    </a>
                    <a href="#" className='hover:bg-zinc-800 rounded-full p-4 hover:text-white hover:scale-90 hover:scale-3d transition-all duration-500'>
                        <FaNewspaper />
                    </a>
                </div>
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
