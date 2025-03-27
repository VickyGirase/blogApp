import { FC } from "react"
import HeroSection from "./Hero-section"
import Navbar from "./Navbar"


const Home : FC = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Home