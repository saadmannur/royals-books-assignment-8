"use client"
import Image from 'next/image';
import React from 'react';
import userImg from "@/assets/user.png"
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { usePathname, useRouter } from 'next/navigation';

const NavBtn = () => {
    const pathname = usePathname();
    // console.log(pathname);

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const router = useRouter();
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    };

    if (isPending) {
        return <span className="loading loading-spinner loading-md"></span>
    }

    return (
        <>
            {
                user && pathname !== "/login" ?
                    <div className='flex justify-center items-center gap-2'>
                        <h2 className='text-green-800 mr-5 hidden md:block'>Hello, {user?.name}</h2>
                        <Image
                            src={user?.image}
                            alt={user?.name}
                            width={45}
                            height={45}
                            className='rounded-full  w-[45px] h-[45px] object-cover'
                        ></Image>

                        <button 
                            onClick={handleSignOut}
                        className='btn bg-[#036280] text-white'>LogOut</button>

                    </div> :

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
            }
        </>
    );
};

export default NavBtn;