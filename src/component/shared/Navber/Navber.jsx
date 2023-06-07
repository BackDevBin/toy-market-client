import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import webLogo from '../../../assets/logo.png'

const Navber = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { console.log("out") })
            .catch((error) => console.log(error))
    }

    

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link> All Toys</Link> </li>
                        <li><Link> My Toys</Link> </li>
                        <li><Link> Add A Toy</Link> </li>
                        <li><Link to="/blog"> Blogs</Link> </li>
                    </ul>
                </div>
                <Link to="/"><img className='w-24 md:mx-5' src={webLogo} alt="" /></Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/toys"> All Toys</Link> </li>
                    {
                        user ? <><li><Link to="/mytoy"> My Toys</Link> </li>
                        <li><Link to="/add"> Add A Toy</Link> </li>
                        </> : <></>
                    }
                    <li><Link to="/blog"> Blogs</Link> </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip tooltip-bottom tooltip-secondary" data-tip={user?.displayName}>
                        <img className='rounded-full w-12 mx-2' src={user?.photoURL} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn btn-outline btn-secondary normal-case md:me-5">Logout</button>
                        
                    </> : <Link to="/login"><button className="btn btn-outline btn-secondary normal-case md:me-5">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;