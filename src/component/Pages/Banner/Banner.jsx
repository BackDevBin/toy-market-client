import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {  //h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    return (
        <div >
            <div className='relative '>
                <img className='' src={banner} alt="" />
                <div className='md:absolute md:bottom-10 md:left-32 bg-base-200 h-56 md:w-2/5 rounded opacity-90 p-8 space-y-4'>
                    <hr className='w-1/4 border-4 border-lime-500'></hr>
                    <h3 className='text-4xl font-bold'>The Jungle Toy</h3>
                    <p className='text-slate-900'>Take your child on a wildlife learning expedition with The Jungle toys for toddlers and preschoolers. These large, colorful animals are perfect for pretend play at home and in the classroom.</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;