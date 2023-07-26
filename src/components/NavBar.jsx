import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import{Link}from "react-scroll";
//import NavLinks from "./NavLinks";

const NavBar = () => {
  //initially the usestate is initialized as false(by default)
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white  bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Vibha</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
           <li 
           key={id}
            link={link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
        ))}
      </ul>
      <div onClick={()=>setNav((!nav))}  className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>

      {nav &&(
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

      {links.map(({ id, link }) => (
           <li 
           key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link 
              onClick={()=>setNav(!nav)}
              to={link}
               smooth 
               duration={500}>
              {link}
            </Link>
            </li>
        ))}

    </ul>
  )}
</div>
  );
};

export default NavBar;

//shortcut for the boiler plate of this jsx page :rafce
//px-4-->padding on left and right
//py-4-->padding on top and bottom
//ml-->margin left

//we have created an array with all the elements of the navbar(instead of copying it several times), then we have mapped its id and link , on click we chnage the initial state

//onClick={() => setNav(!nav)}, it means on click we change the useState of navbar to the opposite of default

//nav && , it means if nav is true only then we have to display the flip, as we click the 3 lines at top right corner

// onClick={() => setNav(!nav)} className="cursor-pointer pr-4 md:hidden z-10 text-gray-500": here on medium size of window, that three bars on the top right corner is hidden

//{nav?<FaTimes size={30}/>:<FaBars size={30}/>}, we want that when we click in the 3 lines at thetop corner, then its icon should change to a cross mark

//for given smooth scroll: first we install react-scroll, then we do this in the navbar:-->
// <Link to={link} smooth duration={500}>{link}</Link>

//to get the same effect when we use in mobile:i.e when the 3 lines appear, then what we can do is again copy paste the same logic there also(for ref look to the code wriiten above in navbar), doing this we reach to the required oage but the navbar does not close. To close the navbar we have to onClick change the default setNav(!nav) to its opposite

