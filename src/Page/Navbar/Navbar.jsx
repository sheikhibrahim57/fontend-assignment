import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="border-b-[2px] border-white text-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-2">
          <div>
            <img className="h-20" src="hello.jpg" alt="" />
          </div>

          <div className="flex justify-end">
            <div className="md:hidden" onClick={handleClick}>
              {show == true ? (
                <RxCross1 className="text-3xl text-secondary" />
              ) : (
                <AiOutlineBars className="text-3xl text-secondary" />
              )}
            </div>

            <div>
              <ul
                className={`md:flex py-2 md:gap-x-2 lg:gap-x-5 text-secondary bg-green-300 md:bg-opacity-0 z-10 justify-end duration-300 font-pop font-semibold text-bold text-center absolute md:static w-full top-[-160px] ${
                  show
                    ? "top-[65px] md:top-[210px] w-full left-0"
                    : "top-[-200px] left-0"
                }`}
              >
                <li className="hover:bg-[#5a4747] p-1  rounded-[5px]">
                  <a href="#">
                    Home
                  </a>
                </li>
                <li className="hover:bg-[#5a4747] p-1 rounded-[5px]">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:bg-[#5a4747] p-1 rounded-[5px]">
                  <a href="#">Working Site</a>
                </li>
                <li className="hover:bg-[#5a4747] p-1 rounded-[5px]">
                  <a href="#">Gallery</a>
                </li>
                <li className="hover:bg-[#5a4747] p-1 rounded-[5px]">
                  <a href="#">Blog</a>
                </li>
                <li className="hover:bg-[#5a4747] p-1 rounded-[5px]">
                  <a href="#">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
