import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../CustomHooks/useTitle';

const AddToy = () => {

    const user = useContext(AuthContext);
    const email = user.user.email;

    useTitle("Add A Toy");

    const HandleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.name.value;
        const seller_email = form.email.value;
        const toy_name = form.toy.value;
        const available_quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const detail_description = form.details.value;
        const picture = form.image.value;
        const toyDetails = { seller_name, seller_email, toy_name, category, price, available_quantity, picture, detail_description, rating };

        //console.log(toyDetails)
        fetch(`https://toy-market-server-eight.vercel.app/toys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){

                    Swal.fire({
                        title: 'Toy Added Successfully !!!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                      })

                }

            })

            form.reset();
    }



    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-1/2 text-center border-2 rounded-md '>
                <h3 className='text-xl mb-8'>Toy Information</h3>
                <form onSubmit={HandleAddToy} className='space-y-5'>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Toy Name" name='toy' className="input input-bordered input-secondary block w-full  " required />
                        <select className="select select-secondary w-full max-w-xs" name='category' >
                            <option>Teddy Bear</option>
                            <option>Horse</option>
                            <option>Dinosaur</option>
                            <option>Unicorn</option>
                        </select>
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-secondary block w-full  " required />
                        <input type="text" placeholder="Rating" name='rating' className="input input-bordered input-secondary block w-full  " required />
                        <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary block w-full  " required />
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Seller Name" name='name'  className="input input-bordered input-secondary block w-full  " required />
                        <select className="select select-secondary w-full max-w-xs" name='email' required>
                            <option defaultValue={email}>{email}</option>
                        </select>
                    </div>
                    <input type="url" placeholder="Photo Url" name='image' className="input input-bordered input-secondary block w-full  " required />
                    <textarea className="textarea textarea-secondary block w-full" placeholder="Write description" name='details' required ></textarea>

                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <input className="btn btn-outline btn-secondary w-full normal-case" type="submit" value="Add Toy" />
                    </div>
                    <div className='text-sm '>
                        <span>Check the my toy list? </span>
                        <span className='text-green-600 underline'> <Link to='/mytoy'> Go</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;