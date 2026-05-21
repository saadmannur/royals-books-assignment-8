import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Something Went Wrong
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    Page Not Found
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable. Please check the URL or return to the homepage.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link href={"/"}>
                        <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;