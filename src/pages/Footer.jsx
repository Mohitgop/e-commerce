import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm md:mx-24 mx-2">
        <div>
          <img
            src="https://res.cloudinary.com/dabo5rgjg/image/upload/v1750501869/ThinKart_Logo_vodm5i.jpg"
            className="mb-5 w-32"
            alt="ThinKart Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            ThinKart Fashion brings bold elegance to your wardrobe. From bodycon
            dresses to chic essentials, we redefine style. Perfect fits, premium
            fabrics — confidence in every thread. Step into the spotlight with
            ThinKart — where fashion speaks.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <strong>Phone:</strong> 8505835814
            </li>
            <li>
              <strong>Email:</strong> contact@ThinKart.shop
            </li>
          </ul>
          <p className="text-lg font-medium mt-5">Address:</p>
          <ul className="ml-5 text-gray-600">
            <li>Unit-113, Malabar Hill</li>
            <li>Maharashtra - 400006</li>
          </ul>
        </div>
      </div>
      <div>
      
        <p className="py-5 text-sm text-center">
          Copyright 2025@ ThinKart.shop - All Rights Reserved.
        </p>
        <div className="flex flex-col items-center gap-2 pb-10">
          <p className="text-gray-700 font-medium">
            Follow us on Instagram for daily style inspo
          </p>
          <a
            href="https://www.instagram.com/ThinKart/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
