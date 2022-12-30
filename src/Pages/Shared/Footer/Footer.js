import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Components/Assets/Images/ape.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='row'>
                <div className='col'>
                    <img className='w-16 h-16' src={logo} alt="" />
                    <p>Bit NFT</p>
                </div>
                <div className='col'>
                    <h3>Office  <div className="underline"><span></span></div></h3>
                    <p>1710, College Gate.</p>
                    <p>Hathazari, Chittagong</p>
                    <p>Chittagong, Bangladesh</p>
                    <p className='email-id'>antu.haks@gmail.com</p>
                    <h4>+880 1788362766</h4>
                </div>
                <div className='col'>
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Login</Link></li>
                        <li><Link>Sign Up</Link></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3>Newsletter <div className="underline"><span></span></div></h3>
                    {/* <form>
                        <i class="far fa-solid fa-envelope"></i>
                        <input type="email" placeholder='Enter your email' required />
                    </form> */}
                    <div className='social-icons'>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
            <hr className='' />
            <p className='copyright my-6'>Copyright © antu_das || All rights Reserved 2022</p>
        </footer>
    );
};

export default Footer;