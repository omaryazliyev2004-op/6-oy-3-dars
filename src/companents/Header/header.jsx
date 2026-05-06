import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        `relative h-[80px] flex items-center font-medium leading-[24px] text-white transition-opacity
         before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-[#FFA155]
         ${isActive ? 'opacity-100 before:block' : 'opacity-60 hover:opacity-100 before:hidden'}`

    
    const closeMenu = () => setIsOpen(false)

    return (
        <div className='relative z-50 bg-[#232536]'>
            <header className='mx-[20px] sm:mx-[50px] xc:mx-[100px] bg-[#232536] px-[20px] sm:px-[50px] xc:px-[140px] h-[80px] flex items-center justify-between'>

                <NavLink to="/">
                    <img src="/img/Logo.svg" alt="Logo" className='max-w-[132px]' />
                </NavLink>

                <div className='hidden gap-[32px] aq:flex items-center'>
                    <NavLink className={linkClass} to="/">Home</NavLink>
                    <NavLink className={linkClass} to="/company">Company</NavLink>
                    <NavLink className={linkClass} to="/career">Career</NavLink>
                    <NavLink className={linkClass} to="/blog">Blog</NavLink>
                    <NavLink className={linkClass} to="/contact">Contact us</NavLink>
                    <NavLink
                        to="/"
                        className="font-medium leading-[24px] text-[#FFD3AF] flex items-center gap-[10px] hover:opacity-80 transition-opacity"
                    >
                        Clone project
                        <i className="fa-solid fa-arrow-right text-white"></i>
                    </NavLink>
                </div>

                <button
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    className='aq:hidden flex h-[44px] w-[44px] items-center justify-center  text-white transition hover:bg-white/10'
                    
                    aria-expanded={isOpen}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-[22px]`}></i>
                </button>
            </header>

            <div className={`aq:hidden absolute left-0 top-[80px] w-full bg-[#232536] px-[20px] pb-[22px] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'}`}>
                <nav className='flex max-w-[520px] flex-col gap-[10px] border-t border-white/10 pt-[16px]'>
                    <NavLink onClick={closeMenu} className=' text-white ' to="/">Home</NavLink>
                    <NavLink onClick={closeMenu} className=' text-white' to="/company">Company</NavLink>
                    <NavLink onClick={closeMenu} className=' text-white' to="/career">Career</NavLink>
                    <NavLink onClick={closeMenu} className=' text-white' to="/blog">Blog</NavLink>
                    <NavLink onClick={closeMenu} className=' text-white' to="/contact">Contact us</NavLink>

                </nav>
            </div>
        </div>
    )
}
