import React from 'react';
import { Link } from 'react-router-dom';
import Mode from '../../../Components/ThemeChanger/Mode';

const Header = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box " style={{ width: '100vw' }}>
                        <li><Link>Home</Link></li>
                        <li><Link>Login</Link></li>
                        <li><Link>Sign Up</Link></li>
                    </ul>
                </div>
                <Link className="ml-6 normal-case text-xl">Bit  NFT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className='mx-2'>Home</Link>
                    <Link className='mx-2'>Login</Link>
                    <Link className='mx-2'>Sign Up</Link>
                </ul>
            </div>
            <div className="navbar-end">

                {/* <ThemeChanger /> */}
                <div className='mx-4'>
                    <Mode />
                </div>
            </div>
        </div>
    );
};

export default Header;