import React from 'react';
import styled from 'styled-components';
import logo1 from '../../../../Components/Assets/Nfts/bighead-6.svg';
import logo2 from '../../../../Components/Assets/Nfts/bighead-1.svg';


const BlogPost = styled.div`
    height: 70;
    background-color: white;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${`rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, 
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`};
    transition: 0.4s ease-in-out;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`;

const Blog = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
    img{
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
    }
`;

const Details = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h3`
    font-weight: 500;
`;

const SubTitle = styled.h5`
    font-weight: 300;
`;

const AllBlogs = styled.h5`
    text-align: end;
    color: #6100d4;
    cursor: pointer;
`;


const BlogPostsInfo = () => {
    return (
        <BlogPost>
            <Blog>
                <Avatar>
                    <img src={logo1} alt="" />
                </Avatar>
                <Details>
                    <Title>History Of NFT's</Title>
                    <SubTitle>Posted 1 day ago.</SubTitle>
                </Details>
            </Blog>
            <Blog>
                <Avatar>
                    <img src={logo2} alt="" />
                </Avatar>
                <Details>
                    <Title>NFT's Marketplace Situation</Title>
                    <SubTitle>Posted 3 day ago.</SubTitle>
                </Details>
            </Blog>
            <AllBlogs>See all blogs</AllBlogs>
        </BlogPost>
    );
};

export default BlogPostsInfo;