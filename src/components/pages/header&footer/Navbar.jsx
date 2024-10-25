import { useEffect, useState } from "react";
import download from "../../../assets/image/download.png";
import logo from "../../../assets/image/logo.png";
import resume from "../../../assets/image/Anik Resume.pdf";

export default function Navbar() {
   const navbtn = [
      { id: 1, name: "HOME", url: "home" },
      { id: 2, name: "ABOUT ME", url: "aboutme" },
      { id: 3, name: "PROJECTS", url: "project" },
      { id: 4, name: "SKILLS", url: "skill" },
      { id: 5, name: "CERTIFICATES", url: "certificate" },
      { id: 6, name: "BLOG", url: "blog" },
      { id: 7, name: "CONTACT", url: "contact" },
   ];

   const [show, setShow] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
         setShow(false); // Hide navbar on scroll down
      } else {
         setShow(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
   }, [lastScrollY]);

   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

   return (
      <nav
         className={`z-50 fixed top-0 w-full transition-transform duration-300 bg-black/90 backdrop-blur-md ${
            show ? "translate-y-0" : "-translate-y-full"
         }`}>
         <div className="flex items-center justify-between px-4 md:px-8 h-16 lg:h-20">
            {/* Logo */}
            <img src={logo} alt="" className=" w-[6vh] h-[6vh]" />

            <ul className="hidden md:flex space-x-6">
               {navbtn.map((btn) => (
                  <li
                     key={btn.id}
                     className="text-white text-lg font-bold hover:text-slate-500 transition-colors duration-300">
                     <a href={`#${btn.url}`}>{btn.name}</a>
                  </li>
               ))}
            </ul>

            {/* Resume Button */}
            <a
               href={resume}
               download="Anik Resume.pdf"
               rel="noopener noreferrer"
               className="hidden md:flex items-center px-4 py-2 border-2 border-slate-700 rounded-full text-gray-400 hover:bg-slate-800 transition-all duration-300">
               <img className="w-6 h-6 mr-2" src={download} alt="Download Icon" />
               Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
               </svg>
            </button>
         </div>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
            <ul className="md:hidden flex flex-col items-center space-y-4 bg-black text-white p-4">
               {navbtn.map((btn) => (
                  <li
                     key={btn.id}
                     className="text-lg font-bold hover:text-slate-500 transition-colors duration-300">
                     <a href={`#${btn.url}`} onClick={() => setIsMobileMenuOpen(false)}>
                        {btn.name}
                     </a>
                  </li>
               ))}
               <a
                  href={resume}
                  download="Anik Resume.pdf"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border-2 border-slate-700 rounded-full text-gray-400 hover:bg-slate-800 transition-all duration-300">
                  <img className="w-6 h-6 mr-2" src={download} alt="Download Icon" />
                  Resume
               </a>
            </ul>
         )}
      </nav>
   );
}
