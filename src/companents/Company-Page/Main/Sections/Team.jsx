import { useState } from "react"
import { useNavigate } from "react-router-dom"

const teamData = [
    { id: 1, name: "Javena Melo", lavozim: "Support Assist", img: "/img/adam1.png" },
    { id: 2, name: "John Smith", lavozim: "Developer", img: "/img/adam2.png" },
    { id: 3, name: "Alex Brown", lavozim: "Designer", img: "/img/adam3.png" },
    { id: 4, name: "Sara Jones", lavozim: "UI/UX Designer", img: "/img/adam4.png" },
    { id: 5, name: "Mike Ross", lavozim: "Marketing", img: "/img/adam5.png" },
    { id: 6, name: "Anna White", lavozim: "Developer", img: "/img/adam6.png" },
    { id: 7, name: "Tom Black", lavozim: "SEO Specialist", img: "/img/adam7.png" },
    { id: 8, name: "Lisa Green", lavozim: "Content Writer", img: "/img/adam8.png" },
]

export default function Team() {
    const [info, setInfo] = useState(null)
    const navigate = useNavigate()

    const handleSelect = (member) => {
        setInfo(member)
        navigate(`/team/${member.id}`, { state: { info: member } })
    }

    return (
        <section className="mx-[20px] px-[20px] sm:mx-[50px] xc:mx-[100px] py-[72px] sm:px-[50px] lg:py-[98px] xc:px-[140px]">
            <span className="font-[500] text-[14px] text-[#000000]">MEET OUR TEAM</span>
            <h2 className="mt-[16px] max-w-[610px] text-[30px] font-[600] leading-[42px] text-[#232536] sm:text-[36px] sm:leading-[54px]">
                Teamwork is the only way we work
            </h2>
            <p className="mt-[24px] max-w-[500px] font-[400] leading-[24px] text-[#232536] opacity-[60%]">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
            </p>

            <div className="mt-[48px] grid grid-cols-1 gap-[4px] sm:grid-cols-2 lg:grid-cols-4">
                {teamData.map((member) => (
                    <button
                        type="button"
                        key={member.id}
                        className={`group relative cursor-pointer overflow-hidden text-left outline-none transition ${info?.id === member.id ? "ring-4 ring-[#FFA155]" : ""}`}
                        onClick={() => handleSelect(member)}
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-full"
                        />

                        <div className="absolute inset-0 bg-[#232536] opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>

                        <div className="absolute bottom-0 left-0 p-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="text-[18px] font-[600] text-white">
                                {member.name}
                            </p>
                            <p className="text-[14px] text-white">
                                {member.lavozim}
                            </p>
                            <div className="mt-[12px] flex gap-[12px] text-white">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

        </section>
    )
}
