import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: FC = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Explore the World through Words";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full mt-0.5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-950 to-purple-950 opacity-100">
        <div
          className="absolute inset-0 animate-spin-slow bg-[url('https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=1200&format=pjpg&exif=0&iptc=0')] bg-cover bg-center opacity-25"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-white text-center py-20">
        <h1 className="p-2 text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
          <span className="inline-block bg-gradient-to-r from-teal-400 to-white text-transparent bg-clip-text">
            {typedText.split("through")[0]}
          </span>
          {typedText.includes("through") && (
            <span className="inline-block bg-gradient-to-r from-purple-400 to-indigo-300 text-transparent bg-clip-text">
              through Words
            </span>
          )}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-lg mt-4 group">
          Keep Updated with the{" "}
          <span className="relative text-teal-400 cursor-pointer group-hover:text-teal-300 transition-colors duration-200">
            latest Blogs
          </span>
        </p>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Dive Into the Blogs
        </button>
      </div>
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;