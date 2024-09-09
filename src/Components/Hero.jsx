import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover cover bg-center">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="md:text-5xl text-[30px]  font-bold font-sans leading-none sm:text-6xl md:w-[686px] mx-auto">
              We Are Digital <span className="text-[#FF7628]">Marketing</span>{" "}
              Agency
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 w-[571] text-[20px] font-paprika text-gray">
              Use customer data to build great and solid product experiences
              that convert. Digital marketing’s development has changed the way
              brands and businesses use technology for marketing.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-bold rounded-full bg-[#FF7628] text-white"
              >
                Get Free Quoto
              </a>
            </div>
          </div>


          <div className=" relative md:w-[458px] justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://media.istockphoto.com/id/1389450835/vector/digital-marketing-mistake-failed-not-effective-online-advertising-campaign-3d-vector-concept.jpg?s=1024x1024&w=is&k=20&c=KHDvEJ4qgr59AwBS5-tvI-l_HsRCOiId6vS1Crp_jwQ="
              className="md:absolute rounded-xl top-0 left-0"
            />
            <img
              src="https://media.istockphoto.com/id/1410274487/photo/digital-marketing-concept.jpg?s=1024x1024&w=is&k=20&c=tTKkwl1L_HsFS5MG9I0HAsP4g5qo3i4pfqZ86_wb5LA="
              className="md:absolute md:mt-0 mt-4 rounded-xl top-[5rem] left-[-13rem] h-auto "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
