import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Form from './Form';

const Banners = () => {

    const [wantToAdd, setWantToAdd] = useState(false);

    const cards = [
        {
            src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1757573913927-0f6a58fb0f49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MghwYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
        {
            src: "https://images.unsplash.com/photo-1754475138610-ae2b985b49d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "card-image",
            icon: <FaTrashAlt />
        },
    ]

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <div
                className='p-4 bg-[#E6F1F8] w-full h-full scroll-smooth overflow-y-auto
                [&::-webkit-scrollbar]:w-4
                [&::-webkit-scrollbar-track]:bg-[#E6F1F8]
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-blue-200
                '
            >
                { wantToAdd ? (
                    <Form/>
                ) : (
                    <div className='flex flex-wrap gap-4'>
                        {
                            cards.map((item, index) => (
                                <div key={index} className="relative flex flex-col bg-blue-200 shadow-sm border border-slate-200 rounded-xl w-90">
                                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                        <img className='w-full h-full object-cover object-center' src={item.src} alt="card-image"/>
                                    </div>
                                    <div className="px-3 pb-4 pt-0 mt-2">
                                        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" type="button">
                                            {
                                                item.icon
                                            }
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
            <button 
                className='bg-slate-800 p-4 cursor-pointer hover:scale-95 transition-all duration-200 hover:bg-slate-800 rounded-full text-white absolute bottom-15 right-10 z-10 active:scale-80'
                onClick={() => setWantToAdd(!wantToAdd)} 
            >
                <IoIosAddCircleOutline className='text-4xl'/>
            </button>
        </div>
    )
}

export default Banners