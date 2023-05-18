/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from 'lottie-react';
import techAnim from '../../assets/tech-animation.json';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, useNavigation } from 'react-router-dom'
import Loading from '../Loading/Loading';

const Home = () => {
    const loadingData = useNavigation();
    if (loadingData.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10 md:mt-0 flex flex-col md:flex-row justify-between w-11/12 mx-auto items-center'>
            {/* Text Content */}
            <div className=''>
                <div className='max-w-xl mb-6 lg:mt-8 text-center md:text-left'>
                    <div>
                        <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400'>On Sale!</p>
                    </div>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                        A reader lives a <br className='hidden md:block' /> thousand lives{' '}
                        <span className='inline-block text-blue-400'>before he dies</span>
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Books are a uniquely portable magic. Books serve to show a man that
                        those original thoughts of his aren’t very new after all. The man
                        who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700 md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
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
            {/* Lottie Animation */}
            <div className='lg:w-2/3'>
                <div className='w-full lg:w-4/5 lg:ml-auto'>
                    <Lottie animationData={techAnim} loop={true} />
                </div>
            </div>
        </div>
    )
};

export default Home;