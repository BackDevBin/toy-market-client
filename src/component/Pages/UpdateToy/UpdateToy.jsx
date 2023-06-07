import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../CustomHooks/useTitle';

const UpdateToy = () => {

    const toy = useLoaderData();


    useTitle("Update Toy");


    const handleUpdateBtn = event => {

        event.preventDefault();
        const form = event.target;
        
        const available_quantity = form.quantity.value;
        const price = form.price.value;
        const detail_description = form.details.value;
        const toyDetails = {  price, available_quantity, detail_description };

        console.log(toyDetails);

        fetch(`https://toy-market-server-eight.vercel.app/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.modifiedCount > 0){

                    Swal.fire({
                        title: 'Sucessful!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })

                }

            })


    }

    return (
        <div className='w-full'>
            <div className='w-1/2 mx-auto my-10 border-2 p-8 text-center rounded-lg'>
                <div>
                <h3 className='text-xl my-8'>Update Information</h3>
                </div>
                <form onSubmit={handleUpdateBtn} className='space-y-5'>

                    <div className='flex gap-5'>
                        <input type="text" placeholder="Price" defaultValue={toy.price} name='price' className="input input-bordered input-secondary block w-full  " required />
                        <input type="number" placeholder="Quantity" defaultValue={toy.available_quantity} name='quantity' className="input input-bordered input-secondary block w-full  " required />
                    </div>
                    <textarea className="textarea textarea-secondary block w-full" placeholder="Write description" defaultValue={toy.detail_description} name='details' required ></textarea>

                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <input className="btn btn-outline btn-secondary w-full normal-case" type="submit" value="Update" />
                    </div>
                    <div className='text-sm '>
                        <span>Check the my toy list? </span>
                        <span className='text-green-600 underline'> <Link to='/'> Go</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;