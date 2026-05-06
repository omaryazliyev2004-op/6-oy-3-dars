import React from 'react'
import { useNavigate } from 'react-router-dom'

const jobs = [
    { id: 1, title: "Full Stack Developer", location: "Bengaluru · Full Time", salary: "$10K - $18K · No equity" },
    { id: 2, title: "Testing Engineer", location: "Remote · Full Time", salary: "$80K - $10K · No equity" },
    { id: 3, title: "Hr Manager", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
    { id: 4, title: "Product Designer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
    { id: 5, title: "Wordpress Developer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
    { id: 6, title: "Jr. QA Tester", location: "California · Full Time", salary: "$14K - $23K · No equity" },
    { id: 7, title: "Sr. UX Designer", location: "California · Full Time", salary: "$14K - $23K · No equity" },
    { id: 8, title: "Social Media Manager", location: "Kolkata · Fulltime", salary: "$5K - $6K · Fresher" },
    { id: 9, title: "Golang Developer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
]

export default function Info() {
    const navigate = useNavigate()

    return (
        <section className="bg-[#ECF8F9] px-[140px] py-[96px]">
            <div className="grid grid-cols-3 gap-[32px]">
                {jobs.map(job => (
                    <div key={job.id} className="bg-white p-[32px]">
                        <h3 className="font-[600] text-[#232536]">{job.title}</h3>
                        <p className="mt-[8px] text-[#5D5F6D]">{job.location}</p>
                        <p className="text-[#5D5F6D]">{job.salary}</p>
                        <button
                            onClick={() => navigate(`/career-inner/${job.id}`)}
                            className="mt-[20px] text-[#444CFC] flex items-center gap-[8px]"
                        >
                            Apply Now →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}