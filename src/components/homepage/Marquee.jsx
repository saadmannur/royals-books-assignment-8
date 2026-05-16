import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueePage = () => {

    const marqueeData = [
        {
            id: 1,
            text: "New Arrivals: The Silent Patient"
        },
        {
            id: 2,
            text: "Special Discount on Memberships"
        },
        {
            id: 3,
            text: "New Release: Atomic Habits"
        },
        {
            id: 4,
            text: "Buy 2 Books & Get 1 Free"
        },
        {
            id: 5,
            text: "Trending Now: Rich Dad Poor Dad"
        },
        {
            id: 6,
            text: "Weekend Offer: 30% Off Selected Books"
        },
        {
            id: 7,
            text: "Fresh Collection Added in Science Category"
        },
        {
            id: 8,
            text: "Free Bookmark with Every Purchase"
        }
    ];

    return (
        <div className='flex items-center my-2 border border-gray-200 p-2'>
            <button className='btn bg-[#012e4a] md:px-8 text-white'>Latest Update</button>
            <Marquee pauseOnHover={true} speed={80}>
                {
                    marqueeData.map(data => <p className='mx-8 md:mx-10 font-semibold text-[#012e4a]' key={data.id}>{data.text}</p>)
                }
            </Marquee>
        </div>
    );
};

export default MarqueePage;