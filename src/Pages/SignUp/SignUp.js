import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signUpImage from '../../Components/Assets/Login/20602854_6325241.jpg';
import DynamicRouteHook from '../../Components/DynamiRouteHook/DynamicRouteHook';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const SignUp = () => {

    const { createUserWithEmail, updateUser } = useContext(AuthContext);


    DynamicRouteHook('Sign Up');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSignUp = (data) => {
        console.log(data)
        createUserWithEmail(data.email, data.password, data.name)
            .then(result => {
                const user = result.user;
                console.log(user);
                // const userInfo = {
                //     displayName: data.name
                // }
                // updateUser(userInfo)
                //     .then(() => {
                //         // toast(`Welcome ${userInfo}`)
                //         console.log(userInfo)
                //     })
                //     .catch((error) => {
                //         toast(`${error.message}`)
                //     })
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.message}`)
            });
    };



    return (
        <div className='bg-base-200'>
            <div>
                <h2 className='py-6 text-2xl md:text-4xl lg:text-4xl text-center'>Welcome ! Please Register .</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={signUpImage} className="lg:max-w-xl rounded-lg shadow-2xl w-86" alt='' />
                    <div className="card w-86 lg:max-w-xl flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Name'
                                        {...register("name", { required: "Name Must have 4 or more character.", min: 8, max: 30 })}
                                        aria-invalid={errors.name ? "true" : "false"}
                                    />
                                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Email'
                                        {...register("email", { required: "Email Address is required" })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Password'
                                        type="password" {...register("password", {
                                            required: "Password must be 8 character or longer.",
                                            minLength: { value: 8, message: "Password must have 8 character or long." },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

                                        })} />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                                </div>

                                <div className='mx-auto'>
                                    <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit">Sign Up</button>
                                </div>
                                <p className=' text-center'>Already have an account ? <Link to='/login' className='text-cyan-500'>Please Login.</Link> </p>
                                <div className="divider my-4 ">OR</div>
                            </form>
                            <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit"><img className='w-6 mr-4' src={<i className="fa-brands fa-google"></i>} alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;