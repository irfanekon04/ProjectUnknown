import React from "react";
import element from "../../public/element.png";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const Review = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 px-4">
      <div className="lg:flex lg:items-center gap-x-10">
        <div className="text-center lg:text-left lg:w-1/3">
          <img className="mx-auto " src={element} alt="element" />
          <h1 className="font-extrabold text-3xl md:text-5xl mt-8">Client Review</h1>
          <p className="mx-auto lg:mx-0 lg:w-[331px] font-paprika text-[16px] md:text-[18px] mt-8">
            People use digital devices instead of visiting physical shops,
            digital marketing campaigns are becoming more prevalent and
            efficient.
          </p>
          <div className="flex justify-center lg:justify-start text-4xl md:text-6xl mt-5 gap-x-5 text-orange-500 cursor-pointer">
            <FaCircleArrowLeft />
            <FaCircleArrowRight />
          </div>
        </div>

        <div className="lg:w-3/4 mt-10 lg:mt-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }, // 3 slides for large devices
              1280: { slidesPerView: 2 }, // 4 slides for extra-large devices
            }}
            modules={[Pagination]}
            className="mySwiper mt-16"
          >
            {[
              { name: "Adolf Hitler", title: "German Butcher", img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
              { name: "Bin Laden", title: "Pilot 9/11", img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
              { name: "Andrew Tate", title: "Misogynist", img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
              { name: "Lionel Scaloni", title: "Football Coach", img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
            ].map((review, index) => (
              <SwiperSlide key={index} className="w-[370px]">
                <div className="bg-[#D8EAFF] px-[20px] py-[20px] md:px-[40px] md:py-[25px] w-full relative rounded-3xl">
                  <p className="text-[16px] md:text-[18px] font-paprika text-[#6C7D93] ">
                    Content Marketing is the other fold of online advertisement.
                    If you are looking to build digital marketing campaigns that
                    are becoming more prevalent and efficient.
                  </p>
                  <div className="flex gap-x-4 mt-3">
                    <img className="w-[60px] md:w-[100px]" src={review.img} alt={review.name} />
                    <div>
                      <p className="font-semibold text-orange-500 text-[16px] md:text-[18px]">{review.name}</p>
                      <p>{review.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
