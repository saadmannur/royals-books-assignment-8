import DetailsButton from '@/components/detailsButton/DetailsButton';
import { getBooksDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksDetailsPage = async ({ params }) => {

    const { id } = await params;
    const booksDetails = await getBooksDetails(id);
    const { image_url, available_quantity, category, description, author, title} = booksDetails;

    return (
        <div className='grid md:grid-cols-2 items-center gap-5 border border-gray-200 rounded-2xl m-5 md:m-10 p-5'>
            <div className='col-span-1 bg-base-300 p-5 rounded-2xl'>
                <Image
                    src={image_url}
                    alt={title}
                    width={400}
                    height={600}
                    className='w-auto h-full mx-auto shadow-xl'      
                ></Image>
            </div>
            <div className='col-span-1 space-y-5'>
                <h2 className='text-4xl font-bold'>{title}</h2>

                <p className='text-xl font-semibold'>Author: <span className='text-gray-500'>{author}</span></p>

                <p className='text-xl font-semibold'>Description: <span className='text-gray-500'>{description}</span></p>

                <p className='text-xl font-semibold'>Available Quantity: <span className='text-gray-500'>{available_quantity} copies left</span></p>

                <DetailsButton title={title}></DetailsButton>
            </div>
        </div>
    );
};

export default BooksDetailsPage;