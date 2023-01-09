import { useQuery } from '@tanstack/react-query';
import React from 'react';



const Blog = () => {

    const { data: approvedBlogs = [] } = useQuery({
        queryKey: ['approvedBlogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/approvedBlogs');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <h2 className='text-2xl lg:text-4xl text-center my-8'>BLOG</h2>
            <div className=''>
                <div className=''>
                    {
                        approvedBlogs.map((blog) =>
                            <div data-aos="fade-up" className=''
                                key={blog._id} style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                }}>
                                <div className="container px-5 py-6 mx-auto" >
                                    <div style={{
                                        border: '1px solid'
                                    }} className="lg:w-4/5 mx-auto flex flex-wrap rounded">
                                        {
                                            blog?.postImage ?
                                                <img alt="Eco" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={blog.postImage} /> :
                                                <img alt="Eco" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://stackdiary.com/140x100.png" />
                                        }
                                        <div className="lg:w-1/2 w-full px-4 lg:px-10 lg:py-6 mt-6 lg:mt-0" >
                                            <h2 className="text-sm title-font tracking-widest" >{blog.postTime}</h2>
                                            <h1 className=" text-3xl title-font font-medium mb-1" >{blog.title}</h1>

                                            <p className="leading-relaxed">{blog.description}</p>

                                            <div className="flex my-6">
                                                <span className="title-font font-medium text-2xl text-gray-900">
                                                    <div className="flex mb-4">
                                                        <div className="rating">
                                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                                        </div>

                                                    </div>
                                                </span>
                                                <h3 className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{blog.authorName}</h3>
                                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <img className='rounded-full' src={blog.authorImg} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;