import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { projects } from "../../information/informaiotn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
   page_body: "bg-white py-10 ",
   title: "m-2 font-bold lg:text-[2.5rem] text-[2rem] font-Acme text-shadow-xl animate-pulse",
   page_title: "text-3xl font-bold text-center mb-8",
   img_box: "w-full h-48 object-cover rounded-md mb-4",
   info_box:
      "bg-black/20 flex flex-col justify-between min-h-[90vh] h-auto p-5 rounded-md shadow-md transition-transform transform hover:scale-105 duration-500",
   contact_btn:
      "mx-2 text-center p-2 bg-black text-white lg:text-[0.9rem] text-[0.6rem] font-Acme font-semibold text-shadow-lg rounded-lg hover:bg-gray-800 hover:text-white duration-300",
};

export default function ProjectSection() {
   useEffect(() => {
      AOS.init(); // Initialize AOS
   }, []);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <section id="project" className={style.page_body}>
         <div className="container mx-auto px-4">
            <div className="flex justify-start w-full">
               <span data-aos="fade-right" className={style.title}>
                  Pro
                  <span className="text-slate-700">ject</span>
               </span>
            </div>
            <Slider
               {...settings}
               className=" border-2 border-black/35 rounded-lg shadow-inner  shadow-black overflow-hidden">
               {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
               ))}
            </Slider>
         </div>
      </section>
   );
}

const ProjectCard = ({ project }) => {
   const [showFullDescription, setShowFullDescription] = useState(false);

   const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
   };

   return (
      <div className={style.info_box} data-aos="fade-up">
         {" "}
         <div className="flex-grow">
            <img src={project.content} alt={project.title} className={style.img_box} />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">
               {showFullDescription
                  ? project.description
                  : project.description.substring(0, 100) + "..."}
            </p>
            <button onClick={toggleDescription} className="text-blue-500 hover:underline mb-4">
               {showFullDescription ? "See Less" : "See More"}
            </button>
            <h4 className="font-medium mb-2">Technologies Used:</h4>
            <ul className="pl-5 mb-4 flex flex-wrap">
               {project.technology.map((tech, techIndex) => (
                  <li
                     key={techIndex}
                     className="text-gray-400 border w-auto m-0.5 p-1 px-2 bg-gray-900 rounded-lg">
                     {tech}
                  </li>
               ))}
            </ul>
         </div>
         <div className="flex flex-col md:flex-row justify-center my-4 p-2">
            {project.sourcecode.map((link) => (
               <div key={link.livelink}>
                  {link.livelink && (
                     <a
                        className={style.contact_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.livelink}>
                        LIVE SIDE
                     </a>
                  )}
                  {link.frontend && (
                     <a
                        className={style.contact_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.frontend}>
                        CLIENT SIDE
                     </a>
                  )}
                  {link.backend && (
                     <a
                        className={style.contact_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.backend}>
                        SERVER SIDE
                     </a>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};
