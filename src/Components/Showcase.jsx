import React from "react";

const Showcase = () => {
  return (
    <div className="">
      <div className="mx-auto text-center py-8 mt-8">
        <h1 className="font-bold text-3xl text-[#192239] md:text-4xl mt-5 mb-8">
          Work Showcase
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
      <div
        role="tablist"
        className="tabs tabs-bordered w-full md:w-max mx-auto"
      >
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-orange-500 font-bold w-full md:w-max"
          aria-label="All"
          // defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 rounded-box p-6 md:p-10"
        >
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto rounded">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/7698884/pexels-photo-7698884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/5833861/pexels-photo-5833861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/1590086/pexels-photo-1590086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
              </div>
            </div>
          </section>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-orange-500 font-bold w-full md:w-max"
          aria-label="Digital Mkt"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 rounded-box p-6 md:p-10"
        >
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto rounded">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png"
                  alt="showcase-img"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png"
                  alt="showcase-img"
                />
              </div>
            </div>
          </section>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-orange-500 font-bold w-full md:w-max"
          aria-label="Content Mkt"
          // defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 rounded-box p-6 md:p-10"
        >
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto rounded">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/7698884/pexels-photo-7698884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/5833861/pexels-photo-5833861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://images.pexels.com/photos/1590086/pexels-photo-1590086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="showcase-img"
                />
              </div>
            </div>
          </section>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-orange-500 font-bold w-full md:w-max"
          aria-label="Branding"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 rounded-box p-6 md:p-10"
        >
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto rounded">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png"
                  alt="showcase-img"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg"
                  alt="showcase-img"
                />
                <img
                  className="object-cover dark:bg-gray-500 rounded-2xl aspect-square"
                  src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png"
                  alt="showcase-img"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Showcase;
