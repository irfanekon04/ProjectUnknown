import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-white">
      <footer className="footer bg-white text-base-content p-10">
        <aside>
        <img src={logo} alt="" />
          <p className="text-gray-400">
          Install any demo or template with a single click.<br /> You can mix and match all the demos & templates.<br/> Every demo can be turned into one or multi-page.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title opacity-100 text-[#192239]">Features</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">About</a>
          <a className="link link-hover text-gray-400">Benefit</a>
          <a className="link link-hover text-gray-400">Pricing</a>
          <a className="link link-hover text-gray-400">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-[#192239]">Products</h6>
          <a className="link link-hover text-gray-400">Task Managemen</a>
          <a className="link link-hover text-gray-400">Company Growth</a>
          <a className="link link-hover text-gray-400">Time Tracking</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-[#192239]">Support</h6>
          <a className="link link-hover text-gray-400">Customer Service</a>
          <a className="link link-hover text-gray-400">Accessibility</a>
          <a className="link link-hover text-gray-400">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
