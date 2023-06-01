import React from 'react';
import fb from '../../../assets/fb.png'
import twitter from '../../../assets/tw.png'
import instagram from '../../../assets/insta.png'
import pin from '../../../assets/pinta.png'


const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <p>Logo Here</p>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
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
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
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