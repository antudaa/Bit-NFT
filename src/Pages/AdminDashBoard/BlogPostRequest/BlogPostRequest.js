import React from 'react';
import styled from 'styled-components';
import img1 from '../../../Components/Assets/Nfts/bighead-3.svg';
import img2 from '../../../Components/Assets/Nfts/bighead-8.svg';


const BlogRequestContainer = styled.div`

    width: 35rem;
    border-radius: 1rem;
    margin-top: 1rem;
    background-color: white;
    height: 140%; 
    box-shadow: ${`rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, 
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`};
    transition: 0.4s ease-in-out;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`;

const CardContent = styled.div`

`;

const Blog = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

const Avatar = styled.div`
    img{
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 3.5rem;
    }
`;

const TextContainer = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h4`

`;

const Subtitle = styled.h5`
    font-width: 400;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
`;



const BlogPostRequest = () => {
    return (
        <BlogRequestContainer>
            <CardContent>
                <Blog>
                    <Info>
                        <Avatar>
                            <img src={img1} alt="" />
                        </Avatar>
                        <TextContainer>
                            <Title>Nirjhor</Title>
                            <Subtitle>ABC</Subtitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <button className='mr-4' style={{
                            backgroundColor: '#58D68D',
                            padding: '10px',
                            borderRadius: '24px'
                        }}>Accept</button>
                        <button style={{
                            backgroundColor: '#F39C12',
                            padding: '10px',
                            borderRadius: '26px'
                        }}>Decline</button>
                    </Container>
                </Blog>

                <Blog>
                    <Info>
                        <Avatar>
                            <img src={img2} alt="" />
                        </Avatar>
                        <TextContainer>
                            <Title>Nirjhor</Title>
                            <Subtitle>ABC</Subtitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <button className='mr-4' style={{
                            backgroundColor: '#58D68D',
                            padding: '10px',
                            borderRadius: '24px'
                        }}>Accept</button>
                        <button style={{
                            backgroundColor: '#F39C12',
                            padding: '10px',
                            borderRadius: '26px'
                        }}>Decline</button>
                    </Container>
                </Blog>
            </CardContent>
        </BlogRequestContainer>
    );
};

export default BlogPostRequest;