import React from 'react';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { MdMarkEmailRead, MdOutlineLocationCity } from 'react-icons/md';
import logo from "@/assets/book.png"
import Image from 'next/image';
import { LuFacebook } from 'react-icons/lu';
import { FaAmazonPay, FaTwitter } from 'react-icons/fa';
import { RiVisaFill, RiYoutubeLine } from 'react-icons/ri';
import { CiLinkedin } from 'react-icons/ci';
import Link from 'next/link';
import { SlPaypal } from 'react-icons/sl';
import { SiFampay } from 'react-icons/si';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#012e4a] text-white'>
                <div className='container mx-auto py-10'>
                    <div className='border-b pb-5 border-gray-400'>
                        <h2 className='text-4xl font-bold text-center'>Contract US</h2>
                        <div className='space-y-5 lg:space-y-0 lg:flex items-center justify-between my-8'>
                            <div className='flex items-center gap-2'>
                                <span className='border border-white p-3 text-3xl rounded-full flex items-center justify-center border-dotted'><FiPhoneCall /></span>
                                <div>
                                    <p className='text-sm'>Call Us 7/24</p>
                                    <h2 className='font-bold text-lg'>+880 1603 967062</h2>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <span className='border border-white p-3 text-3xl rounded-full flex items-center justify-center border-dotted'><MdMarkEmailRead /></span>
                                <div>
                                    <p className='text-sm'>Make a Quote</p>
                                    <h2 className='font-bold text-lg'>saadmannoor999@gmail.com</h2>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <span className='border border-white p-3 text-3xl rounded-full flex items-center justify-center border-dotted'><BiSolidDoorOpen /></span>
                                <div>
                                    <p className='text-sm'>Opening Hour</p>
                                    <h2 className='font-bold text-lg'>Sunday - Fri: 9 aM - 6 pM</h2>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <span className='border border-white p-3 text-3xl rounded-full flex items-center justify-center border-dotted'><MdOutlineLocationCity /></span>
                                <div>
                                    <p className='text-sm'>Location</p>
                                    <h2 className='font-bold text-lg'>4517 Washington ave.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 space-y-5 lg:space-y-0 lg:flex justify-between items-center'>
                        <div className='space-y-8'>
                            <div className='flex items-center' >
                                <Image
                                    src={logo}
                                    alt='website logo'
                                    width={100}
                                    height={100}
                                    className=''
                                ></Image>
                                <h2 className='text-2xl font-semibold'>Royals Books</h2>
                            </div>
                            <p className='text-sm'>Books are a source of knowledge, imagination, <br /> and personal growth.</p>
                            <div className='flex text-2xl gap-3 items-center'>
                                <span className='border border-gray-300 p-2 hover:bg-amber-700'><LuFacebook /></span>
                                <span className='border border-gray-300 p-2 hover:bg-amber-700'><FaTwitter /></span>
                                <span className='border border-gray-300 p-2 hover:bg-amber-700'><RiYoutubeLine /></span>
                                <span className='border border-gray-300 p-2 hover:bg-amber-700'><CiLinkedin /></span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>Costumers Support</h2>
                            <ol className='text-sm'>
                                <li>Store List</li>
                                <li>Contract Us</li>
                                <li>Opening Hours</li>
                                <li>Return Policy</li>
                            </ol>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>Categories</h2>
                            <ol className='text-sm'>
                                <li>Story Books</li>
                                <li>Science Books</li>
                                <li>Tech Books</li>
                            </ol>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>Newsletter</h2>
                            <p className='text-sm mb-5'>Sign up to searing weekly newsletter <br /> to get the latest updates.</p>
                            <Link href={"/register"}>
                                <button className='btn btn-primary'>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#036280] py-5'>
                <div className='container mx-auto flex justify-between text-white'>
                    <p><small>© All Copyright 2024 by Royals Books</small></p>
                    <div className='flex items-center gap-5 text-2xl'>
                        <RiVisaFill />
                        <FaAmazonPay />
                        <SlPaypal />
                        <SiFampay />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;