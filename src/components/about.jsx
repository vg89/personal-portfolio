import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-scroll-y pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me!<menu></menu>
          </p>
        </div>
        <p className="text-xl mt-20 overflow-scroll-y">
          Hey! I am a 3rd year engineering undergraduate enthusiastic and eager to learn Fullstack Development with intermediate level of Experience in web designing and frontend development.
        </p>

        <br />

        <p className="text-xl overflow-scroll-y">
        I have a clear understanding of system and demand of the generation and is higly motivated individual with a strong personality, rich work ethic and ability to work independently. I have a strong organizational and team collaborations skills eager to contribute to team success through hard work and determination.
        </p>
      </div>
    </div>
  );
};
export default About;