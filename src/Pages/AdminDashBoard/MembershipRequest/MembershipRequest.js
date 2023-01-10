import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import DynamicRouteHook from '../../../Components/DynamiRouteHook/DynamicRouteHook';
import DashboardNavbar from '../../../Layouts/Main/DashboardLayoutDesign/DashboardNavbar/DashboardNavbar';

const MembershipRequest = () => {

    DynamicRouteHook('Admin Panel');

    const { data: membershipRequest = [], refetch } = useQuery({
        queryKey: ['membershipRequest'],
        queryFn: async () => {
            const res = await fetch('https://bit-nft-server.vercel.app/membershipRequest');
            const data = await res.json();
            return data;
        }
    });


    const handleAccept = (data) => {
        const info = {
            name: data.name,
            email: data.email,
            purpose: data.purpose,
            profilePhoto: data.photo,
            userId: data._id,
        }

        fetch(`https://bit-nft-server.vercel.app/members/${data.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Request accepted successfully...`)
            })
            .catch((error) => console.log(error.message));
    }


    const handleDelete = (id) => {

        fetch(`https://bit-nft-server.vercel.app/membershipRequest/${id}`, {
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
    };




    return (
        <div className='mt-[10%] ml-[20%] md:ml-0 lg:ml-0' >
            <div className='mb-8'>
                <DashboardNavbar />
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Purpose</th>
                            <th>Verify</th>
                            <th>Decline Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            membershipRequest.map((request, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{request.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="badge badge-ghost badge-sm">{request.email}</div>
                                    </td>
                                    <td >{request.purpose.slice(0, 26)}...</td>
                                    <th>
                                        <button onClick={() => handleAccept(request)} className="btn btn-primary pt-4 pb-6 px-4 btn-xs">Accept</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(request._id)} className="btn btn-warning pt-4 pb-6 px-4 btn-xs">Decline</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default MembershipRequest;