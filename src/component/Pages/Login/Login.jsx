import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-80 text-center space-y-5 border-2 rounded-md '>
                <h3 className='text-xl'>Sign In</h3>
                <div className='space-y-5'>
                    <input type="email" placeholder="Email" name='name' className="input input-bordered input-secondary block w-full max-w-xs " />
                    <div>
                        <input type={show ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered input-secondary block w-full max-w-xs" />
                        <p onClick={() => setShow(!show)} className='text-start text-sm text-stone-500'><small>
                            {
                                show ? <span className="link link-hover">Hide Password</span> : <span className="link link-hover">Show Password</span>
                            }
                        </small></p>

                    </div>
                    <div className='flex mx-auto space-x-3 w-60'>
                        <button className="btn btn-outline btn-secondary normal-case">Login</button>
                        <h3 className='p-3'>Or</h3>
                        <button className="btn btn-outline btn-secondary normal-case"><FaGoogle></FaGoogle> Google</button>
                    </div>
                    <div className='text-sm '>
                        <span>New Customer?</span>
                        <span className="underline"> <Link to='/register'>Create Account</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;