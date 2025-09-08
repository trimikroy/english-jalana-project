import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoLogOut } from 'react-icons/io5';
const Navbar = () => {
    return (
        <div className="navbar bg-cyan-50 shadow-sm flex justify-between px-18">
            <Link className='flex justify-center items-center'>
                <h2 className='font-poppins font-[600]'>English</h2>
                <img className='w-[40px] h-[40px]' src={logo} alt="" />
                <h2 className='font-siliguri font-[400]'>জানালা</h2>
            </Link>
            <div className='flex gap-2 font-poppins'>
                <Link className='border-1 flex justify-center items-center gap-1 rounded-sm font-semibold text-sm text-[#422AD5] hover:bg-blue-300  border-blue-600  hover:text-amber-50 px-2'>
                    <FaQuestionCircle /> FAQ</Link>
                <Link className='border-1 flex justify-center items-center gap-1 rounded-sm font-semibold text-sm text-[#422AD5] hover:bg-blue-300  border-blue-600 hover:text-amber-50 py-1 px-2'>
                    <MdOutlineMenuBook /> Learn</Link>
                <Link className='border-1 flex justify-center items-center gap-1 rounded-sm font-semibold text-sm text-[#422AD5] hover:bg-blue-300  border-blue-600 hover:text-amber-50  py-1 px-2'>
                   <IoLogOut /> Logout</Link>
               
            </div>
        </div>
    );
};

export default Navbar;