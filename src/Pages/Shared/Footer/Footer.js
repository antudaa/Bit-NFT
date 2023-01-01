import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../Components/Assets/Images/ape.png';
import './Footer.css';


const Form = styled.form`
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    margin-bottom: 40px ;

    .far {
        font-size: 18px;
        margin-right: 5px;
    }

    input {
        width: 100%;
        background: transparent;
        color: #ccc;
        border: 0;
        outline: none;
    }
`


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
                    <div className='flex justify-around lg:flex-col md:flex-col'>
                        <Form className='mr-48'>
                            <i className="far fa-solid fa-envelope"></i>
                            <input type="email" placeholder='Email' required />
                        </Form>
                        <div className='social-icons '>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-github"></i>
                            <i className="fab fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='' />
            <p className='copyright my-6'>Copyright © antu_das || All rights Reserved 2022</p>
        </footer>
    );
};

export default Footer;