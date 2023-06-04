import React from 'react';

const Blog = () => {
    return (
        <div className='mx-14'>
            <div className='w-full h-32 flex justify-center'>
                <div className='my-auto'>
                    <h3 className='md:text-3xl font-bold'>Latest Blogs</h3>
                </div>
            </div>
            <h4 className='text-xl font-semibold'>Question & Answers:</h4>

            <div className='w-full border-t-2 space-y-4 '>

                <div>
                    <h4>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <p></p>
                </div>
                <div>
                    <h4>Compare SQL and NoSQL databases?</h4>
                    <p></p>
                </div>
                <div>
                    <h4>What is express js? What is Nest JS ?</h4>
                    <p></p>
                </div>
                <div>
                    <h4>What is MongoDB aggregate and how does it work google it</h4>
                    <p></p>
                </div>


            </div>
        </div>
    );
};

export default Blog;