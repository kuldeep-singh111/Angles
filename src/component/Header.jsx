import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import profile from "../assets/image/profile.jpg";
import "./header.css";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Header = ({ handleToggle }) => {
  return (
    <>
      <nav className='navbar'>
        <span className="iconss" onClick={handleToggle}><RiMenuUnfoldLine /></span>
        <input placeholder='Search by company name...' className='searchBox' />
        <span className="three">
          <span className='noti'>
            <IoNotificationsOutline /> <small>4</small>
          </span>
          <span className='profile'>
            <img src={profile} alt='Profile' className='image' />
          </span>
          <span className='name-data'>
            <span className='profile-name'>Shailesh Vickram</span>
            <span className='tag'>Investor</span>
          </span>
          <span className='drop-menu'><IoIosArrowDropdown /></span>
        </span>
      </nav>
    </>
  );
};

export default Header;
