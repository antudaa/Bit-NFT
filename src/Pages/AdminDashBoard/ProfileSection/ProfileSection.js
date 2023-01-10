import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import verified from '../../../Components/Assets/Images/tick-mark.png';
import DynamicRouteHook from '../../../Components/DynamiRouteHook/DynamicRouteHook';



const ProfileSection = () => {

    DynamicRouteHook('Profile');

    const { user } = useContext(AuthContext);

    const { data: membersList = [] } = useQuery({
        queryKey: ['membersList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/membersList/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    const { data: approvedBlogs = [] } = useQuery({
        queryKey: ['approvedBlogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/approvedBlogs/${user.email}`);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div className=''>
                <div data-aos="fade-down" className='mt-[10%] ml-[30%] lg:ml-[40%]'>
                    <div>
                        <img style={{
                            borderRadius: '50%',
                            width: '150px'
                        }} src={membersList.profilePhoto} alt="" />
                    </div>
                    <div className='text-center my-5 text-4xl flex'>
                        <h3 className='mr-6'>{membersList.name}</h3>

                        {
                            membersList?.status === 'Admin' ?
                                <img className='w-6 h-6' src={verified} alt="Verified Logo" /> :
                                <></>
                        }
                    </div>
                </div>
                <div className='text-center text-2xl'>
                    <h5>{membersList.purpose}</h5>
                </div>
                <div data-aos="fade-up">
                    {
                        approvedBlogs.map((blog) =>
                            <div className=''
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

                                            <p className="leading-relaxed">{blog.description.slice(0, 100)}...</p>

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

export default ProfileSection;