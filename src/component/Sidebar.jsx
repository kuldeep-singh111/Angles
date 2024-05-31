import React from 'react';
import sidebar from "../assets/image/sidebar.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiCurrencyInr } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineTableChart } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { GrDocumentText } from "react-icons/gr";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./sidebar.css";

const Sidebar = ({ className, handleClose, isMobile }) => {
  return (
    <div className={`main-container ${className}`}>
      <div className='container'>
        {isMobile && <span className="close-icon" onClick={handleClose}><IoMdClose /></span>}
        <span className="logo">
          <img className='logo-image' src={sidebar} alt="Logo" />
          <p className='logo-name'>Climate Angles</p>
        </span>
        <ul className='all-item'>
          <li className='item-active'><span className='port'><FaArrowTrendUp /> </span> Portfolio</li>
          <li className='item'><PiCurrencyInr /> Invest</li>
          <li className='item'><IoIosPeople /> Syndicates</li>
          <li className='item'><MdOutlineTableChart /> Ledger</li>
          <li className='item'><GoArrowSwitch /> Messages</li>
          <li className='item'><SlCalender /> Events</li>
          <li className='item'><GrDocumentText /> News & Blogs</li>
          <li className='item'><CiCircleQuestion /> Help & Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
