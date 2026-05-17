import AllBooksRight from '@/components/allBooksSection/AllBooksRight';
import LeftSideBar from '@/components/allBooksSection/LeftSideBar';
import { getAllBooks, getBooksByCategory, getCategories } from '@/lib/data';
import React from 'react';

const BooksCategoryPage = async ({ params }) => {

    const { id } = await params;

    const categories = await getCategories();
    
        const allBooks = await getBooksByCategory(id);

    return (
        <div className='grid grid-cols-15 container mx-auto md:p-10'>
            <div className='col-span-3'>
                <LeftSideBar categories={categories} isActive={id}></LeftSideBar>
            </div>
            <div className='col-span-12'>
                <AllBooksRight allBooks={allBooks}></AllBooksRight>
            </div>
        </div>
    );
};

export default BooksCategoryPage;