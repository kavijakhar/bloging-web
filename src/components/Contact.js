import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen sm:static  pl-4 pr-4 bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500 text-white"
    >
      <div className="flex flex-col  justify-center max-w-screen-md mx-auto h-full   ">
        <div className="mt-4">
          <p className="text-4xl font-bold mt-4  text-gray-200 inline border-b-4 border-violet-300">
            Cotact Me
          </p>
          <p className="py-5 text-violet-200 text-2xl">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center rounded-3xl bg-violet-600 h-auto mb-8 ">
          <form
            action="https://formspree.io/f/mdovkeba"
            method="POST"
            className=" mt-14 mx-6  flex flex-col w-full md:w-1/2"
          >
            <input

              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2  bg-transparent border-2  rounded-md text-white focus:outline-violet-700"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-violet-700"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white  focus:outline-violet-700"
            ></textarea>

            <button className="text-white text-xl  bg-gradient-to-l from-violet-400 to-violet-700 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
