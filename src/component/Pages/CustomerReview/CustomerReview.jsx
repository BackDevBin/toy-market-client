import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Marquee from "react-fast-marquee";


const CustomerReview = () => {

    const [reviews, SetReviews] = useState([]);


    useEffect(() => {
        fetch('reviewData.js')
            .then(res => res.json())
            .then(data => SetReviews(data))
    }, [])



    return (
        <div className='md:mx-14 my-10'>

            <div className='text-center mb-8 space-y-1'>
                <h3 className='md:text-3xl font-bold'>Customers Speak For Us</h3>
                <div className='flex justify-center'>
                                <FaStar className='text-yellow-400 text-base'></FaStar>
                                <FaStar className='text-yellow-400 text-base'></FaStar>
                                <FaStar className='text-yellow-400 text-base'></FaStar>
                                <FaStar className='text-yellow-400 text-base'></FaStar>
                                <FaStar className='text-yellow-400 text-base'></FaStar>
                            </div>
                <p className='text-sm underline text-slate-400'>from 205 reviews</p>
            </div>

            <Marquee pauseOnHover={true}>
                <div className='flex'>
                    {
                        reviews.map(review => <div key={review.id} className='text-center space-y-3 border-2 shadow-lg rounded-lg me-8 p-4 w-56 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150'>
                            <div className='flex justify-center'>
                                <FaStar className='text-yellow-400 text-2xl'></FaStar>
                                <FaStar className='text-yellow-400 text-2xl'></FaStar>
                                <FaStar className='text-yellow-400 text-2xl'></FaStar>
                                <FaStar className='text-yellow-400 text-2xl'></FaStar>
                                <FaStar className='text-yellow-400 text-2xl'></FaStar>
                            </div>
                            <div className='space-y-3'>
                                <h3 className='text-xl'>{review.full_name}</h3>
                                <p className='text-slate-400 text-sm'>{review.feedback}</p>
                            </div>
                        </div>

                        )
                    }

                </div>
            </Marquee>



        </div>
    );
};

export default CustomerReview;