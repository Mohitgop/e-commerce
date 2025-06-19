// import React from "react";
import Subscribe from "../../pages/Subscribe";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 ">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            ABOUT <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src="https://Chlothzy.shop/assets/about_img-CnrQFd3s.png"
          alt="ThinKart Bodycon Fashion"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            <b>ThinKart</b> is your go-to destination for premium fashion that
            speaks elegance, confidence, and modern style. We believe in
            celebrating every body type through bold and beautiful
            silhouettes—especially our signature <b>bodycon dresses</b> designed
            to turn heads.
          </p>
          <p>
            Our curated collections reflect the latest trends while maintaining
            timeless quality. Whether you're dressing up for a party or owning
            your everyday look, <b>ThinKart</b> ensures you're always
            fashion-forward with comfort and flair.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At <b>ThinKart</b>, our mission is to empower individuals through
            style. We aim to offer easy access to high-quality, trendsetting
            apparel that makes you feel confident in your own skin—especially
            with our standout bodycon range.
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Flattering Fits:</b>
          <p className=" text-gray-600">
            Our bodycon dresses are crafted to enhance every curve with premium
            stretchable fabrics.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Effortless Shopping:</b>
          <p className=" text-gray-600">
            Browse, choose, and flaunt – our site makes fashion accessible and
            seamless to shop.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Fashion that Empowers:</b>
          <p className=" text-gray-600">
            At ThinKart, we’re all about bold confidence—each dress is designed
            to make a statement.
          </p>
        </div>
      </div>
        
        <Subscribe />
    </div>
  );
};

export default About;
