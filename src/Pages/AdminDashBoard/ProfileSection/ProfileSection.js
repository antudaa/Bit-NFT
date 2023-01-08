import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import verified from '../../../Components/Assets/Images/tick-mark.png';


const ProfileSection = () => {

    const { user } = useContext(AuthContext);

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
        <div>
            <div>
                <img style={{
                    borderRadius : '50%',
                    width: '150px'
                }} src={membersList.profilePhoto} alt="" />
            </div>
            <div className='text-center my-5 text-4xl flex'>
                <h3 className='mr-6'>{membersList.name}</h3>
                
                {
                    membersList?.status === 'Admin' ?
                    <img className='w-6 h-6' src={verified} alt="Verified Logo" />:
                    <></>
                }
            </div>
            <div className='text-center text-2xl'>
                <h5>{membersList.purpose}</h5>
            </div>
        </div>
    );
};

export default ProfileSection;