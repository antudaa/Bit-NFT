import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImage from '../../Components/Assets/Login/20602937_6325230.jpg';
import { useForm } from "react-hook-form";
import './Login.css';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import DynamicRouteHook from '../../Components/DynamicRouteHook/DynamicRouteHook';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    DynamicRouteHook('Login');

    const { Login, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleLogin = (data) => {
        console.log(data)
        Login(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                toast.success(`Login Successful ${user?.email}.`)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                toast.error(`${error.message}`)
                console.log(error.message)
            });
    };

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                toast.success(`Login Successful. Welcome ${user.displayName}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className='bg-base-200'>
            <div>
                <h2 className='py-6 text-2xl md:text-4xl lg:text-4xl text-center'>Welcome ! Please Login .</h2>
            </div>
            <div data-aos="fade-up" className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={LoginImage} className="lg:w-[40%] rounded-lg shadow-2xl w-[100%]" alt='' />
                    <div className="card w-[100%] lg:w-[40%] flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
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
                                        type="password" {...register("password", { required: "Password must be 8 character or longer." })} />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                                </div>

                                <div className='mx-auto'>
                                    <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit">Login</button>
                                </div>
                                <p className=' text-center'>First time in Bit NFT ? <Link to='/signup' className='text-cyan-500'>Please Register</Link> </p>
                                <div className="divider my-4 ">OR</div>
                            </form>
                            <button onClick={handleGoogleSignIn} className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit"><img className='w-6 mr-4' src={<i className="fa-brands fa-google"></i>} alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

