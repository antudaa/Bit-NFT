import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';


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

    @media screen and (min-width: 300px ) and (max-width: 560px){
        margin-top: -80%;
        width: 120%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CardContent = styled.div`
    @media screen and (min-width: 300px) and (max-width: 1000px){
        margin-top: -30%;
    }
`;

const Blog = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;

    @media screen and (min-width: 300px) and (max-width: 1000px){
        flex-direction: column;
        gap: 1rem;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    @media screen and (min-width: 300px) and (max-width: 1000px){
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
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
    color: black;
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

    @media screen and (min-width: 300px) and (max-width: 1000px){
        width: 100%;
        flex-direction: column;
        gap: 0.6rem;
    }
`;



const BlogPostRequest = () => {

    const { data: postBlog = [], refetch } = useQuery({
        queryKey: ['postBlog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/postBlog');
            const data = await res.json();
            return data;
        }
    });


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/postBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Request Successfully Deleted.`)
                    refetch();
                }
            })
            .catch((error) => console.log(error.message));
    }


    const handleAccept = (data) => {
        const info = {
            authorName: data.author,
            authorEmail: data.authorEmail,
            authorImg: data.authorImage,
            postTime: data.date,
            description: data.postDescription,
            title: data.postTitle,
            postImage: data.postImage,
        }

        fetch(`http://localhost:5000/approvedBlogs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Blog Posted To Your Website successfully...`)
            })
            .catch((error) => console.log(error.message));
    }


    return (
        <BlogRequestContainer>
            <CardContent>
                {
                    postBlog.map((post) =>
                        <Blog key={post._id}>
                            <Info>
                                <Avatar>
                                    <img src={post.authorImage} alt="postBlog" />
                                </Avatar>
                                <TextContainer>
                                    <Title>{post.author}</Title>
                                    <Subtitle>Date: {post.date}...</Subtitle>
                                </TextContainer>
                            </Info>
                            <Container>
                                <button
                                    onClick={() => handleAccept(post)}
                                    className='mr-4'
                                    style={{
                                        backgroundColor: '#58D68D',
                                        color: 'black',
                                        padding: '10px',
                                        borderRadius: '24px'
                                    }}>Accept</button>
                                <button
                                    onClick={() => handleDelete(post._id)}
                                    style={{
                                        backgroundColor: '#F39C12',
                                        color: 'black',
                                        padding: '10px',
                                        borderRadius: '26px'
                                    }}>Decline</button>
                            </Container>
                        </Blog>
                    )
                }

            </CardContent>
        </BlogRequestContainer>
    );
};

export default BlogPostRequest;