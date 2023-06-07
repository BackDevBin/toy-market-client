import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';
import useTitle from '../../../CustomHooks/useTitle';
import Swal from 'sweetalert2';

const MyToy = () => {

    const [userOwnToys, setUserOwnToys] = useState([]);
    const toys = useLoaderData();
    const user = useContext(AuthContext);
    const email = user.user.email;


    useEffect(() => {
        const userToys = toys.filter(toy => toy.seller_email === email);
        setUserOwnToys(userToys);
    }, [email])


    useTitle("My Toys");

    const handleDeleteBtn = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this Toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-market-server-eight.vercel.app/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            let remain = userOwnToys.filter(ownToy => ownToy._id !== id);
                            setUserOwnToys(remain);

                        }

                    })


                Swal.fire(
                    'Deleted!',
                    'Your Toy has been deleted.',
                    'success'
                )
            }
        })


       

    }






    return (
        <div className='mx-14 my-10'>
            <div className='w-full my-10'>
                <div className='w-50 text-center'>
                    <h3 className='text-xl font-semibold'>User : {user.user.displayName}</h3>
                    <p className='text-base font-semibold'>Total Toys: {userOwnToys.length}</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='border-2 text-base'>
                        <tr>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOwnToys.map(toy => <tr key={toy._id} className='border-2 '>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask  w-20 h-20">
                                                <img src={toy.picture} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{toy.toy_name}</div>
                                            <span className="badge badge-ghost badge-sm">Available {toy.available_quantity}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{toy.category}</td>
                                <td>USD {toy.price}</td>
                                <th>
                                    <Link to={`/update/${toy._id}`}><button className="btn btn-ghost btn-xs normal-case">Update</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteBtn(toy._id)} className="btn btn-ghost btn-xs normal-case">Delete</button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;