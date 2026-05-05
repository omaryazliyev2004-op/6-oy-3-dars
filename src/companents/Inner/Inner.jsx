import { useParams } from "react-router-dom"

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

export default function Inner() {
  const { id } = useParams()

  const job = jobs.find(j => j.id === Number(id))

  if (!job) return <h1>Topilmadi</h1>

  return (
    <div className="pt-[120px] px-[140px]">
      <h1 className="text-[40px] font-[600]">{job.title}</h1>
      <p className="mt-[16px]">{job.location}</p>
      <p>{job.salary}</p>

      <p className="mt-[24px]">
        Bu yerda full description yoziladi...
      </p>
    </div>
  )
}