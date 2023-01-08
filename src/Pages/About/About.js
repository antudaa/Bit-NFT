import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { dark } from '../../Components/Thems/Thems';
import DynamicRouteHook from '../../Components/DynamiRouteHook/DynamicRouteHook';
// Importing React Modal
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';





// Styled Component Starts here
const Section = styled.section`
    min-height : 100vh;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    position : relative; 
`

const Container = styled.div`
    width : 80%;
    min-height : 80vh;
    margin : 0 auto;

    display : flex;
    justify-content : center;
    align-items : center;

    @media (max-width: 70em){
        width: 85%;
        
    }

    @media (max-width: 64em){
        width: 100%;
        flex-direction: column;

        &>*:last-child{
            width: 80%;
        }
    }
`

const Box = styled.div`
    width : 50%;
    height : 100%;
    min-hight: 60vh;
    display : flex;
    flex-direction : column;
    justify-content : center ;
    align-items : center;

    @media (max-width: 40em){
        min-height: 50vh;
        
    }
`

const Title = styled.h2`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 0 auto;

    @media (max-width: 64em){
        width: 100%;
        text-align: center;
        font-size: ${dark.fontxl};
    }

    @media (max-width: 40em){
        font-size: ${dark.fontxl};  
    }

    @media (max-width: 30em){
        font-size: ${dark.fontlg};
    }
`;

const SubText = styled.p`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 1rem auto;
    font-width : 400;
`;


const SubTextLight = styled.p`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 1rem auto;
    font-width : 400;
`;

const Button = styled.button`
    Letter-spacing : 4px
`


// React Modal

Modal.setAppElement('#root');


const About = () => {

    const { user } = useContext(AuthContext);

    // React Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleMembershipRequest = data => {
        console.log(data)
        closeModal();
        const request = {
            name: data.name,
            email: data.email,
            purpose: data.purpose,
            photo: user.photoURL
        }
        console.log(request);

        fetch(`http://localhost:5000/membershipRequest`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    toast("Your product added Successfully");
                }
            })
            .catch(err => console.log(err.message));
    };

    DynamicRouteHook('About');

    // React Modal
    const [modalIsOpen, setIsOpen] = useState(false);

    // Open Modal Function
    function openModal() {
        setIsOpen(true);
    }

    // Close Modal Function
    function closeModal() {
        setIsOpen(false);
    }


    // Getting Member Data.
    const { data: membersList = [] } = useQuery({
        queryKey: ['membersList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/membersList/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(membersList);

    return (
        <Section className='pt-8 pb-16'>

            {/* React Modal */}
            <Modal
                style={{

                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: "23rem",
                        width: "90%"
                    },
                    overlay: {
                        padding: "2rem"
                    },

                }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex flex-row-reverse gap-6'>
                        <div onClick={() => {
                            closeModal();
                        }} className='cursor-pointer'>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <h1 className='font-bold lg:text-2xl text-xl'>Request For Membership</h1>
                    </div>
                    <hr />
                    <p>After getting a membership you can post blogs and also able to sell and buy NFT's here.</p>
                </div>
                <br />
                <hr />
                {
                    user?.uid ?
                        <form onSubmit={handleSubmit(handleMembershipRequest)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className="input input-bordered bg-white" placeholder='Name' value={user.displayName}
                                    {...register("name", { required: "Name Must have 4 or more character.", min: 4, max: 30 })}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="input input-bordered bg-white" placeholder='Email' value={user.email}
                                    {...register("email", { required: "Email Address is required" })}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Purpose Of Joining</span>
                                </label>
                                <input className="input input-bordered bg-white" placeholder='Purpose Of Joining'
                                    {...register("purpose", { required: "Required" })}
                                    aria-invalid={errors.purpose ? "true" : "false"}
                                />
                                {errors.purpose && <p className='text-red-500' role="alert">{errors.purpose?.message}</p>}

                            </div>

                            <div className='mx-auto'>
                                <button className='btn border-none bg-slate-700 text-md hover:bg-teal-400 hover:text-black text-white w-full my-4' type="submit">Submit</button>
                            </div>
                        </form> :
                        <>
                            <p>Please Login First To Send a Membership Request.</p>
                            <div className='mx-auto'>
                                <Link to='/login' className='btn border-none bg-slate-700 text-md hover:bg-teal-400 hover:text-black text-white w-full my-4' type="submit">Login</Link>
                            </div>
                        </>

                }
            </Modal>

            <Container>
                <Box style={{
                    zIndex: '-1'
                }}>
                    <Carousel />
                </Box>
                <Box className='my-8'>
                    <Bounce left>
                        <Title className='font-bold text-4xl'>
                            Welcome To The Weirdos Club.
                        </Title>
                    </Bounce>
                    <Fade left>
                        <SubText className='font-bold text-sm'>
                            The WEIRDOS CLUB is a private collection of NFTs-unique digital collectibles .The weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                        </SubText>

                        <SubTextLight className='text-sm'>
                            With more then 150+ hand drawn traits, each NFT is unique and comes to a membership to an exclusive group of successful investors .Join an ambitious ever-growing community with multiple benefits and utilities.
                        </SubTextLight>
                    </Fade>
                    {
                        membersList?.status ?
                            <></> :
                            <Button onClick={() => {
                                openModal();
                            }} className='btn btn-outline' Link='#'>Apply For Membership</Button>
                    }
                    {/* <SendButton text={"Apply For Membership"}></SendButton> */}

                </Box>
            </Container>
        </Section>
    );
};

export default About;