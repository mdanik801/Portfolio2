import React from "react";
import Navbar from "../header&footer/Navbar";
import HeroSection from "./HeroSection";
import Aboutme from "./Aboutme";
import SkillSection from "../skill & projects/SkillSection";
import ProjectSection from "../skill & projects/ProjectSection";
import Contact from "../contact/Contact";
import Footer from "../header&footer/Footer";

export default function Home() {
   return (
      <div className=" bg-slate-400">
         <Navbar />
         <HeroSection />
         <Aboutme />
         <SkillSection />
         <ProjectSection />
         <Contact />
         <Footer />
      </div>
   );
}
