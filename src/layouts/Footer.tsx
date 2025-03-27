import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900  text-white justify-center items-center p-6 mt-1">
      <div className="mx-auto text-center flex justify-center items-center gap-80">
        <p className="text-lg">&copy; {new Date().getFullYear()} BlogCode. All rights reserved.</p>
        <div className="flex space-x-6 ">
          <Link to="#" className="hover:underline">Privacy Policy</Link>
          <Link to="#" className="hover:underline">Terms of Service</Link>
          <Link to="#" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
