import React from "react";
import element from "../../public/element.png";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="max-w-screen-xl mx-auto">
        <img className="text-center mx-auto" src={element} alt="" />
        <h1 className="font-extrabold text-5xl text-[#192239] mt-8 text-center">
          Our Latest Blog
        </h1>
        <p className="w-[331px] font-paprika text-[18px] mt-8  mx-auto text-center">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3 px-3 bg-white  mt-8">
        <div className="card bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.ctfassets.net/pdf29us7flmy/1mzkiaBqdWkAF8smX4s0rb/007dda81b2bf0f48402e3c1258ea24da/search_engine1_GettyImages-1136801544_.jpg"
              alt=""
              className="rounded-xl  w-full"
            />
          </figure>
          <div className="card-body  items-center text-center">
            <h2 className="card-title font-medium text-gray-700">How to be ahead of stock changes</h2>
            <p>By John - 5 Comments</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-500 border-none rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.ctfassets.net/pdf29us7flmy/1mzkiaBqdWkAF8smX4s0rb/007dda81b2bf0f48402e3c1258ea24da/search_engine1_GettyImages-1136801544_.jpg"
              alt=""
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-medium text-gray-700">
              Tips To Move Your Project More Forward
            </h2>
            <p>By John - 5 Comments</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-500 border-none rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.ctfassets.net/pdf29us7flmy/1mzkiaBqdWkAF8smX4s0rb/007dda81b2bf0f48402e3c1258ea24da/search_engine1_GettyImages-1136801544_.jpg"
              alt=""
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-medium text-gray-700">Online Reputation And Management</h2>
            <p>By John - 5 Comments</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-500 border-none rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
