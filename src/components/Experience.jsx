import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import git from '../assets/GIT.png';
import tailwind from '../assets/tailwind.png';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import nodejs from '../assets/node.png';
import bootstrap from '../assets/bootstrap.png';

const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:git,
            title:'Git',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src:c,
            title:'C',
            style:'shadow-purple-400'
        },
        {
            id:9,
            src:cpp,
            title:'C++',
            style:'shadow-blue-300'
        },
        {
            id:10,
            src:nodejs,
            title:'Node Js',
            style:'shadow-green-400'
        },
        {
            id:11,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-pink-400'
        },
    ];
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white overflow-scroll-y pt-20'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the teachnologies I have worked with!</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style})=>(
                        <div
                        key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
};

export default Experience;

//like portfolio, here also the grid should be outside.