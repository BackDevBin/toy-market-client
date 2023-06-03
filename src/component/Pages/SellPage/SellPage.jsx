import React from 'react';
import pig from '../../../assets/pig-color.png';
import sale from '../../../assets/sale.png';

const SellPage = () => {
    return (
        <div className='bg-pink-300 text-center md:mx-14 my-10 md:p-16 p-8 rounded-lg space-y-5'>
            <div className='text-start mb-8 space-y-2'>
                <h3 className='md:text-3xl font-bold'>Sell With Us</h3>
                <p className='text-base max-w-2xl'>We offer two convenient ways to consign your used toys and baby gear-curbside pickup in select metro areas, plus clean-out boxes nationwide.</p>
            </div>

            <div className='flex justify-around md:mx-28'>
                <div className='space-y-2'>
                    <img className='w-32 h-32' src={sale}></img>
                    <h3 className='md:text-2xl font-bold'>Sell Product</h3>
                </div>
                <div className='space-y-2'>
                    <img className='w-32 h-32' src={pig}></img>
                    <h3 className='md:text-2xl font-bold'>Get Paid</h3>
                </div>
            </div>
            <button className="btn btn-outline btn-secondary normal-case">Start Selling Now</button>
        </div>
    );
};

export default SellPage;