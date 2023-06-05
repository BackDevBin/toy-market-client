import React from 'react';
import { Link } from 'react-router-dom';

const AddToy = () => {
    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-1/2 text-center space-y-5 border-2 rounded-md '>
                <h3 className='text-xl'>Additional Information</h3>
                <div className='space-y-5'>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Toy Name" name='toy_name' className="input input-bordered input-secondary block w-full  " />
                        <input type="text" placeholder="Category" name='category' className="input input-bordered input-secondary block w-full  " />
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-secondary block w-full  " />
                        <input type="number" placeholder="Rating" name='rating' className="input input-bordered input-secondary block w-full  " />
                        <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary block w-full  " />
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Seller Name" name='Seller_name' className="input input-bordered input-secondary block w-full  " />
                        <input type="email" placeholder="Seller Email" name='email' className="input input-bordered input-secondary block w-full  " />
                    </div>
                    <input type="url" placeholder="Photo Url" name='image' className="input input-bordered input-secondary block w-full  " />
                    <textarea className="textarea textarea-secondary block w-full" placeholder="Write description" name='description' ></textarea>

                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <button className="btn btn-outline btn-secondary w-full normal-case">Add Toy</button>
                    </div>
                    <div className='text-sm '>
                        <span>Check the toy list? </span>
                        <span className='text-green-600 underline'> <Link to='/'> Go</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;