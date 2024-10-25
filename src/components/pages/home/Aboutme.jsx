import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myimg from "../../../assets/image/myimg.png";
import { contact_button } from "../../information/informaiotn";

const style = {
   page_body: "m-0 p-5 bg-white w-full min-h-screen flex flex-col items-center",
   page_title: "m-2 font-bold lg:text-[2.5rem] text-[2rem] font-Acme text-shadow-xl animate-pulse",
   img_box:
      "w-full m-4 flex flex-col lg:flex-row text-gray-800 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg border-2 border-black/35 shadow-black lg:p-[10vh] p-[4vh] animate-float",
   img: "w-[40vh] h-[40vh] sm:w-[50vh] sm:h-[50vh] m-2 border-2 border-black/60 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-xl ",
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
         p: "Proficient in building end-to-end applications using the MERN stack (MongoDB, Express, React, Node.js). My ability to integrate frontend and backend components ensures seamless, cohesive applications.",
      },
      {
         id: 2,
         name: "Frontend Development:",
         p: "Skilled in creating responsive, user-friendly interfaces with React and Tailwind CSS. I focus on delivering visually appealing and intuitive designs that enhance user engagement.",
      },
      {
         id: 3,
         name: "Backend Development:",
         p: "Experienced in developing robust server-side applications with Node.js and Express, coupled with efficient data management using MongoDB.",
      },
      {
         id: 4,
         name: "REST API Development:",
         p: "Adept at designing and implementing RESTful APIs that enable smooth communication between frontend and backend, ensuring scalable and efficient data exchange.",
      },
   ];

   useEffect(() => {
      AOS.init({
         duration: 1200,
      });
   }, []);

   return (
      <div id="aboutme" className={style.page_body}>
         <div className="flex justify-start w-full">
            <span data-aos="fade-right" className={style.page_title}>
               <span className="text-slate-700">Abo</span>ut me
            </span>
         </div>
         <div className={style.img_box}>
            <img src={myimg} className={style.img} alt="Profile" data-aos="zoom-in" />
            <div data-aos="zoom-in" className={style.info_box}>
               <p
                  data-aos="flip-left"
                  className="lg:text-[1rem] text-[0.7rem] font-Nunito text-start font-semibold lg:pt-0">
                  Hello! I'm Md Aulad Hossain Anik, a passionate and versatile full-stack developer
                  with a talent for crafting seamless and efficient web applications. With expertise
                  in both frontend and backend technologies, I excel at creating comprehensive
                  solutions that deliver exceptional user experiences.
                  <h1 className="mt-2">
                     Skilled in
                     <ul className="text-slate-200 text-shadow-xl">
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
