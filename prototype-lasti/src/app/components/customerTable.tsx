"use client";

import { fetchItems } from '@/firebase/reservation';
import { ReserveInfo } from '@/firebase/reservation';
import { useEffect, useState } from 'react';

const CustomerTable = ({className}:{className:string}) => {
    const [reservations, setReservations] = useState<ReserveInfo[]>([]);
    
    useEffect(() => {
        const getReservations = async () => {
            const ret = await fetchItems();
            setReservations(ret);
        }
        getReservations();
    }, []);

    return (
        <div className={className}>
            <table className="w-full border-separate border-spacing-2 bg-gray-200 border border-gray-200 rounded-md shadow-sm">
                <thead className="bg-gray-300 text-gray-800">
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-300">Name</th>
                        <th className="px-4 py-2 border-b border-gray-300">Date</th>
                        <th className="px-4 py-2 border-b border-gray-300">Time</th>
                        <th className="px-4 py-2 border-b border-gray-300">Phone Number</th>
                        <th className="px-4 py-2 border-b border-gray-300">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(item => (
                        <tr 
                            key={item.token} 
                            className="bg-white hover:bg-gray-100 transition text-gray-800"
                        >
                            <td className="px-4 py-2 border-b border-gray-200">{item.name}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{item.date.toLocaleDateString()}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{item.time}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{item.phone_number}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{item.service}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};

export default CustomerTable;
