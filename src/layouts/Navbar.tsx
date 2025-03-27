import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 via-red-950 to-gray-900 text-white p-4 font-semibold shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold transform transition-all duration-300 hover:scale-110">
            Blog
            <span className="text-red-400 animate-pulse">Code</span>
          </h1>
          <ul className="hidden md:flex space-x-8">
            {[
              { to: "/", text: "Home" },
              { to: "#", text: "Articles" },
              { to: "#", text: "Tutorials" },
              { to: "/about", text: "About" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative px-2 py-1 transition-all duration-300 hover:text-red-400 group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-2xl transform transition-transform duration-300 hover:scale-110"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "✕" : "☰"}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            toggle ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="bg-red-950 text-center p-4">
            {[
              { to: "/", text: "Home" },
              { to: "#", text: "Articles" },
              { to: "#", text: "Tutorials" },
              { to: "/about", text: "About" },
            ].map((item, index) => (
              <li
                key={index}
                className="opacity-0 animate-slideIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={item.to}
                  className="block py-3 px-4 hover:bg-gray-900 hover:text-red-400 transition-colors duration-200"
                  onClick={() => setToggle(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;