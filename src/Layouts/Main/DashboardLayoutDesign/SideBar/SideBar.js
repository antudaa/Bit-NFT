import React from 'react';
import Badge from '../Badge/Badge';
import avatar from '../../../../Components/Assets/Nfts/bighead-5.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styed Component Starts
const Container = styled.div`
    width : 100%;
    height : 100%;
    border-radius : 2rem;
    background-color: #091322;
    color: white;
    display: flex;
    flex-direction : column;
    align-items: center;
    gap: 3rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Avatar = styled.img`
    height: 7rem;
    border-radius; 6rem;
    margin-top: 20%;
`;

const Name = styled.h3`
    color: white;
    font: 1.5rem;
    font-weight: 400;
    margin: 0.8rem 0 0.5rem 0;
`;

const LinkContainer = styled.div`
    background-color: #162349;
    height: 100%;
    width: 100%;
    border-radius: 2rem;
`;

const ContainerLinks = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    height: 60%;
`;

const Links = styled.li`
    margin-left: 25%;
    display: flex;
    color: white;
    cursor: pointer;
    Link{
        margin-top: 3%;
    }

`;




const SideBar = () => {
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={avatar} />
                <Name>ANTU</Name>
                <Badge content="Admin" />
            </ProfileContainer>
            <LinkContainer>
                <ContainerLinks>
                    <Links>
                        <Link>Dashboard</Link>
                    </Links>
                    <Links>
                        <Link to='/adminDashboard/membershipRequest'>Membership Request</Link>
                    </Links>
                    <Links>
                        <Link>Blogs</Link>
                    </Links>
                </ContainerLinks>
            </LinkContainer>
        </Container>
    );
};

export default SideBar;