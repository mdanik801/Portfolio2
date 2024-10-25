import React from "react";
import { TypeAnimation } from "react-type-animation";
import Myimg from "../../../assets/image/myimgHeader.png";
import resume from "../../../assets/image/Anik Resume.pdf";
import download from "../../../assets/image/download.png";
import GIF from "../../../assets/image/baner.gif";
import { contact_button } from "../../information/informaiotn";

const style = {
   page_body: "m-0 mt-6 p-5 bg-white w-full h-screen flex justify-center items-center",
   container:
      "w-full lg:h-[80vh] h-auto flex flex-col lg:flex-row justify-between bg-black/50 backdrop-blur-lg rounded-lg shadow-lg border-2 border-black/35 p-5 lg:p-10",
   text_container:
      "flex flex-col justify-center items-start lg:w-1/2 w-full space-y-4 lg:space-y-6",
   greeting: "text-lg md:text-2xl lg:text-3xl text-black/70 font-nunito font-semibold",
   name: "text-xl md:text-3xl lg:text-4xl text-black/70 font-bold lg:font-extrabold",
   animation_text: "w-full lg:mx-8 text-white text-lg md:text-xl lg:text-2xl font-semibold",
   button_container: "flex lg:mx-8 space-x-3 lg:space-x-4",
   resume_button:
      "flex items-center justify-center bg-black/60 hover:bg-black border border-slate-700 rounded-full p-2 lg:w-[20vh] lg:h-[6vh] w-[15vh] h-[5vh] text-slate-300",
   contact_button:
      "animate-pulse hover:animate-none flex items-center justify-center bg-black/60 hover:bg-black border border-slate-700 rounded-full p-2 lg:w-[20vh] lg:h-[6vh] w-[15vh] h-[5vh] text-slate-300",
   contact_icons: "flex lg:mx-8 space-x-4 lg:space-x-8",
   icon: "border-2 border-black/80 xl:w-[6vh] lg:w-[4vh] md:w-[4vh] w-[4.5vh] bg-gray-300 hover:bg-white mx-1 rounded-full duration-300 animate-pulse hover:animate-none shadow-2xl shadow-black",
   image_container: "flex justify-center items-center lg:w-1/2 w-full mt-8 lg:mt-0",
   banner_image: "h-[30vh] md:h-[50vh] lg:h-[60vh] w-full lg:w-auto rounded-md opacity-80",
};

export default function Home() {
   return (
      <div className={style.page_body}>
         <div className={style.container}>
            <div className={style.text_container}>
               <div className="w-full lg:mx-8">
                  <h1 data-aos="fade-right" className={style.greeting}>
                     Hey There, My Name Is
                  </h1>
                  <h1 data-aos="fade-left" className={style.name}>
                     MD. AULAD HOSSAIN ANIK
                  </h1>
               </div>

               <div data-aos="fade-right" className={style.animation_text}>
                  <TypeAnimation
                     sequence={[
                        1000,
                        "Fullstack Developer",
                        1000,
                        "Frontend Developer",
                        1000,
                        "EXPERT REACT DEVELOPER",
                        1000,
                        "MERN Stack Developer",
                        1000,
                     ]}
                     wrapper="span"
                     cursor={true}
                     repeat={Infinity}
                     style={{ display: "inline-block" }}
                  />
               </div>

               <div className={style.button_container}>
                  {/* Resume Button */}
                  <a
                     className={style.resume_button}
                     href={resume}
                     download="Anik Resume.pdf"
                     rel="noopener noreferrer">
                     <img
                        className="w-[2.5vh] lg:w-[4vh] mx-2"
                        src={download}
                        alt="Download Resume"
                     />
                     Resume
                  </a>

                  <a href="#contact" className={style.contact_button}>
                     Contact
                  </a>
               </div>

               {/* Contact Buttons */}
               <div className={style.contact_icons}>
                  {contact_button.map((btn) => (
                     <a key={btn.id} href={btn.url} target="_blank">
                        <img className={style.icon} src={btn.icon} alt={btn.name} />
                     </a>
                  ))}
               </div>
            </div>

            {/* Image */}
            <div className={style.image_container}>
               <img src={GIF} alt=" Banner" className={style.banner_image} />
            </div>
         </div>
      </div>
   );
}
