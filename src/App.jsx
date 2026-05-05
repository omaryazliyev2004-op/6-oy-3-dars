import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './companents/Header/header'
import Footer from './companents/Footer/footer'
import Main from './companents/Main/Main'
import Company from './companents/Company-Page/Company'
import TeamTemplate from "./companents/Team-Template/TeamTemplate";
import Career from './companents/Career-Page/Career'
import Inner from './companents/Inner/Inner'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/team-template" element={<TeamTemplate />} />
        <Route path="/career-inner" element={<Inner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}