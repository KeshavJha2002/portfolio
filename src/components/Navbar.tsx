/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// TODO
// import { logo } from "../assets/";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop: number = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sm:px-4 px-6 w-full flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-[50%]' /> */}
          <p className='sm:block text-white text-[26px] font-bold cursor-pointer flex '>
            jha.keshav
          </p>
        </Link>

        <div className='sm:flex gap-5'>
          <div className="text-[#AAA6C3] hover:text-white text-[20px] font-medium cursor-pointer underline">
            {/* <a href="#" target="_blank" disabled>Resume</a> */}
            <div>Resume</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;