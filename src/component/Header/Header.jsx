/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-gray-100 w-11/12 mx-auto h-14 flex items-center justify-between rounded-b-lg'>
            <Link to="/" className='inline-flex items-center ml-2'>
                <BookOpenIcon className="h-8 w-8 text-blue-500"></BookOpenIcon>
                <span className='text-3xl font-semibold tracking-wide ml-2'>TechBooks</span>
            </Link>

            {/* small device dropDwon Menu  */}
            <span className='md:hidden' onClick={() => setOpen(!open)}> {
                open === true ? <XMarkIcon className="h-6 w-6 cursor-pointer"></XMarkIcon> : <Bars3Icon className="h-6 w-6 cursor-pointer"></Bars3Icon>
            }</span>


            <ul className={`flex  items-center space-x-7 mr-2 duration-500 absolute md:static ${open ? 'top-14' : '-top-36'}`}>
                <li className='font-semibold'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
                        Home
                    </NavLink>
                </li>
                <li className='font-semibold'>
                    <NavLink
                        to='/books'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
                        Books
                    </NavLink>
                </li>
                <li className='font-semibold'>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
                        About Books
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
};

export default Header;