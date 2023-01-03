import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MembershipRequest = () => {

    const { data: membershipRequest = [] } = useQuery({
        queryKey: ['membershipRequest'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/membershipRequest');
            const data = await res.json();
            return data;
        }
    })

    console.log(membershipRequest);


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Purpose</th>
                            <th>Verify</th>
                            <th>Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            membershipRequest.map((request, i) => (
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{request.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="badge badge-ghost badge-sm">{request.email}</div>
                                    </td>
                                    <td>{request.Purpose}</td>
                                    <th>
                                        <button className="btn btn-primary pt-4 pb-6 px-4 btn-xs">Verify</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-warning pt-4 pb-6 px-4 btn-xs">Decline</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MembershipRequest;