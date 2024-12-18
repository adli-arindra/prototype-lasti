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
    }, );
    
    return (
        <div className={className}>
        <table className="border-separate border-spacing-4">
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Phone Number</th>
                <th>Service</th>
            </tr>
            </thead>
            <tbody>
            {reservations.map(item => (
                <tr key={item.token}>
                <td>{item.name}</td>
                <td>{item.date.toISOString()}</td>
                <td>{item.phone_number}</td>
                <td>{item.service}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
};

export default CustomerTable;
