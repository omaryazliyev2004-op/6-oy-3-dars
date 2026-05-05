import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
    const linkClass = ({ isActive }) =>
        `font-medium leading-[24px] text-white transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
        }`

    return (
        <div className='bg-[#232536]'>
            <header className='max-w-[1536px] mx-auto bg-[#232536] px-[50px] xc:px-[140px] h-[80px] flex items-center justify-between'>

                <NavLink to="/">
                    <img src="/img/Logo.svg" alt="Logo" />
                </NavLink>

                <div className='hidden gap-[32px] aq:flex items-center'>
                    <NavLink className={linkClass} to="/">Home</NavLink>
                    <NavLink className={linkClass} to="/company">Company</NavLink>
                    <NavLink className={linkClass} to="/career">Career</NavLink>
                    <NavLink className={linkClass} to="/blog">Blog</NavLink>
                    <NavLink className={linkClass} to="/contact">Contact us</NavLink>
                    <NavLink
                        to="/clone"
                        className="font-medium leading-[24px] text-[#FFD3AF] flex items-center gap-[10px] hover:opacity-80 transition-opacity"
                    >
                        Clone project
                        <i className="fa-solid fa-arrow-right text-white"></i>
                    </NavLink>
                </div>

                <div className='aq:hidden'>
                    <i className="fa-solid fa-bars text-[24px] text-white"></i>
                </div>

            </header>
        </div>
    )
}