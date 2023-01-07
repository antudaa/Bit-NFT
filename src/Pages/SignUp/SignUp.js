import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signUpImage from '../../Components/Assets/Login/20602854_6325241.jpg';
import DynamicRouteHook from '../../Components/DynamiRouteHook/DynamicRouteHook';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {

    const { createUserWithEmail, updateUser, signInWithGoogle } = useContext(AuthContext);

    // Imagebb Host Key
    const imageHostKey = process.env.REACT_APP_imagebb_API_Key;


    DynamicRouteHook('Sign Up');

    // React Hook Form .
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSignUp = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                    handleUpdateUserProfile(data.name, imageData.data.url);
                }
            })
        createUserWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;

                console.log(user);

                toast(`${data.name} welcome to Bit NFT`)
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.message}`)
            });
    };


    // Update User Profile
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUser(profile)
            .then(() => {
                console.log(profile)
            })
            .catch(error => console.error(error));
    }


    // Google Sign In
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user.displayName);
                toast.success(`Login Successful. Welcome ${user.displayName}`);
            })
            .catch((error) => {
                console.error(error);
            })
    }



    return (
        <div className='bg-base-200'>
            <div>
                <h2 className='py-6 text-2xl md:text-4xl lg:text-4xl text-center'>Welcome To Bit NFT! Please Register .</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={signUpImage} className="lg:max-w-xl rounded-lg shadow-2xl w-86" alt='' />
                    <div className="card w-86 lg:max-w-xl flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUp)}>

                                {/* Name Field  */}
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

                                {/* Photo File  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Photo</span>
                                    </label>
                                    <input className="input input-bordered" placeholder='Profile Photo' type='file'
                                        {...register("image", { required: "For some security purpose Image field is required." })}
                                        aria-invalid={errors.image ? "true" : "false"}
                                    />
                                    {errors.image && <p className='text-red-500' role="alert">{errors.image?.message}</p>}

                                </div>

                                {/* Email Field  */}
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

                                {/* Password Field  */}
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

                                <div className='mx-auto my-4'>
                                    <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit">Sign Up</button>
                                </div>
                                <p className=' text-center'>Already have an account ? <Link to='/login' className='text-cyan-500'>Please Login.</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;