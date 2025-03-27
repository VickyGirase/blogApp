import { FC } from "react";

const About: FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="min-h-screen py-16 px-8 flex flex-col items-center justify-center text-center text-white">
        <h2 className="mt-[10%] text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text animate-fadeIn">
          About Us
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed opacity-0 animate-slideIn" style={{ animationDelay: "0.2s" }}>
          We are passionate writers sharing knowledge on Web development, App development, AI, and more.
        </p>
        <div className="mt-8 bg-gradient-to-br from-teal-800 via-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg max-w-3xl opacity-0 animate-slideIn" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-100 text-base md:text-lg">
            Our mission is to inspire and educate through engaging content, crafted with expertise and creativity.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
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
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;