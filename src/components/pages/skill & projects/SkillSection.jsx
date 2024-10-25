import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillsInfo } from "../../information/informaiotn";

const style = {
   container: "m-0 p-5 bg-white w-full min-h-screen flex flex-col items-center",
   title: "m-2 font-bold lg:text-[2.5rem] text-[2rem] font-Acme text-shadow-xl animate-pulse",
   skillSection:
      "w-full m-4 flex flex-col text-gray-800 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg border-2 border-black/35 p-4",
   skillCategory: "flex flex-col w-full mb-4",
   skillName: "text-lg font-semibold text-slate-300 mb-2 ",
   skillList: "flex flex-wrap justify-start",
   skillItem:
      "flex items-center m-2 p-2 bg-gray-900 rounded-md shadow-md border border-black/30 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-gray-800 -gray-800  w-32 sm:w-34 md:w-36 lg:w-40 xl:w-44",
   skillIcon: "w-8 h-8 mr-2 filter grayscale transition-all duration-300 hover:filter-none",
   skillText: "text-slate-200 text-xs font-medium",
};

export default function Skills() {
   useEffect(() => {
      AOS.init({
         duration: 1000, // Animation duration in milliseconds
      });
   }, []);

   return (
      <div id="skills" className={style.container}>
         <div className="flex justify-start w-full">
            <span data-aos="fade-right" className={style.title}>
               <span className="text-slate-700">Skills</span>
            </span>
         </div>
         <div className={style.skillSection}>
            {skillsInfo.map((category, index) => (
               <div key={index} className={style.skillCategory}>
                  <h2 data-aos="fade-up" className={style.skillName}>
                     {category.skillname}
                  </h2>
                  <div className={style.skillList}>
                     {category.skillitem.map((skill) => (
                        <div
                           key={skill.id}
                           className={style.skillItem}
                           data-aos="zoom-in" // AOS animation for skill items
                        >
                           <img src={skill.img} alt={skill.name} className={style.skillIcon} />
                           <span className={style.skillText}>{skill.name}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
