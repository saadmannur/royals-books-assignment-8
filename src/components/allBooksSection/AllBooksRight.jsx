import React from 'react';
import BooksCard from './BooksCard';

const AllBooksRight = ({ allBooks }) => {
    return (
        <div>
            <h2 className="text-xl text-[#012e4a] font-bold mb-6 text-center">All Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 md:p-5'>
                {
                    allBooks.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooksRight;