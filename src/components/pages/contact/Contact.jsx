import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";

// Icon Imports
import gmail from "../../../assets/image/gmail.png";
import whatsapp from "../../../assets/image/whatsapp.png";
import location from "../../../assets/image/location.png";
import linkedin from "../../../assets/image/linkedin.png";
import giticon from "../../../assets/image/github.png";
import facebook from "../../../assets/image/facebook.png";

const style = {
   body: `w-full min-h-screen px-4 py-12 lg:py-24 relative overflow-hidden text-slate-900`,
   pagetitle: `mb-8 text-3xl lg:text-4xl font-Acme font-bold animate-pulse text-center text-gray-800`,
   boxsection: `flex flex-col lg:flex-row items-center justify-center gap-12`,
   contactbox: `lg:w-1/2 w-full text-center lg:text-left space-y-6 font-Nunito`,
   contacticon: `animate-pulse w-12 p-1 mx-1 border-2 border-gray-700 bg-gray-400 shadow-lg rounded-full hover:bg-white duration-300`,
   formbox: `lg:w-1/2 w-full`,
   inputbox: `w-full h-12 lg:m-3 m-2 p-3 rounded-xl bg-gray-900 text-white shadow-lg`,
   sendbtn: `m-5 py-3 px-6 font-bold text-white bg-gray-950 rounded-full hover:bg-gray-900 duration-200`,
   loadingbtn: `animate-pulse m-5 py-3 px-6 font-bold bg-gray-950 rounded-full shadow-green-700`,
};

export default function Contact() {
   const contactButtons = [
      { id: 1, name: "Dhaka, Bangladesh", icon: location },
      {
         id: 2,
         name: "mdanikpro801@gmail.com",
         icon: gmail,
         url: "mailto:mdanikpro801@gmail.com",
      },
      {
         id: 3,
         name: "github.com/mdanik801",
         icon: giticon,
         url: "https://github.com/mdanik801",
      },
      {
         id: 4,
         name: "Md. Aulad Hossain Anik",
         icon: linkedin,
         url: "https://www.linkedin.com/in/md-aulad-hossain-anik-965023298",
      },
      {
         id: 5,
         name: "01856713852",
         icon: whatsapp,
         url: "https://wa.me/qr/DFDHWW5PI3IEK1",
      },
      {
         id: 6,
         name: "facebook.com/1000anik",
         icon: facebook,
         url: "https://www.facebook.com/1000anik",
      },
   ];

   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState("");
   const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSend = (data) => {
      setLoading(true);
      const templateParams = {
         email: data.email,
         name: data.name,
         text: data.message,
      };

      emailjs
         .send("service_iag7jv8", "template_qd48t53", templateParams, "q_SwcUx-wlrXpcp4j")
         .then(
            (response) => {
               console.log("SUCCESS!", response.status, response.text);
               setSuccess("Email sent successfully!");
               reset();
            },
            (error) => {
               console.error("Failed to send message:", error);
               alert("Failed to send message.");
            }
         )
         .finally(() => {
            setLoading(false);
            setTimeout(() => setSuccess(""), 2000);
         });
   };

   useEffect(() => {
      AOS.init({ duration: 1200 });
   }, []);

   const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX / width) * 100;
      const y = (clientY / height) * 100;
      setGradientPosition({ x, y });
   };

   return (
      <div
         data-aos="fade-right"
         id="contact"
         className={style.body}
         onMouseMove={handleMouseMove}
         style={{
            background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(245, 245, 245, 1), rgba(255, 255, 255, 1), rgba(31, 41, 55, 1))`,
            transition: "background 0.1s ease-out",
         }}>
         <h1 data-aos="fade-down" className={style.pagetitle}>
            <span className="text-gray-700">Contact</span> Me
         </h1>

         <div data-aos="fade-right" className={style.boxsection}>
            <div className={style.contactbox}>
               <p>
                  Have a project for me? Any questions about something I've built? I'd love to hear
                  from you. Reach out by email or use the form below.
               </p>
               <ul className="flex flex-col items-start lg:items-start gap-5 mt-5">
                  {contactButtons.map((btn) => (
                     <li key={btn.id} className="flex items-center space-x-3">
                        <a href={btn.url} target="_blank" rel="noopener noreferrer">
                           <img className={style.contacticon} src={btn.icon} alt={btn.name} />
                        </a>
                        <a
                           href={btn.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-800 hover:text-gray-600  text-lg font-semibold">
                           {btn.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            <div className={style.formbox}>
               <form onSubmit={handleSubmit(onSend)} className="space-y-4">
                  <input
                     data-aos="fade-up"
                     type="text"
                     placeholder="Name"
                     {...register("name", { required: "Name is required" })}
                     className={style.inputbox}
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  <input
                     data-aos="fade-down"
                     type="email"
                     placeholder="Email"
                     {...register("email", { required: "Email is required" })}
                     className={style.inputbox}
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  <textarea
                     data-aos="flip-right"
                     placeholder="Message"
                     {...register("message", { required: "Message is required" })}
                     className={`${style.inputbox} h-32`}
                  />
                  {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                  {loading ? (
                     <button type="button" className={style.loadingbtn}>
                        Sending Message...
                     </button>
                  ) : (
                     <button type="submit" className={style.sendbtn}>
                        Send Message
                     </button>
                  )}
                  {success && <p className=" text-gray-500 font-bold text-center">{success}</p>}
               </form>
            </div>
         </div>
      </div>
   );
}
