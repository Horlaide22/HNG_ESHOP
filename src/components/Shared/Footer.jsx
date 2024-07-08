import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import footer_line from "../../assets/footer_line.png";

const Footer = () => {
  return (
    <footer className=" bg-[#FF7F50] py-10  text-base font-semibold text-white">
      <div className="flex flex-col gap-3">
        <div className="px-8 ">
          <div>
            {" "}
            <img src={logo} alt="" />
          </div>
          <div className=" flex gap-80 pt-14 ">
            <div className="flex flex-col gap-4 ">
              <p>Lagos Ikeja </p>
              <p>Lapis Store Internation</p>
              <p>Nigeria.</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>About The Club</p>
              <p>Contact Us</p>
              <p>More</p>
              <p>Frequently Asked Questions</p>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex gap-3 items-center">
                <img src={facebook} alt="" width={50} />
                <p>facebook</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={instagram} alt="" />
                <p>instagram</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={twitter} alt="" />
                <p>twitter</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={youtube} alt="" />
                <p>youtube</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={footer_line} alt="" />
        </div>
        <div>
          <p className="text-center">
            Copy Right Lapis Store International. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
