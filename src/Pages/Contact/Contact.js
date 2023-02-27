import React from 'react';
import DynamicRouteHook from '../../Components/DynamicRouteHook/DynamicRouteHook';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from "react-hot-toast";
import './Contact.css';


const Contact = () => {

    DynamicRouteHook('Contact');

    // const { Contact } = content;
    // const form = useRef();

    // Sending Email
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_6vmu30k',
    //         'template_klp7y96', form.current,
    //         'X_k0nQcvjGaGABzv2'
    //     )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 form.current.reset();
    //                 toast.success("Email send Successfully");
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //                 toast.error(error.text);
    //             }
    //         );
    // };

    return (
        <section className='contact'>
            <div className="contact-heading">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div data-aos="fade-up" className="row">
                    <div className="column">
                        <div className="contact-widget">
                            <div className="contact-widget-item">
                                <div className="icon">
                                    <i className='fa-solid fa-location-dot'></i>
                                </div>
                                <div className="text">
                                    <h5>Address</h5>
                                    <p>1710 College Gate Hathazari, Chittagong.</p>
                                </div>
                            </div>
                            <div className="contact-widget-item">
                                <div className="icon">
                                    <i className='fa-solid fa-phone'></i>
                                </div>
                                <div className="text">
                                    <h5>Contact Us</h5>
                                    <p> +8801788362766 </p>
                                </div>
                            </div>
                            <div className="contact-widget-item">
                                <div className="icon">
                                    <i className='fa-regular fa-envelope'></i>
                                </div>
                                <div className="text">
                                    <h5>Email</h5>
                                    <p>antu.haks@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="contact-form">
                            <form action="#">
                                <input className='input' type="text" placeholder='Name' />
                                <input className='input' type="email" placeholder='Email' />
                                <textarea placeholder='Comment' name="" id="" cols="30" rows="10"></textarea>
                                <button type='submit' className='btn btn-outline btn-info w-full'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Contact;