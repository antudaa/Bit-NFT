import React, { useContext } from 'react';
import Badge from '../Badge/Badge';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';


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
    border-radius: 50%;
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

    const { user } = useContext(AuthContext);

    const { data: membersList = [] } = useQuery({
        queryKey: ['membersList'],
        queryFn: async () => {
            const res = await fetch(`https://bit-nft-server.vercel.app/membersList/${user.email}`);
            const data = await res.json();
            return data;
        }
    });



    return (
        <Container>
            <ProfileContainer>
                {
                    user?.photoURL ?
                        <Avatar src={user.photoURL} /> :
                        <></>
                }
                <Name>{user.displayName}</Name>
                {
                    membersList?.status ?
                        <Badge content={membersList.status} /> :
                        <></>
                }
            </ProfileContainer>
            <LinkContainer>
                <ContainerLinks>
                    {
                        membersList?.status === 'Admin' ?
                            <>
                                <Links>
                                    <Link to='/adminDashboard/admin'>Dashboard</Link>
                                </Links>
                                <Links>
                                    <Link to='/adminDashboard/membershipRequest'>Membership Request</Link>
                                </Links>
                                <Links>
                                    <Link to='/adminDashboard/membersList'>See All Members</Link>
                                </Links>
                            </> :
                            <></>
                    }
                    <Links>
                        <Link to='/adminDashboard'>Profile</Link>
                    </Links>
                    <Links>
                        <Link to='/adminDashboard/blog'>Write Blog</Link>
                    </Links>
                </ContainerLinks>
            </LinkContainer>
        </Container>
    );
};

export default SideBar;