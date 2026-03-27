"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full py-7 px-16 poppins border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Let's Get in Touch</h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Sign up for our newsletter and receive <br />
            the latest updates directly in your inbox
          </p>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-[270px] transition-all duration-300">
            <HiOutlineMail className="text-gray-400 text-xl mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none bg-transparent placeholder-gray-400"/>
            <IoArrowForward className="text-xl cursor-pointer  transition-colors duration-300" />
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-500">
            {["Home", "Shop", "Smart Watch", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-black cursor-pointer transition-colors duration-300">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Information</h3>
          <ul className="space-y-4 text-gray-500">
            {["Terms of Service", "Privacy Policy", "Refund Policy", "Shipping Policy"].map(
              (info) => (
                <li
                  key={info}
                  className="hover:text-black cursor-pointer transition-colors duration-300">
                  {info}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Socials</h3>
          <div className="flex gap-4 flex-wrap">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn].map(
              (Icon, index) => (
                <div key={index}
                  className="text-xl w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center 
                             hover:bg-black hover:text-white cursor-pointer transition-all duration-300 
                             transform hover:scale-110 shadow-sm">
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      {/* <div className="mt-1.5 text-center  text-sm border-t border-gray-200 pt-6">
        © {new Date().getFullYear()} LuxeTick All rights reserved
      </div> */}
      {/* Footer Bottom */}
<div className="mt-4 text-center text-sm border-t border-gray-200 pt-3">
  © {new Date().getFullYear()} LuxeTick All rights reserved
</div>
    </footer>
  );
}