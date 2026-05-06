import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="pt-[96px]">
            <div className="max-w-[1530px] px-[140px]">
                <div className="mb-[24px] grid w-[14px] grid-cols-2 gap-[2px]">
                    <span className="h-[6px] w-[6px] bg-[#FFA155]" />
                    <span className="h-[6px] w-[6px] bg-[#444CFC]" />
                    <span className="h-[6px] w-[6px] bg-[#FFD3AF]" />
                    <span className="h-[6px] w-[6px] bg-[#444CFC]" />
                </div>
                <div className="flex items-start justify-between gap-[80px]">
                    <div className="max-w-[420px]">
                        <h2 className="text-[48px] font-[600] leading-[58px] text-[#232536]">
                            Let`s make <br /> something special
                        </h2>
                        <h3 className="mt-[32px] text-[24px] font-semibold leading-[36px] text-[#232536]">
                            Let's talk!
                        </h3>
                        <a href="tel:02079932905" className="mt-[28px] block text-[18px] leading-[28px] text-[#232536]">
                            020 7993 2905
                        </a>
                        <a href="mailto:hi@finsweet.com" className="mt-[4px] inline-block border-b border-[#00000014] pb-[16px] text-[18px] leading-[28px] text-[#232536]">
                            hi@finsweet.com
                        </a>
                        <p className="mt-[16px] text-[14px] leading-[24px] text-[#5D5F6D]">
                            DLF Cybercity, Bhubaneswar, <br /> India, &52050
                        </p>
                    </div>

                    <div className="flex gap-[60px] pt-[16px]">
                        <div className="space-y-[16px]">
                            <NavLink to="/" className="block text-[16px] font-semibold text-[#232536] hover:text-[#444CFC]">Home</NavLink>
                            <NavLink to="/company" className="block text-[16px] font-semibold text-[#232536] hover:text-[#444CFC]">Company</NavLink>
                            <NavLink to="/career" className="block text-[16px] font-semibold text-[#232536] hover:text-[#444CFC]">Career</NavLink>
                            <NavLink to="/blog" className="block text-[16px] font-semibold text-[#232536] hover:text-[#444CFC]">Blog</NavLink>
                            <NavLink to="/contact" className="block text-[16px] font-semibold text-[#232536] hover:text-[#444CFC]">Contact Us</NavLink>
                        </div>

                        <div className="space-y-[16px] min-w-[180px]">
                            <p className="block text-[16px] font-semibold text-[#232536]">Service</p>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Technical support</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Testing</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Development</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">AWS/Azure</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Consulting</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Information Technology</NavLink>
                        </div>

                        <div className="space-y-[16px] min-w-[140px]">
                            <p className="block text-[16px] font-semibold text-[#232536]">Resourses</p>
                            <NavLink to="/company" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">About Us</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Testimonial</NavLink>
                            <NavLink to="/privacy-policy" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Privacy Policy</NavLink>
                            <NavLink to="/" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Terms of use</NavLink>
                            <NavLink to="/blog" className="block text-[14px] text-[#232536] hover:text-[#444CFC]">Blog</NavLink>
                        </div>
                    </div>
                </div>

                <div className="mt-[54px] flex items-center justify-end">
                    <NavLink to="/contact" className="flex items-center gap-[10px] text-[16px] font-medium text-[#232536] hover:text-[#444CFC]">
                        <span className="flex">
                            <span className="h-[14px] w-[14px] bg-[#FFD3AF]" />
                            <span className="h-[14px] w-[24px] bg-[#444CFC]" />
                        </span>
                        Contact Us
                        <span className="text-[20px]">→</span>
                    </NavLink>
                </div>
            </div>

            <div className="mt-[64px] max-w-[1530px] px-[140px] bg-[#FFE6D2]">
                <div className="flex items-center justify-between py-[28px]">
                    <div className="flex items-center gap-[32px]">
                        <h2 className="text-[32px] flex items-center font-bold text-[#232536]">{`{Finsweet`}</h2>
                        <p className="text-[16px] text-[#232536]">©2021 Finsweet</p>
                    </div>
                    <div className="flex items-center gap-[18px] text-[#232536]">
                        <a href="#" className="text-[16px] hover:text-[#444CFC]"><FaFacebookF /></a>
                        <a href="#" className="text-[16px] hover:text-[#444CFC]"><FaTwitter /></a>
                        <a href="#" className="text-[16px] hover:text-[#444CFC]"><FaInstagram /></a>
                        <a href="#" className="text-[16px] hover:text-[#444CFC]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}