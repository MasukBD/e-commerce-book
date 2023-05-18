/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';

const Books = () => {
    const AllBookData = useLoaderData();
    const booksData = AllBookData.books;
    return (
        <div className='w-11/12 mx-auto my-10 p-3'>
            <div className='grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    booksData.map(book => <BookCard book={book} key={book.isbn13
                    }></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;