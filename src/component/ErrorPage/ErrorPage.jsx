/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const getError = useRouteError();
    const { status, statusText, data } = getError;
    return (
        <div className='flex flex-col justify-center items-center h-96'>
            <h1 className='font-semibold text-7xl'>{status}</h1>
            <p className='font-semibold text-9xl my-2'>{statusText}</p>
            <p className='font-medium'>{data}</p>
        </div>
    );
};

export default ErrorPage;