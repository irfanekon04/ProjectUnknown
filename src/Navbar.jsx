import React from "react";
import logo from "./assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-white max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#FF7628] text-[#192239] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-extrabold">Home</a>
            </li>
            <li>
              <a className="font-extrabold">About</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="font-extrabold">Services</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>

      {/* center start */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium text-[#192239] text-[20px] px-1 ">
          <li className="active:bg-white">
            <details className="active:bg-white">
              <summary className=" hover:text-[#FF7628] active:bg-white">
                Home
              </summary>
              <ul className="p-2 bg-white ">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className=" hover:text-[#FF7628]">About</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className=" hover:text-[#FF7628]">Services</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className=" hover:text-[#FF7628]">Portfolio</summary>
              <ul className="p-2 bg bg-white">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className=" hover:text-[#FF7628]">Blog</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* End part */}
      <div className="navbar-end">
        <a className="btn btn-xs lg:btn-md lg:text-xl lg:px-6 lg:py-2 bg-[#FF7628] rounded-full border-none hover:bg-[#FF7628] text-white">
          CONTACT US!
        </a>
      </div>
    </div>
  );
};

export default Navbar;
