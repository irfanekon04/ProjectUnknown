import React from "react";
import second from "../../public/element.png";
import l1 from "../../public/logoicon (1).png";
import l2 from "../../public/Frame.png";
import l3 from "../../public/Frame (2).png";
import l4 from "../../public/Frame (1).png";
import l5 from "../../public/logoicon (5).png";
import l6 from "../../public/logoicon (6).png";

const About = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between ">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mx-auto flex flex-col items-center">
          {/* Top Image */}
          <div className="w-full md:w-[440px]">
            <img
              className="rounded-2xl w-[440px] md:absolute md:top-0 md:left-[2rem]"
              src="https://media.istockphoto.com/id/2032770776/photo/hands-with-three-megaphones-stacking-out-phone-screen-symbolizing-importance-and-relevance-of.jpg?s=1024x1024&w=is&k=20&c=rIDGr66Ps1NteAdnUWCda7SIMdX2KL-D29ucommlXSs="
              alt=""
            />
          </div>
          {/* Bottom Image */}
          <div className="w-full md:w-[296px] mt-6 md:absolute md:left-[-4rem] md:top-[195px]">
            <img
              className="rounded-2xl w-full"
              src="https://media.istockphoto.com/id/2032770777/photo/laptop-mobile-phone-and-analytics-visual-aid-for-online-courses-teaching-effective-social.jpg?s=1024x1024&w=is&k=20&c=TEN1LcoVxyTqw-nFD91CFZZF7lvk0ooKS6zdfy1kxWE="
              alt=""
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center mx-auto md:w-1/2 mt-12 md:mt-0">
          <img className="mx-auto mb-4" src={second} alt="" />
          <h1 className="font-bold text-3xl md:text-4xl text-center">Who We Are?</h1>
          <p className="text-center text-[16px] md:text-[18px] font-paprika mx-auto py-4 px-4 md:px-0 w-full md:w-[442px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5 w-full md:w-auto px-6">
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
            <img src={l5} alt="" />
            <img src={l6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
