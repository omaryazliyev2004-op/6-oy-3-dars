import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="pt-[96px]">
            <div className=" max-w-[1530px] px-[140px]">
                <div className="mb-[24px] grid w-[14px] grid-cols-2 gap-[2px]">
                    <span className="h-[6px] w-[6px] bg-[#FFA155]" />
                    <span className="h-[6px] w-[6px] bg-[#444CFC]" />
                    <span className="h-[6px] w-[6px] bg-[#FFD3AF]" />
                    <span className="h-[6px] w-[6px] bg-[#444CFC]" />
                </div>
                <div className="flex items-start justify-between gap-[80px]">
                    <div className="max-w-[420px]">

                        <h2 className="text-[48px] font-[600] leading-[58px] text-[#232536]">
                            Let`s make
                            <br />
                            something special
                        </h2>

                        <h3 className="mt-[32px] text-[24px] font-semibold leading-[36px] text-[#232536]">
                            Let&apos;s talk! 🤝
                        </h3>

                        <a
                            href="tel:02079932905"
                            className="mt-[28px] block text-[18px] leading-[28px] text-[#232536]"
                        >
                            020 7993 2905
                        </a>

                        <a
                            href="mailto:hi@finsweet.com"
                            className="mt-[4px] inline-block border-b border-[#00000014] pb-[16px] text-[18px] leading-[28px] text-[#232536]"
                        >
                            hi@finsweet.com
                        </a>

                        <p className="mt-[16px] text-[14px] leading-[24px] text-[#5D5F6D]">
                            DLF Cybercity, Bhubaneswar,
                            <br />
                            India, &52050
                        </p>
                    </div>

                    <div className="flex gap-[60px] pt-[16px]">
                        <div className="space-y-[16px]">
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Home</a>
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Service</a>
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Company</a>
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Career</a>
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">News</a>
                        </div>

                        <div className="space-y-[16px] min-w-[180px]">
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Service</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Technical support</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Testing</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Development</a>
                            <a href="#" className="block text-[14px] text-[#232536]">AWS/Azure</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Consulting</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Information Technology</a>
                        </div>

                        <div className="space-y-[16px] min-w-[140px]">
                            <a href="#" className="block text-[16px] font-semibold text-[#232536]">Resourses</a>
                            <a href="#" className="block text-[14px] text-[#232536]">About Us</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Testimonial</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Privacy Policy</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Terms of use</a>
                            <a href="#" className="block text-[14px] text-[#232536]">Blog</a>
                        </div>
                    </div>
                </div>

                <div className="mt-[54px] flex items-center justify-end">
                    <a href="#" className="flex items-center gap-[10px] text-[16px] font-medium text-[#232536]">
                        <span className="flex">
                            <span className="h-[14px] w-[14px] bg-[#FFD3AF]" />
                            <span className="h-[14px] w-[24px] bg-[#444CFC]" />
                        </span>
                        Contact Us
                        <span className="text-[20px]">→</span>
                    </a>
                </div>
            </div>

            <div className="mt-[64px] max-w-[1530px] px-[140px] bg-[#FFE6D2]">
                <div className=" flex items-center justify-between py-[28px]">
                    <div className="flex items-center gap-[32px]">
                        <h2 className="text-[32px] flex items-center font-bold text-[#232536]">{`{Finsweet`}</h2>
                        <p className="text-[16px] text-[#232536]">©2021 Finsweet</p>
                    </div>

                    <div className="flex items-center gap-[18px] text-[#232536]">
                        <a href="#" className="text-[16px]"><FaFacebookF /></a>
                        <a href="#" className="text-[16px]"><FaTwitter /></a>
                        <a href="#" className="text-[16px]"><FaInstagram /></a>
                        <a href="#" className="text-[16px]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
