import React, { useEffect, useState } from 'react';

const Gallery = () => {

    const [images, setImages] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/images')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])


    return (
        <div className='rounded-lg md:mx-14 my-10'>

            <div className='text-center mb-8 space-y-2'>
                <h3 className='md:text-3xl font-bold'>Photos Gallery</h3>
                <p className='text-base text-slate-400 max-w-xl mx-auto'>Having and being with every family and friends. Happiness is about being nice and spreading love all around the world.</p>
            </div>
             
            <div className='grid grid-cols-4 md:gap-1 bg-slate-600'>
                {
                    images.map(image => <img key={image._id} className='w-full h-full transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150' src={image.url} alt="" />)
                }
            </div>


        </div>
    );
};

export default Gallery;