import React from 'react';
import styled from 'styled-components';
import BlogPostsInfo from '../../Layouts/Main/DashboardLayoutDesign/BlogPostInfo/BlogPostsInfo';
import DashboardNavbar from '../../Layouts/Main/DashboardLayoutDesign/DashboardNavbar/DashboardNavbar';
import SiteInfo from '../../Layouts/Main/DashboardLayoutDesign/SiteInfo/SiteInfo';
import SiteRich from '../../Layouts/Main/DashboardLayoutDesign/SiteRich/SiteRich';


const TitleText = styled.h3`
    height: 20%;
`

const Container = styled.div`
    width: 80%;
    background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin: 1rem 8rem 1rem 4rem;

    @media screen and (min-width: 320px ) and (max-width: 1080px){
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1rem 0 0 0;
    }
`;

const SubContainer = styled.div`
    margin: 0.5rem 0;
    height: 120%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media screen and (min-width: 320px ) and (max-width: 1080px){
        height: 100%;
    }
`;

const SectionOne = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    gap: 2rem;
    width: 100%;

    @media screen and (min-width: 320px ) and (max-width: 1080px){
        flex-direction: column;
        align-items: center;
        height: max-content;
    }
`;

const SectionTwo = styled.div`
    display: flex;
    gap: 2rem;
    height: 26vh;
`;

const ColumnOne1 = styled.div`
    display: flex;
    gap: 3rem;

    @media screen and (min-width: 300px ) and (max-width: 580px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
`;

const ColumnOne2 = styled.div`

`;

const ColumnTwo1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @media screen and (min-width: 320px ) and (max-width: 580px){
        width: 80%;
        justify-content: center;
    }

`;

const ColumnTwo2 = styled.div`

`;


const AdminDashBoard = () => {

    return (
        <Container>
            <DashboardNavbar />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        <SiteRich />
                        <SiteInfo />
                    </ColumnOne1>
                    <ColumnTwo1>
                        <TitleText>Blog Posts</TitleText>
                        <BlogPostsInfo />
                    </ColumnTwo1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2></ColumnOne2>
                    <ColumnTwo2></ColumnTwo2>
                </SectionTwo>
            </SubContainer>
        </Container>
    );
};

export default AdminDashBoard;

