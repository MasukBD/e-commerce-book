/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default BookDetails;