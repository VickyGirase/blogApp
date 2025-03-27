import { FC } from "react"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

const Blogs : FC = () => {

  return (
    <>
    <Navbar/>
    <div className="h-screen w-[100%] flex flex-row flex-wrap items-center justify-center gap-7">
        <div className="mt-2 w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 1
        </div>
        <div className="w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold" >
            Blog 2
        </div>
        <div className=" w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 3
        </div>
      
        <div className=" w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 4
        </div>
        <div className=" w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 5
        </div>
        <div className=" w-[45%] h-[30%] md:w-[30%] md:h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 6
        </div>
  </div>
  <Footer/>
    </>
  )
}

export default Blogs