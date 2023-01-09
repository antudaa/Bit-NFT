import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import FlipCard from '../FlipCard/FlipCard';

const AllMembers = () => {

    const { data: allMembers = [], refetch } = useQuery({
        queryKey: ['allMembers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allMembers');
            const data = await res.json();
            return data;
        }
    });


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/allMembers/${id}`, {
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
        <div style={{
        }}>
            <div className=''>
                <h2 data-aos="fade-down" className='text-2xl lg:text-4xl text-center my-6'>All Our Members Details...</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    allMembers.map((member) => <FlipCard data-aos="fade-up" key={member._id} member={member} handleDelete={handleDelete} />)
                }
            </div>
        </div>
    );
};

export default AllMembers;