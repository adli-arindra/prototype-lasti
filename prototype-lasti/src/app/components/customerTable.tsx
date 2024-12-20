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
    
    const formatDate = (inputDate: any) => {
        const date = new Date(inputDate);
        const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    
        return formattedDate;
      };

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
            {reservations.map(item => {
                let date;
                console.log(item.date);
                try {
                    date = item.date.toISOString();
                }
                catch {
                    date= "";
                }
                return (
                    <tr key={item.token}>
                    <td>{item.name}</td>
                    <td>{item.date.toLocaleDateString()}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.service}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
  );
};

export default CustomerTable;
