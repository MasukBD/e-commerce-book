/* eslint-disable no-unused-vars */
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center h-[calc(100vh-56px)] items-center'>
            <div className='inline-block border-4 border-dashed duration-1000 animate-spin border-blue-600 p-8 rounded-full'></div>
            <span className='font-medium text-2xl ml-1'>Loading...</span>
        </div>
    );
};

export default Loading;