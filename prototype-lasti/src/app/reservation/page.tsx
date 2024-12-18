"use client";
import Link from "next/link";
import TextInput from "../components/textInput";
import { ReserveInfo, addReservation } from "@/firebase/reservation"; 
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const services: string[] = [ "Full Service", "Haircut Only", "Perming", "Coloring", "Massage Only", "Facial Treatment" ];

const ReservationPage = () => {
    const [formInfo, setFormInfo] = useState<ReserveInfo>({
        name: "",
        phone_number: "",
        created_date: new Date(),
        date: new Date(),
        service: "",
        token: "",
    });
    const [value, onChange] = useState<Value>(new Date());
    const [isComplete, setIsComplete] = useState(false);

    const handleInputChange = (key: string, value: string | Date) => {
        setFormInfo((prev) => ({
          ...prev,
          [key]: value,
        }));
    };

    useEffect(() => {
        try {
            const date = value as Date;
            handleInputChange("date", date);
        } catch (err) {
            console.error(err);
        }
    }, [value]);

    useEffect(() => {
        let allFilled = true;
        if (formInfo.name === "") allFilled = false;
        if (formInfo.phone_number === "") allFilled = false;
        if ((formInfo.date as Date).getTime() === formInfo.created_date.getTime()) allFilled = false;
        if (formInfo.service === "") allFilled = false;
        setIsComplete(allFilled);
    }, [formInfo]);

    const fetchToken = async () => {
        const token = await fetch("/api/getToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return token;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-neutral">
            <div className="flex flex-col justify-center items-center bg-gray-600 px-8 py-8 rounded-2xl gap-4">
                <TextInput valueName="name" parentFunction={handleInputChange} placeholder="Ahmad Garuda"/>
                <TextInput valueName="phone_number" parentFunction={handleInputChange} placeholder="081xxxxxxxxx"/>
                <div>
                    <p>Select a date</p>
                    <Calendar value={value} onChange={onChange} className="text-black rounded-xl"/>
                </div>
                <div className="w-full">
                    <p>Select a service</p>
                    <div className="grid grid-cols-2 gap-1">
                        {services.map((service) => (
                            <label key={service} className="block">
                            <input
                                type="radio"
                                value={service}
                                checked={formInfo.service === service}
                                onChange={() => handleInputChange("service", service)}
                                className="btn w-full"
                                aria-label={service}
                            />
                            </label>
                        ))}
                    </div>
                </div>
                {isComplete? "" : <p className="text-red-400 text-s">Please fill all the required forms</p>}
                <button 
                className="btn w-full"
                disabled={!isComplete}
                onClick={ async () => {
                    try {
                        const response = await fetchToken();
                        const data = await response.json();
                        const newFormInfo = {...formInfo, token: data.token}
                        addReservation(newFormInfo).then(() => {
                            window.open(data.redirect_url, "_blank");
                            window.location.href="/reservation/success";
                        });
                    } catch(err) {
                        console.error(err);
                    }
                    }}>
                    Submit
                </button>

            </div>
        </div>
    );

}

export default ReservationPage;