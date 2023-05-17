/* eslint-disable no-unused-vars */
import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='bg-gray-100 w-11/12 mx-auto h-14 flex items-center justify-between'>
            <Link to="/" className='inline-flex items-center ml-2'>
                <BookOpenIcon className="h-8 w-8 text-blue-500"></BookOpenIcon>
                <span className='text-3xl font-semibold tracking-wide ml-2'>TechBooks</span>
            </Link>

            <ul className=' lg:flex items-center hidden space-x-7 mr-2'>
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