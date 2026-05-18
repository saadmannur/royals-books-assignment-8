import Image from 'next/image';
import React from 'react';
import userImg from "@/assets/user.png"
import Link from 'next/link';

const NavBtn = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <Image
                src={userImg}
                alt='user'
                width={40}
                height={40}
                className='rounded-full'
            ></Image>
            <Link href={"/login"}>
                <button className='btn bg-[#036280] text-white'>Login</button>
            </Link>
        </div>
    );
};

export default NavBtn;