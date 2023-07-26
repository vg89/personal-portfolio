import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
//import Resume from './'

//children is a reserved word that returns all children you pass between your opening and closing component element.
const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href:'https://linkedin.com/in/vibhagarg',
            style:'rounded-tr-md'
            //we use custom css for the top row as it is the first row and has rounded corner
        },
        {
            id:2,
            child:(
                <>
                GitHub<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/vg89',
            
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:vibhagarg2002@gmail.com',
            style:'rounded-br-md',
            
        },
    ];

  return (
    <div className="lg:flex flex-col top-[42%] left-0 fixed">
        <ul>
 
        {links.map(({id,child,href,style})=>(
             <li key={id} 
             className={'hidden lg:flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + 
             " " +
             style}
             >
             <a 
             href={href}
             className='flex justify-between  items-center w-full text-white'
             download
             target='_blank'               //this helps us to open a blank tab
             rel="noreferrer"              //in our terminal it was showing one warning so we copy pasted this rel from there
             >
             {child}
             </a>
         </li>
        ))}

           
        </ul>
    </div>
  );
};

export default SocialLinks;

//we use an empty tag which is called react fragment


// But there is a very important difference between React fragment and Empty tag, that is, one can use the key attribute in React Fragment syntaxes but in empty tag syntax that’s not possible.

//react fragment is all about creating great reusable components. By using React Fragments we can get rid of the extra wrapper element that we had to use whenever multiple elements needed to be rendered by a component.

//ml-[-100px] is used to take the linked icon to the back side of the page

//hover rounded-md-->this adds border radius of 6px
//hover:ml-[-10px], it means on hover we have to decrease the margin left by 10px

//instead of copying the 4 links (linkedin, github,and so on), we create a const links array

// to add custom css for just one specific link : we have to do this {'flex justify-between items-center w-40 h-14 px-4 ml-[-100px]hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " +style}