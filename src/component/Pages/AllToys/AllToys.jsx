import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import userlogo from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import useTitle from '../../../CustomHooks/useTitle';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-market-server-eight.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    useTitle("All Toys");

        

    return (
        <div className='mx-14 my-10'>

            <div className='text-center my-5'>
            <h3 className='md:text-2xl font-bold'>All Added Toys</h3>
            </div>
            <p className='text-xs'>Result showing {toys.length} out of 20</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller info</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy =><tr key={toy._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                     <img src={userlogo} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{toy.seller_name}</div>
                                            <div className="text-sm opacity-50">{toy.seller_email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{toy.toy_name}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Available {toy.available_quantity}</span>
                                </td>
                                <td>{toy.category}</td>
                                <td>USD {toy.price}</td>
                                <th>
                                    <Link to={`/details/${toy._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                                </th>
                            </tr>)
                        }
                        
                        
                  
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default AllToys;