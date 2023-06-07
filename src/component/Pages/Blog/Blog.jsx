import React from 'react';
import useTitle from '../../../CustomHooks/useTitle';

const Blog = () => {

    useTitle("Blogs");

    return (
        <div className='mx-14'>
            <div className='w-full h-32 flex justify-center'>
                <div className='my-auto'>
                    <h3 className='md:text-3xl font-bold'>Latest Blogs</h3>
                </div>
            </div>
            <h4 className='text-xl font-semibold'>Question & Answers:</h4>

            <div className='w-full border-t-2 '>

                <div className='bg-gray-200 p-5 space-y-3 mt-5 '>
                    <h4 className='text-xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <p>A refresh token allows you to re-authenticate a user without having to re-enter their login credentials multiple times. The access token is reissued, if the refresh token is a valid one requesting permission to access confidential resources.</p>
                    <p>The authentication server sends the access token and refresh token to the client. The client stores tokens in local storage or as HTTP-only and secure cookies. The client sends the access token with each request to access the protected resource.</p>
                </div>
                <div className='bg-gray-100 p-5 space-y-3'>
                    <h4 className='text-xl font-semibold'>Compare SQL and NoSQL databases?</h4>
                    <p>SQL defines and manages databases using the data-oriented Structured Query Language (SQL), which is a relational database whereas NoSQL is a non-relational or distributed database.,
                        SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pair, and graph databases. 
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. 
                        Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
                </div>
                <div className='bg-gray-200 p-5 space-y-3 '>
                    <h4 className='text-xl font-semibold'>What is express js? What is Nest JS ?</h4>
                    <p>Express.js is a back-end web application framework for building RESTful APIs with Node.js, Express JS is a Node.js framework for rapidly building web applications with cross-platform mobile apps APIs, and Node js Designed to simplify A single page, multipage and hybrid web application.
                    It is a layer built on top of Node JS that helps manage servers and routes</p>
                    <p>Nest. js is one of the fastest-growing nodes. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                </div>
                <div className='bg-gray-100 p-5 space-y-3 mb-10 '>
                    <h4 className='text-xl font-semibold'>What is MongoDB aggregate and how does it work ?</h4>
                    <p>Aggregation is a way of processing a large number of documents into a collection by going through several steps. Creates stages known as pipelines. Pipeline stages can filter, sort, group, resize, and modify documents passing through the pipeline.</p>
                    
                </div>


            </div>
        </div>
    );
};

export default Blog;