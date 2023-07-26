import React from 'react';
import vidTube_profile from '../assets/portfolio/vidTube_profile.png';
import weather_profile from '../assets/portfolio/weather_profile.png';
import calculator_profile from '../assets/portfolio/calculator_profile.png';
import portfolio_profile from '../assets/portfolio/portfolio_profile.png';

const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:vidTube_profile,
            live:"https://vg89.github.io/vid-Video/",
            code:"https://github.com/vg89/vid-Video",
        },
        {
            id:2,
            src:weather_profile,
            live:"https://vg89.github.io/weather-app/",
            code:"https://github.com/vg89/weather-app",
        },
        {
            id:3,
            src:calculator_profile,
            live:"https://vg89.github.io/my-calculator/",
            code:"https://github.com/vg89/my-calculator",
        },
        {
            id:4,
            src:portfolio_profile,
            live:"https://vg89.github.io/vibha",
            code:"https://github.com/vg89/my-calculator",
        }
        

    ]
  return (
  <div name="portfolio" className='bg-gradient-to-b from-black to-gray-500 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full pt-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Portfolio
                </p>
                <p className='py-6'>Checkout my work here!
                </p>
                </div>
                
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({id,src,code,live})=>(
                            <div key={id}className='shadow-md shadow-gray-600 rounded-large'>
                            <img 
                            src={src} 
                            className="rounded-md duration-200 hover:scale-105 "
                            />
                            <div className='flex items-center justify-center'>
                                <a href={code} target='_'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105'>Code</button>
                                </a>
                                <a href={live} target='_'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105'>Live</button>
                                </a>
                            </div>
                        </div>
                        ))}
                        
                </div>
            </div>
        </div>
        );
    
  
};

export default Portfolio;

//we can access 2 elements (side by side) at a time and edit it simultaneously

//md:h-screen , it means for screen greater than medium, we have height of screen

//<div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>-->it means for mobile devices we have a padding of 12px, but for larger devices, we dont have padding.

