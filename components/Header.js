import Image from "next/image";
import React from "react";
import instagram from "../assets/instagram.png";
import arrowdown from "../assets/arrowdown.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import discover from "../assets/discover.png";
import hearth from "../assets/hearth.png";
import profile from "../assets/profile.png";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";

const Header = () => {
  const [open, setOpen] = useRecoilState(modalState);
  console.log(open);

  return (
    <div className="border-b shadow-sm bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        {/*left*/}
        <div className="flex">
          <div className="w-28 h-full flex">
            <Image alt="Instagram" src={instagram} />
          </div>
          <div className="h-3 w-3 mt-1">
            <Image alt="arrowdown" src={arrowdown} />
          </div>
        </div>
        {/*mid*/}
        <div className=" hidden w-72 sm:flex relative mx-4 ">
          <div className="absolute flex items-center w-3 h-full ml-2">
            <Image alt="search" src={search} />
          </div>
          <input
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0 "
            type="text"
            placeholder="Search"
          />
        </div>
        {/*right*/}
        <div className="flex space-x-5">
          <div className="Btn hidden sm:flex">
            <Image src={home} alt="home" />
          </div>
          <div className="Btn hidden sm:flex relative">
            <Image src={message} alt="message" />
            <div className="absolute flex -top-1 left-3 items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs ">
              1
            </div>
          </div>
          <div className="Btn" onClick={() => setOpen(!open)}>
            <Image src={upload} alt="upload" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={discover} alt="discover" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={hearth} alt="hearth" />
          </div>
          <div className="flex ">
            <div className="Btn mr-5 mt-1 ">
              <Image src={profile} className="rounded-full" alt="profile" />
            </div>
            <button className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
