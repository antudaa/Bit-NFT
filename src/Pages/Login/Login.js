import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import LoginImage from '../../Components/Assets/Login/icons8-walter-white-1600.png';
import './Login.css';




const Login = () => {


    // const { SignUp, updateUser, signInWithGoogle } = useContext(AuthContext);

    // const [signUpError, setSignUpError] = useState('');

    // const navigate = useNavigate();

    // const [value, setValue] = useState('buyer');

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };


    // const handleSignUp = event => {
    //     event.preventDefault()
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const name = form.name.value;
    //     // console.log(`Name : ${name} , Email : ${email}, Password : ${password}`);

    //     SignUp(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             // users(data.name, data.email);
    //             const userInfo = {
    //                 displayName: name,
    //             }
    //             const userIn = {
    //                 name: name,
    //                 email: email,
    //                 role: value,

    //             };
    //             console.log(userIn);
    //             fetch(`https://resale-land-server.vercel.app/users`, {
    //                 method: 'POST',
    //                 headers: {
    //                     "content-type": "application/json"
    //                 },
    //                 body: JSON.stringify(userIn)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.acknowledged) {
    //                         toast(`Sign Up Successful...`);
    //                     }
    //                 })
    //                 .catch(err => console.log(err.message));

    //             updateUser(userInfo)
    //                 .then(() => { })
    //                 .catch(error => {
    //                     console.log(error.message);

    //                 })
    //         })
    //         .catch(error => {
    //             setSignUpError(error.message);
    //         });
    // };


    // const googleProvider = new GoogleAuthProvider();
    // // Handle Google Sign In
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(googleProvider)
    //         .then((result) => {
    //             const user = result.user;

    //             fetch(`https://resale-land-server.vercel.app/users?email=${user.email}&name=${user.displayName}`, {
    //                 method: 'PUT',
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.acknowledged) {
    //                         toast(`Login Successful...`);
    //                         navigate('/')
    //                     }
    //                 })
    //                 .catch(err => console.log(err.message));
    //         })
    //         .catch((error) => {
    //             toast(error.message);
    //         })
    // }



    // const users = (name, email) => {
    //     const user = { name, email };
    //     fetch(`https://resale-land-server.vercel.app/users`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             getUserToken(email);
    //         });

    // };


    // const getUserToken = email => {
    //     fetch(`https://resale-land-server.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/')
    //             }
    //         })
    // }

    return (

        <div className='bg-base-200'>
            <div>
                <h2 className='py-6 text-2xl md:text-4xl lg:text-4xl text-center'>Welcome ! Please Login .</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={LoginImage} className="lg:max-w-xl rounded-lg shadow-2xl w-86" alt='' />
                    <div className="card w-86 lg:max-w-xl flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div>
                                    <p className='text-red-600'></p>
                                </div>

                                <div className='mx-auto'>
                                    <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit">Login</button>
                                </div>
                                <p className=' text-center'>First time in Bit NFT ? <Link to='/signup' className='text-cyan-500'>Please Register</Link> </p>
                                <div className="divider my-4 ">OR</div>
                            </form>
                            <button className='btn border-none bg-slate-700 text-md hover:bg-teal-200 hover:text-black text-white w-full my-4' type="submit"><img className='w-6 mr-4' src={<i className="fa-brands fa-google"></i>} alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;

