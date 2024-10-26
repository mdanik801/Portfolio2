import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myimg from "../../../assets/image/myimg.png";
import { contact_button } from "../../information/informaiotn";

const style = {
   page_body: "m-0 p-5 mt-[-9vh]  bg-white w-full min-h-screen flex flex-col items-center",
   page_title: "m-2 font-bold lg:text-[2.5rem] text-[2rem] font-Acme text-shadow-xl animate-pulse",
   deatil_box:
      "relative w-full m-4 flex flex-col lg:flex-row text-gray-800 rounded-lg border shadow-lg  lg:p-[10vh] p-[4vh] animate-float duration-300 overflow-hidden",
   img: "w-[40vh] h-[40vh] sm:w-[50vh] sm:h-[50vh] m-2 border-2 border-black/60 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-xl",
   info_box: "flex flex-col justify-center items-center mx-4 text-center lg:text-left",
   contact_btn: "flex flex-wrap justify-center mt-6",
   contact_icon:
      "lg:w-[6vh] w-[4vh] bg-gray-400 border-2 border-black/60 hover:bg-white duration-300 animate-pulse hover:animate-none shadow-black shadow-xl rounded-full p-1",
};

export default function Aboutme() {
   const skills = [
      {
         id: 1,
         name: "Full-Stack Development:",
         p: "Proficient in building end-to-end applications using the MERN stack (MongoDB, Express, React, Node.js).",
      },
      {
         id: 2,
         name: "Frontend Development:",
         p: "Skilled in creating responsive, user-friendly interfaces with React and Tailwind CSS.",
      },
      {
         id: 3,
         name: "Backend Development:",
         p: "Experienced in developing server-side applications with Node.js, Express, and MongoDB.",
      },
      {
         id: 4,
         name: "REST API Development:",
         p: "Adept at designing and implementing RESTful APIs for smooth frontend-backend communication.",
      },
   ];

   const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

   const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setGradientPosition({ x, y });
   };

   useEffect(() => {
      AOS.init({ duration: 1200 });
   }, []);

   return (
      <div id="aboutme" className={style.page_body}>
         <div className="flex justify-start w-full">
            <span data-aos="fade-right" className={style.page_title}>
               <span className="text-slate-700">Abo</span>ut me
            </span>
         </div>
         <div
            className={style.deatil_box}
            onMouseMove={handleMouseMove}
            style={{
               background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
                rgba(75, 85, 99, 0.8), #f5f5f5, #ffffff)`,
               transition: "background 0.3s",
            }}>
            <img src={myimg} className={style.img} alt="Profile" data-aos="zoom-in" />
            <div data-aos="zoom-in" className={style.info_box}>
               <p
                  data-aos="flip-left"
                  className="lg:text-[1.1rem] text-[0.7rem] font-Nunito text-start font-semibold lg:pt-0 ">
                  Hello! I'm Md Aulad Hossain Anik, a passionate and versatile full-stack developer
                  with a talent for crafting seamless and efficient web applications. With expertise
                  in both frontend and backend technologies, I excel at creating comprehensive
                  solutions that deliver exceptional user experiences.
                  <h1 className="mt-2">
                     Skilled in
                     <ul className="text-black/50 ">
                        {skills.map((skill) => (
                           <li key={skill.id} className="text-left">
                              {skill.name}
                              <span className="text-gray-800"> {skill.p}</span>
                           </li>
                        ))}
                     </ul>
                  </h1>
               </p>
               <div className={style.contact_btn}>
                  {contact_button.map((btn) => (
                     <a
                        key={btn.id}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-2">
                        <img className={style.contact_icon} src={btn.icon} alt={btn.name} />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
