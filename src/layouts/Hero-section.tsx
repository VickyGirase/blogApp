import { useNavigate } from "react-router-dom"

const HeroSection = () => {

  const navigate = useNavigate()
  return (
    <div className="h-screen w-full mt-0.5">
         <div className="w-[100%] h-screen bg-gray-800 text-white text-center py-20">
      <h1 className="text-5xl font-bold mt-[9%]">Explore the World through Words</h1>
      <p className="text-lg mt-4">Keep Updated with the latest Blogs</p>
      <button onClick={() => navigate("/blogs")} className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800">
        Explore Now
      </button>
    </div>
    </div>
  )
}

export default HeroSection