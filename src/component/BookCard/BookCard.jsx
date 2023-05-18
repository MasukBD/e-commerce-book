/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    const { image, isbn13, price, subtitle, title, url } = props.book;
    return (
        <Link to={`/books/${isbn13}`}><div className='relative overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-3 hover:cursor-pointer'>
            <div>
                <img className='object-cover w-full' src={image} alt="" />
            </div>
            <div className='bg-black text-white inset-0 opacity-0 hover:opacity-100 bg-opacity-70 absolute flex flex-col p-3 transition duration-300 rounded-lg shadow-lg'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <p className='text-xl my-auto'>Description: {subtitle ? (subtitle).substring(0, 50) : 'Not Avilable'}...</p>
                <h2 className='mt-auto text-xl'>Price: {price ? price : 'Not Avilable'}</h2>
            </div>
        </div></Link>
    );
};

export default BookCard;