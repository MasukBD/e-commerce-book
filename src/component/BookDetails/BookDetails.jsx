/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Loading from '../Loading/Loading';

const BookDetails = () => {
    const data = useLoaderData();
    const [more, setMore] = useState(true);

    const LoadingData = useNavigation();
    if (LoadingData.state === 'loading') {
        return <Loading></Loading>
    }


    return (
        <div className='w-11/12 mt-8 lg:mt-0 md:w-4/5 lg:w-3/5 mx-auto flex lg:h-screen items-center'>
            <div className='flex items-center flex-col lg:flex-row border border-gray-950 px-3 py-5'>
                <div className='w-full'>
                    <img className='w-full' src={data.image} alt="" />
                </div>
                <div className='w-full'>
                    <h1 className='text-xl font-semibold'>Book Name:  {data.title}</h1>
                    <p className='font-medium py-1'>Author: {data.authors}</p>
                    <p className='font-medium py-1'>Features: {data.subtitle}</p>
                    <p className='font-medium py-1'>Publisher: {data.publisher}</p>
                    <p className='font-medium py-1'>Version:{data.language}</p>
                    <p className='font-medium py-1'>Publish Date: {data.year}</p>
                    <p>
                        <span className='font-medium py-1'>Description:</span> {more ? `${data.desc.substring(0, 100)}...` : data.desc} <span onClick={() => setMore(!more)} className='text-blue-700 cursor-pointer'>{more ? 'Read More' : 'Read Less'}</span>
                    </p>
                    <h3 className='font-medium pt-2'>Price: {data.price}</h3>
                    <div className='flex flex-col items-center md:flex-row mt-4'>
                        <Link to='/' className='inline-flex items-center h-8 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md md:mb-0 bg-blue-400 hover:bg-blue-700 md:w-auto md:mr-4'>
                            <div className='inline-flex items-center justify-center w-full h-full'>
                                <p className=''>Buy Now</p>
                                <ShoppingCartIcon className='w-5 text-gray-100' />
                            </div>
                        </Link>
                        <Link
                            to='/about'
                            className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;