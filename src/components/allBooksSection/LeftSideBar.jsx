import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, isActive }) => {
    return (
        <div className='sticky top-5'>
            <h2 className="text-xl font-bold mb-6">All Categories</h2>
            <ul className='space-y-2'>
                {
                    categories.map(category => <li
                        className={`${isActive == category.id && "bg-[#012e4a] text-white hover:bg-pink-800"} text-lg  md:pl-10 hover:bg-gray-200`}
                        key={category.id}>
                        <Link href={`${category.id == '1' ? `/allbooks` : `/allbooks/category/${category.id}`}`} className='block p-1.5'>{category.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;