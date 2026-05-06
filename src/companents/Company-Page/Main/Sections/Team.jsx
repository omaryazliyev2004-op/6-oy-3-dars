import React from 'react'
import { useNavigate } from 'react-router-dom'

const teamData = [
    { id: 1, name: "Javena Melo", role: "Support Assist", img: "/img/adam1.png" },
    { id: 2, name: "John Smith", role: "Developer", img: "/img/adam2.png" },
    { id: 3, name: "Alex Brown", role: "Designer", img: "/img/adam3.png" },
    { id: 4, name: "Sara Jones", role: "UI/UX Designer", img: "/img/adam4.png" },
    { id: 5, name: "Mike Ross", role: "Marketing", img: "/img/adam5.png" },
    { id: 6, name: "Anna White", role: "Developer", img: "/img/adam6.png" },
    { id: 7, name: "Tom Black", role: "SEO Specialist", img: "/img/adam7.png" },
    { id: 8, name: "Lisa Green", role: "Content Writer", img: "/img/adam8.png" },
]

export default function Team() {
    const navigate = useNavigate()

    return (
        <section className='max-w-[1530px] px-[20px] py-[72px] sm:px-[50px] lg:py-[98px] xc:px-[140px]'>
            <span className='font-[500] text-[14px] text-[#000000]'>MEET OUR TEAM</span>
            <h2 className='mt-[16px] max-w-[610px] text-[30px] font-[600] leading-[42px] text-[#232536] sm:text-[36px] sm:leading-[54px]'>
                Teamwork is the only way we work
            </h2>
            <p className='mt-[24px] max-w-[500px] font-[400] leading-[24px] text-[#232536] opacity-[60%]'>
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
            </p>

            <div className='mt-[48px] grid grid-cols-1 gap-[4px] sm:grid-cols-2 lg:grid-cols-4'>
                {teamData.map((member) => (
                    <div
                        key={member.id}
                        className="relative group cursor-pointer"
                        onClick={() => navigate(`/team/${member.id}`)}
                    >
                        <img src={member.img} alt={member.name} className="h-[320px] w-full object-cover sm:h-full" />

                        <div className="absolute inset-0 bg-[#232536] opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 p-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-[600] text-[18px]   pb-[4px]">{member.name}</p>
                            <p className="text-white text-[14px] mt-[4px]">{member.role}</p>
                            <div className="flex gap-[12px] mt-[12px]">
                                <i className="fa-brands fa-twitter text-white"></i>
                                <i className="fa-brands fa-instagram text-white"></i>
                                <i className="fa-brands fa-linkedin text-white"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
