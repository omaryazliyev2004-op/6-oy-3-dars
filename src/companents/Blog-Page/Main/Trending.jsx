import React from 'react'
import { NavLink } from "react-router-dom";


export default function Trending() {
    return (
        <section className='mt-[72px] mx-[20px] px-[20px] sm:mx-[50px] xc:mx-[100px] pb-[72px] sm:px-[50px] lg:mt-[96px] lg:pb-[96px] xc:px-[140px]'>
            <div className='flex flex-col items-start justify-between gap-[48px] lg:flex-row'>
                <div>
                    <div className='w-[24px] h-[24px] bg-[#FFD3AF] '></div>
                    <span className='font-[500] !mt-[21px] text-[14px] space-x-[3px] text-[#000000] opacity-[87%] inline-block '>TRENDING</span>
                    <h2 className='mt-[24px] max-w-[600px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>Breaking the code How did we build our Figma plugin </h2>
                    <p className='mt-[24px] font-[400] leading-[24px] text-[#232536] opacity-[87%] max-w-[580px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                    <div className='mt-[24px] '>
                        <NavLink to={"/bloginner"}>
                            <div className=''>
                                <span className="text-[18px] font-normal text-[#444CFC] leading-none">Read More</span>
                                <span className="text-[24px] ml-[12px] text-[#444CFC] leading-none">→</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className='mt-[40px] flex flex-col items-start gap-[12px] sm:flex-row sm:items-center sm:gap-[18px]'>
                        <div className='flex items-center gap-[12px] '>
                            <img src="/img/profil.png" alt="" />
                            <p className='font-[400] text-[#232536] opacity-[87%] '>Andrew Jonson</p>
                        </div>
                        <div className='h-[18px] w-[1px] opacity-[80%] bg-[#232536] '></div>
                        <div>
                            <p className='font-[400] text-[#232536] opacity-[60%] '>Posted on 27th January 2021</p>
                        </div>
                    </div>
                    <div className='mt-[49px] flex'>
                        <img src="/img/group.png" alt="" className='w-full max-w-[600px] object-cover' />
                        <div className='hidden h-[380px] w-[10px] sm:block'>
                            <span className='h-[20%] w-[10px] inline-block bg-[#444CFC] '></span>
                            <span className='h-[50%] w-[10px] inline-block bg-[#FFD3AF] '></span>
                            <span className='h-[30%] w-[10px] inline-block bg-[#FFA155] '></span>
                        </div>
                    </div>
                </div>
                <div className='relative min-h-[620px] w-full bg-[#FFDFC6] px-[28px] py-[56px] sm:px-[48px] lg:h-[738px] lg:w-[515px] lg:pl-[72px] lg:pt-[72px]'>
                    <div className='absolute top-0 right-0 '>
                        <img src="/img/Shapes.png" alt="" />
                    </div>
                    <div>
                        <div className=' '>
                            <h3 className='max-w-[350px] font-[600] leading-[36px] text-[24px] text-[#232536] '>Great design expectations prejudice in digital products in Next Year</h3>
                            <div className='flex items-center mt-[16px]  gap-[12px] '>
                                <img src="/img/profil.png" alt="" />
                                <div>
                                    <p className='font-[400] text-[#232536] opacity-[87%]  '>Andrew Jonson</p>
                                    <p className='font-[400] text-[#232536] opacity-[60%]  '>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[48px] '>
                            <h3 className='max-w-[350px] font-[600] leading-[36px] text-[24px] text-[#232536] '>Great design expectations prejudice in digital products in Next Year</h3>
                            <div className='flex items-center mt-[16px]  gap-[12px] '>
                                <img src="/img/profil2.png" alt="" />
                                <div>
                                    <p className='font-[400] text-[#232536] opacity-[87%]  '>Mathew Jasele</p>
                                    <p className='font-[400] text-[#232536] opacity-[60%]  '>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[48px] '>
                            <h3 className='max-w-[350px] font-[600] leading-[36px] text-[24px] text-[#232536] '>Great design expectations prejudice in digital products in Next Year</h3>
                            <div className='flex items-center mt-[16px]  gap-[12px] '>
                                <img src="/img/profil3.png" alt="" />
                                <div>
                                    <p className='font-[400] text-[#232536] opacity-[87%] '>Hussen Abakas</p>
                                    <p className='font-[400] text-[#232536] opacity-[60%] '>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
