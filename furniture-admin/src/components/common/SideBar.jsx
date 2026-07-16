import React, { useState } from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { Link } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiTarget } from "react-icons/fi";

export default function SideBar() {
  let [menu, setMenu] = useState(0);
  return (
    <div className="h-screen bg-lime-100 overflow-y-scroll">
      <figure className="border-b-1 py-2">
        <img
          className="mx-auto"
          src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
          alt=""
        />
      </figure>

      <ul>
        <li className="flex items-center p-2 gap-3">
          <RiDashboard3Line />
          <Link to={"/dashboard"}> Dashboard </Link>
        </li>

        {/* 1 */}

        <li className=" p-2  relative">
          <button
            onClick={() => setMenu(1)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaRegUser />
            User
            {menu == 1 ? (
              <MdKeyboardArrowUp className="absolute right-2" />
            ) : (
              <MdKeyboardArrowDown className="absolute right-2" />
            )}
          </button>

          {menu == 1 && (
            <ul className="py-1 bg-white">
              <li className="flex items-center p-2 gap-3">
                <FiTarget /> View User
              </li>
            </ul>
          )}

          {/* <MdKeyboardArrowUp className="absolute right-2" /> */}
        </li>

        {/* 2 */}
        <li className=" p-2  relative">
          <button
            onClick={() => setMenu(2)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaRegUser />
            Enquiry
            {menu == 2 ? (
              <MdKeyboardArrowUp className="absolute right-2" />
            ) : (
              <MdKeyboardArrowDown className="absolute right-2" />
            )}
          </button>
          {menu == 2 && (
            <ul className="py-1 bg-white">
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> Contact Enquiry
              </li>
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> Newsletters{" "}
              </li>
            </ul>
          )}

          {/* <MdKeyboardArrowUp className="absolute right-2" /> */}
        </li>

        {/* 3 */}
        <li className=" p-2  relative">
          <button
            onClick={() => setMenu(3)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaRegUser />
            Color
            {menu == 3 ? (
              <MdKeyboardArrowUp className="absolute right-2" />
            ) : (
              <MdKeyboardArrowDown className="absolute right-2" />
            )}
          </button>
          {menu == 3 && (
            <ul className="py-1 bg-white">
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> <Link to={"/color/add"}> Add Color </Link>
              </li>
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> <Link to={"/color/view"}> View Color</Link>
              </li>
            </ul>
          )}

          {/* <MdKeyboardArrowUp className="absolute right-2" /> */}
        </li>

        {/* 4 */}
        <li className=" p-2  relative">
          <button
            onClick={() => setMenu(4)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaRegUser />
            Material
            {menu == 4 ? (
              <MdKeyboardArrowUp className="absolute right-2" />
            ) : (
              <MdKeyboardArrowDown className="absolute right-2" />
            )}
          </button>
          {menu == 4 && (
            <ul className="py-1 bg-white">
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> <Link to={"/material/add"}> Add Material </Link>
              </li>
              <li className="flex items-center p-2 gap-3">
                {" "}
                <FiTarget /> <Link to={"/material/view"}> View Material </Link>
              </li>
            </ul>
          )}

          {/* <MdKeyboardArrowUp className="absolute right-2" /> */}
        </li>
      </ul>
    </div>
  );
}
