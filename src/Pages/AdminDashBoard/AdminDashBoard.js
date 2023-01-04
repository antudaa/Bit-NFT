import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import DashboardNavbar from '../../Layouts/Main/DashboardLayoutDesign/DashboardNavbar/DashboardNavbar';
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
`;

const SubContainer = styled.div`
    margin: 0.5rem 0;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const SectionOne = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    gap: 2rem;
    width: 100%;
`;

const SectionTwo = styled.div`
    display: flex;
    gap: 2rem;
    height: 26vh;
`;

const ColumnOne1 = styled.div`
    display: flex;
    gap: 3rem;
`;

const ColumnOne2 = styled.div`

`;

const ColumnTwo1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;
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
                    </ColumnOne1>
                    <ColumnTwo1></ColumnTwo1>
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









// import Lottie from 'react-lottie';

// import LoadingAnimationLottie from '../../LoadingAnimationLottie.json';

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: LoadingAnimationLottie,
//     rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice'
//     }
// };

// <div>
//             <h1 className='my-10 text-4xl text-center'>Admin Dashboard</h1>
//             <Lottie options={defaultOptions}
//                 height={400}
//                 width={400} />
//         </div>