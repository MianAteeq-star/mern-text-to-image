import React from "react";
import twitter from "../assets/twitter_icon.svg";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-1 gap-2">
      <div className="flex justify-center items-center gap-6">
        <img src={logo} className="w-20  sm:w-32" alt="logo imagify" />
     
        <p className=" border-l-2 px-2 sm:px-8 text-xs sm:text-sm border-black">All right reserved. Copyright @imagify</p>
      </div>
      <div className="flex  items-center justify-center gap-2">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
