import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../CustomHooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { seller_name, seller_email, toy_name, category, price, available_quantity, picture, detail_description, rating } = toy;

    useTitle("Toy Details");
    // console.log(toy);

    return (
        <div className='md:mx-14 my-20'>

            <div className="card bg-base-100 shadow-xl">

                <div className="md:grid grid-cols-3">
                    <div className='px-3 pb-3 rounded-lg'>
                        <figure><img  src={picture} /></figure>
                    </div>
                    <div className='col-span-2 me-10'>
                        <h3 className='text-2xl font-semibold'>{toy_name}</h3>
                        <div className='flex align-middle border-b pb-1 w-fit mb-5'>
                            <FaStar className='text-yellow-400 text-base mt-1'></FaStar>
                            <FaStar className='text-yellow-400 text-base mt-1'></FaStar>
                            <FaStar className='text-yellow-400 text-base mt-1'></FaStar>
                            <FaStar className='text-yellow-400 text-base mt-1'></FaStar>
                            <FaStar className=' text-base mt-1'></FaStar>
                            <p className='mx-2 text-base text-slate-500'>{rating} rating | {category}</p>
                        </div>
                        <p className='text-xl font-semibold mb-5'>$ <span className='text-2xl font-semibold'>{price}</span></p>
                        <p className='text-base font-semibold mb-3 text-gray-500'>Quantity: <span className='bg-slate-100 text-sm rounded-lg py-1 px-3'>{available_quantity} pieces Available</span></p>
                        <p className='text-gray-500 mb-3'><span className='text-base font-semibold '>Additional Information: <br></br> </span> {detail_description}</p>
                        <div>
                            <h3 className='text-base font-semibold border-b pb-1 text-gray-800'>Seller Information:</h3>
                            <div className='bg-blue-100 p-2 mt-1 text-gray-500 text-sm'>
                                <p>Seller Name: {seller_name}</p>
                                <p>Email: {seller_email}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;