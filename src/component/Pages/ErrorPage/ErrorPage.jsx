import React from 'react';
import sad from '../../../assets/sad.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen w-full border-4 border-black relative'>
            <div className='text-center space-y-5 absolute bottom-28 left-20 right-20'>
               <img className='w-40 mx-auto' src={sad} alt="" />
               <h1 className='text-8xl font-bold'>404</h1>
               <h3 className='text-4xl'>Page not found</h3>
               <p className='text-gray-500'>The Page you are looking for doesn't exist or an error occurred. Please <Link to='/'><span className='text-green-600 font-semibold'>Go Back</span></Link>  </p>
            </div>
        </div>
    );
};

export default ErrorPage;