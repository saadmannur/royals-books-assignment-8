import AllBooksRight from '@/components/allBooksSection/AllBooksRight';
import LeftSideBar from '@/components/allBooksSection/LeftSideBar';
import { getAllBooks, getCategories } from '@/lib/data';
import React from 'react';

const AllBooks = async ({ searchParams }) => {
    const result = await searchParams;
    const searchText = result?.search || "";

    const categories = await getCategories();
    // console.log(categories);

    const allBooksFromFetch = await getAllBooks();

    const allBooks = allBooksFromFetch.filter(book => 
        book.title.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <div className='grid grid-cols-15 container mx-auto md:p-10 bg-base-100'>
            <div className='col-span-3'>
                <LeftSideBar categories={categories} isActive={'1'}></LeftSideBar>
            </div>
            <div className='col-span-12'>
                <AllBooksRight allBooks={allBooks}></AllBooksRight>
            </div>
        </div>
    );
};

export default AllBooks;