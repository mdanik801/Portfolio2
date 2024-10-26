import React from "react";

import { contact_button } from "../../information/informaiotn";

export default function Footer() {
   return (
      <div className=" bg-gray-900 w-full h-[8vh]  flex justify-between items-center p-6">
         <div className=" lg:flex lg:items-center">
            {" "}
            <div className=" animate-pulse text-slate-200 font-Acme lg:text-[1.2rem] text-[0.9rem] text-shadow-xl lg:mr-3">
               {" "}
               © Md Aulad Hossain <span className=" text-slate-400  ">Anik</span>
            </div>
         </div>
         <ul className=" my-5 flex">
            {contact_button.map((btn) => (
               <>
                  {" "}
                  <li className=" flex my-2 cursor-pointer">
                     {" "}
                     <a href={btn.url}>
                        <img
                           className=" animate-bounce hover:animate-none border-2 border-gray-700 xl:w-[4.5vh] lg:w-[4vh] md:w-[4vh] w-[3.5vh] bg-gray-400 hover:bg-white p-0.5 mx-1 rounded-full duration-300 shadow-black shadow-lg "
                           src={btn.icon}
                           alt=""
                        />
                     </a>
                  </li>
               </>
            ))}
         </ul>
      </div>
   );
}
