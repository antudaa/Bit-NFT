import React, { useRef } from 'react';
import { content } from '../../Components/Content/Content';
import email from '../../Components/Assets/Contact/gmail.png';
import whatsApp from '../../Components/Assets/Contact/whatsapp.png';
import linkedin from '../../Components/Assets/Contact/linkedin.png';
// import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const { Contact } = content;
    const form = useRef();

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
        <section className=" " id="contact">
            <div className="md:container px-5 py-14">
                <h2 className="text-4xl my-4 text-center" data-aos="fade-down">
                    {Contact.title}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {Contact.subtitle}
                </h4>
                <br />
                <div className="flex gap-10 md:flex-row flex-col justify-center">
                    <form
                        ref={form}
                        // onSubmit={sendEmail}
                        data-aos="fade-up"
                        className="flex-1 flex flex-col gap-5"
                    >
                        {/* Input Name as same as email js templates values */}
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            required
                            className="border border-slate-600 p-3 rounded"
                        />
                        <input
                            type="email"
                            name="user_email"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            placeholder="Email Id"
                            required
                            className="border border-slate-600 p-3 rounded"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-slate-600 p-3 rounded h-44"
                            required
                        ></textarea>
                        <button
                            className="btn self-start"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="flex-1 flex lg:flex-col gap-5 ">
                        {
                            Contact.social_media.map((media, i) => (
                                <div key={i} className='flex items-center gap-4 '>
                                    {
                                        i === 0 ? <img className='w-8' src={email} alt="" /> : i === 1 ? <img className='w-8' src={whatsApp} alt="" /> : i === 2 ? <img className='w-8' src={linkedin} alt="" /> : <></>
                                    }
                                    {
                                        i === 0 ? <a className='font-Poppins hidden my-2' href={media.link} >{media.text}</a>
                                            : <a target='_blank' rel="noreferrer" className='font-Poppins hidden text-white my-2' href={media.link} >{media.text}</a>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Contact;