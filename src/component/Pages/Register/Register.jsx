import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false);
    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');


    const {createUser} = useContext(AuthContext);

   
    const handleSignUpForm = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const name = form.name.value;
        const photo = form.image.value;
       
        console.log(email,pass,name,photo);

        setError('');
        setSuccess('');

        // if(pass < 6 ){
        //     setError('Password Must Be Six Characters');
        // }


        createUser(email,pass)
        .then(result =>{
            const logUser = result.user;
            setSuccess('Registration Successful !!!');
            form.reset();
            // console.log(logUser);
        })
        .catch(error =>{
            // console.log(error.message);
            setError(error.message);
        })

    }





    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-1/2 text-center space-y-5 border-2 rounded-md '>
                <h3 className='text-xl'>Create Account</h3>
                <form onSubmit={handleSignUpForm} className='space-y-5'>
                    <input type="text" placeholder="Full Name" name='name' className="input input-bordered input-secondary block w-full  " />
                    <input type="email" placeholder="Your Email" name='email' className="input input-bordered input-secondary block w-full  " />
                    <input type="text" placeholder="Photo Url" name='image' className="input input-bordered input-secondary block w-full  " />
                    <div>
                        <input type={show ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered input-secondary block w-full " />
                        <p onClick={() => setShow(!show)} className='text-start text-sm text-stone-500'><small>
                            {
                                show ? <span className="link link-hover">Hide Password</span> : <span className="link link-hover">Show Password</span>
                            }
                        </small></p>

                    </div>
                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <button className="btn btn-outline btn-secondary w-full normal-case">Create</button>
                    </div>
                    <div className='text-sm '>
                        <span>Already have an account? </span>
                        <span className="underline"> <Link to='/login'>Please Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;