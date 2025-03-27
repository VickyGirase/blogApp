import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar : FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
   <>
    <nav className=" bg-gray-800 text-white p-4 font-semibold">
      <div className="container mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl font-bold">Blog<span className="text-red-400">Code</span></h1>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="#" className="hover:underline">Articles</Link></li>
          <li><Link to="#" className="hover:underline">Tutorials</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>

      
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          ☰
        </button>
        
      </div>
      
      {toggle && (
        <ul className="md:hidden bg-gray-800 text-center p-4">
          <li><Link to="/" className="block py-2 hover:underline">Home</Link></li>
          <li><Link to="#" className="block py-2 hover:underline">Articles</Link></li>
          <li><Link to="#" className="block py-2 hover:underline">Tutorials</Link></li>
          <li><Link to="/about" className="block py-2 hover:underline">About</Link></li>
        </ul>
      )}
    </nav>
    {/* <Blogs/>
    <Footer/> */}
   </>
  );
};

export default Navbar;
