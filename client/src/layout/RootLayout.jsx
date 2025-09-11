import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='bg-[#3F89AD] w-full h-screen p-5'>
            <div className='w-[90%] h-full bg-white rounded-l-4xl rounded-r-xl mx-auto overflow-hidden flex gap-4'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
