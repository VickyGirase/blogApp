import { FC } from "react"
import HeroSection from "../layouts/Hero-section"
import Navbar from "../layouts/Navbar"


const Home : FC = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Home