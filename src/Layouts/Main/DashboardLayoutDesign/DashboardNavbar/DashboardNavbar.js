import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;

    @media screen and (min-width: 320px ) and (max-width: 1080px){
        flex-direction: column;
        margin-top: 70%;
    }
`;

const Text = styled.h1`
    font-size: 30px;
    span{
        margin-left: 20px;
        color: orange;

    }

    @media screen and (min-width: 300px ) and (max-width: 560px){
        font-size: 20px;
    }
`;

const InputContainer = styled.div`
    display: flex;
`;

const Icon = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #dce4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
`;

const Input = styled.input`
    border: none;
    background-color: #dce4ff;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    &:focus{
        border: none;
        outline: none;
    }
`;

const DashboardNavbar = () => {
    return (
        <NavbarContainer>
            <Text>
                Have A Good Day
                <span>ANTU DAS</span>
            </Text>
            <InputContainer>
                <Icon>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Icon>
                <Input type='text' placeholder="Search" />
            </InputContainer>
        </NavbarContainer>
    );
};

export default DashboardNavbar;