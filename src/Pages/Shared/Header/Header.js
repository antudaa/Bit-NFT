import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Mode from '../../../Components/ThemeChanger/Mode';
import logo from '../../../Components/Assets/Images/ape.png';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast(`Log Out Successful.`)
            })
            .catch((error) => {
                toast(`${error.message}`);
            })
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box " style={{ width: '100vw' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>

                        {
                            user?.uid ?
                                <>
                                    <li><Link to="/adminDashboard">Admin Dashboard</Link></li>
                                    <li><Link onClick={handleLogOut} to="">Log Out</Link></li>
                                </> :
                                <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
                <div className='flex'>
                    <Link className="lg:mx-6 mx-2 normal-case text-lg font-bold md:text-xl">Bit  NFT</Link>
                    <img className='w-6 h-6' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className='mx-2' to="/">Home</Link>
                    <Link className='mx-2' to="/about">About</Link>
                    <Link className='mx-2' to="/blog">Blog</Link>
                    <Link className='mx-2' to="/contact">Contact</Link>
                    <Link className='mx-2' to="/signup">Sign Up</Link>
                    {
                        user?.uid ?
                            <>
                                <Link className='mx-2' to="/adminDashboard">Admin Dashboard</Link>
                                <Link className='mx-2' onClick={handleLogOut} to="">Log Out</Link>
                            </> :
                            <Link className='mx-2' to="/login">Login</Link>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {/* <ThemeChanger /> */}
                <div className='mx-4'>
                    <Mode />
                </div>
            </div>
            {
                user?.uid ?
                    <>
                        <label htmlFor="dashboard-side-navbar" tabIndex={1} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </> :
                    <></>
            }

        </div>
    );
};

export default Header;