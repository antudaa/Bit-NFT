import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteHook from '../../../Components/DynamicRouteHook/DynamicRouteHook';


const WriteBlog = () => {

    DynamicRouteHook('Write-Blog');

    // Imagebb Host Key
    const imageHostKey = process.env.REACT_APP_imagebb_API_Key;

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleSignUp = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=63072000?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const postInfo = {
                        postTitle: data.title,
                        postImage: imageData.data.url,
                        postDescription: data.content,
                        author: user.displayName,
                        authorImage: user.photoURL,
                        date: data.date,
                        authorEmail: user.email,
                    }

                    fetch(`https://bit-nft-server.vercel.app/postBlog`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(postInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                reset();
                                toast.success("Posted Successfully...");
                            }
                        })
                        .catch(err => console.log(err.message));
                };
            });
    };

    return (
        <div>
            <div className='text-3xl my-4 mx-auto text-center lg:text-left'>
                <h2 data-aos="fade-down" className='mb-8 mt-16'>Write A Blog</h2>

                <div data-aos="fade-up" className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignUp)}>

                            <div className='block md:flex lg:flex'>
                                {/* Blog Title  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blog Title...</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Blog Title'
                                        {...register("title", { required: "Name Must have 4 or more character.", min: 8, max: 30 })}
                                        aria-invalid={errors.title ? "true" : "false"}
                                    />
                                    {errors.title && <p className='text-red-500' role="alert">{errors.title?.message}</p>}
                                </div>

                                {/* Photo File  */}
                                <div className="form-control ml-6">
                                    <label className="label">
                                        <span className="label-text">Images</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Profile Photo' type='file'
                                        {...register("image", { required: "For some security purpose Image field is required." })}
                                        aria-invalid={errors.image ? "true" : "false"}
                                    />
                                    {errors.image && <p className='text-red-500' role="alert">{errors.image?.message}</p>}

                                </div>
                            </div>

                            {/* Description   */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea className="input input-bordered h-32" placeholder='Write Content Here...'
                                    {...register("content", { required: "Email Address is required" })}
                                    aria-invalid={errors.content ? "true" : "false"}
                                />
                                {errors.content && <p className='text-red-500' role="alert">{errors.content?.message}</p>}

                            </div>

                            {/* Date  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type='datetime-local' className="input input-bordered" placeholder='Date'
                                    {...register("date", { required: "Name Must have 4 or more character.", min: 8, max: 30 })}
                                    aria-invalid={errors.date ? "true" : "false"}
                                />
                                {errors.date && <p className='text-red-500' role="alert">{errors.date?.message}</p>}
                            </div>


                            <div className='mx-auto my-4'>
                                <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteBlog;