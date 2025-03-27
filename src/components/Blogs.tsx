import { FC } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Blogs: FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-row flex-wrap items-center justify-center gap-8 p-8">
        {["Blog 1", "Blog 2", "Blog 3", "Blog 4", "Blog 5", "Blog 6"].map(
          (blog, index) => (
            <div
              key={index}
              className="relative w-[90%] sm:w-[45%] md:w-[30%] h-[200px] md:h-[250px] bg-gradient-to-br from-teal-800 via-purple-800 to-indigo-800 border-2 border-gray-600 rounded-2xl overflow-hidden flex items-center justify-center text-xl font-semibold text-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{blog}</span>
            </div>
          )
        )}
      </div>
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Blogs;