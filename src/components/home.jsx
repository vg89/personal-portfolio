import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/profile.jpeg";
import { Link } from "react-scroll";
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa';
import Resume from './resume.pdf';

const home = () => {
  const links=[
    {
        id:1,
        child:(
        <FaLinkedin size={30}/>
        ),
        href:'https://linkedin.com/in/vibhagarg',
    },
    {
        id:2,
        child:(
        <FaGithub size={30}/>
        ),
        href:'https://github.com/vg89',
        
    },
    {
        id:3,
        child:(
        <FaInstagram size={30}/>   
        ),
        href:'https://www.instagram.com/vibha_8_/',
    },
];
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 py-28"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Frontend Developer !
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I like to work on web application using technologies like HTML, CSS, Javasript
            React and Tailwind. I am also trying to broaden my knowledge on the web development field by learning new frameworks on backend development.
          </p>
          <div>
           <a 
           className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" 
           href={Resume}
           download>
              Download CV
                </a>
          </div>
        <ul className="flex justify-start items-center mt-52 mb-10 md:mb-0">
        {links.map(({id,child,href})=>(
             <li key={id} 
             className='mr-14'
             >
             <a 
             href={href}
             className='flex justify-between items-center w-full text-white scale-[1.3] hover:scale-[1.5]'
             target='_blank'                
             >
             {child}
             </a>
         </li>
        ))}
        </ul>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
    
  );
};

export default home;

//we add smooth scroll to portfolio
//text-4xl--->for samller screen, sm:text-7xl-->for larger screen


//for the icons on the left side, we use a breakpoint: such that the icons become visible once that screen size is increased.


//link/ anchor tag use kia so taht portfolio