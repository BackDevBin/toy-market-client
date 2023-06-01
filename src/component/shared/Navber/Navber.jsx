import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle  } from 'react-icons/fa';

const Navber = () => {  //All Toys, My Toys, Add A Toy, Blogs
    return (
        <div class="navbar bg-base-200">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>My Toys</Link></li>
                        <li>
                            <Link>All Toys</Link>
                            <ul class="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                                <li><Link>Submenu 3</Link></li>
                            </ul>
                        </li>
                        <li><Link>Add A Toy</Link></li>
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <Link class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><Link>My Toys</Link></li>
                    <li tabindex="0">
                        <details>
                            <summary>All Toys</summary>
                            <ul class="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link>Add A Toy</Link></li>
                    <li><Link>Blogs</Link></li>
                    
                </ul>
            </div>
            <div class="navbar-end">
                <Link>Sign In</Link>
                <Link className='text-3xl'><FaUserCircle></FaUserCircle></Link>
            </div>
        </div>
    );
};

export default Navber;