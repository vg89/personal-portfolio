import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Connect with me!
          </p>
          <p className="py-6">Submit the form below to get in touch with me!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/78aa65fd-89c0-4a57-9d1d-0273696aefc4"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 pt-30 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//from getform.io -->we get the above form action link
//first login-> create ->name it as one-portfolio,time-indian std ->youwill get the link
