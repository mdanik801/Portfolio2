import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillsInfo } from "../../information/informaiotn";

const style = {
   container: "m-0  p-5 bg-white w-full min-h-screen flex flex-col items-center",
   title: "m-2 font-bold lg:text-[2.5rem] text-[2rem] font-Acme text-shadow-xl animate-pulse",
   skillSection:
      "w-full m-4 flex flex-col text-gray-800 rounded-lg border shadow-lg  p-4 overflow-hidden",
   skillCategory: "flex flex-col w-full mb-4",
   skillName: "text-lg font-semibold text-slate-900 mb-2",
   skillList: "flex flex-wrap justify-start",
   skillItem:
      "flex items-center m-2 p-2 bg-gray-900 rounded-md shadow-md border border-black/30 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-gray-800 w-32 sm:w-34 md:w-36 lg:w-40 xl:w-44",
   skillIcon: "w-8 h-8 mr-2 filter grayscale transition-all duration-300 hover:filter-none",
   skillText: "text-slate-200 text-xs font-medium",
};

export default function Skills() {
   const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

   useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
   }, []);

   const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setGradientPosition({ x, y });
   };

   return (
      <div id="skill" className={style.container}>
         <div className="flex justify-start w-full">
            <span data-aos="fade-right" className={style.title}>
               <span className="text-slate-700">Skills</span>
            </span>
         </div>
         <div
            className={style.skillSection}
            onMouseMove={handleMouseMove}
            style={{
               background: `radial-gradient(
                  circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
                  #4b5563,   /* Gray-600 */
                  #f5f5f5,   /* Off-white */
                  white
               )`,
               transition: "background 0.3s ease",
            }}>
            {skillsInfo.map((category, index) => (
               <div key={index} className={style.skillCategory}>
                  <h2 data-aos="fade-up" className={style.skillName}>
                     {category.skillname}
                  </h2>
                  <div className={style.skillList}>
                     {category.skillitem.map((skill) => (
                        <div key={skill.id} className={style.skillItem} data-aos="zoom-in">
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
