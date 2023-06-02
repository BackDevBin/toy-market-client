import React from 'react';
import fb from '../../../assets/fb.png'
import twitter from '../../../assets/tw.png'
import instagram from '../../../assets/insta.png'
import pin from '../../../assets/pinta.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>


            <div className='md:flex justify-between px-10 bg-base-200'>
                <div>
                    <span className="footer-title">Connect with us</span>
                    <div className='flex py-5 space-x-5'>
                        <img src={twitter} alt="" />
                        <img src={fb} alt="" />
                        <img src={pin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>


                <div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80 py-5">

                            <div className="relative">
                                <input type="text" placeholder="Your Email Address" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-outline btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-base-200 p-5'>
                <p className='text-sm text-stone-500'>@2023 Tishan Sarker.All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;