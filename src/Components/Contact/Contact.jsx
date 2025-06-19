import React from "react";
import Subscribe from "../../pages/Subscribe";


const Contact = () => {
  return (
    <div className="mx-24">
      <div className="text-center text-2xl pt-10  ">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            CONTACT <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28">
        <div
          className="w-full md:w-1/2 h-80 md:h-auto bg-cover bg-center rounded-md bg-image"
          
        ></div>
        <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
          <p className="font-semibold text-xl text-gray-600">Get in Touch</p>
          <form className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required=""
              className="border border-gray-300 px-4 py-2 rounded"
              value=""
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required=""
              className="border border-gray-300 px-4 py-2 rounded"
              value=""
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required=""
              rows="5"
              className="border border-gray-300 px-4 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="border border-black px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
        <Subscribe />
      
      
    </div>
  );
};

export default Contact;
