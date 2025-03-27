import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

const Blogs = () => {

  return (
    <>
    <Navbar/>
    <div className="h-screen w-[100%] flex flex-row flex-wrap items-center justify-center gap-7">
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 1
        </div>
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold" >
            Blog 2
        </div>
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 3
        </div>
      
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 4
        </div>
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 5
        </div>
        <div className="w-[30%] h-[35%] bg-gray-200 border-2 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Blog 6
        </div>
  </div>
  <Footer/>
    </>
  )
}

export default Blogs