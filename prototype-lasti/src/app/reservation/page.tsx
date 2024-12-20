"use client";
import TextInput from "../components/textInput";
import { ReserveInfo, addReservation } from "@/firebase/reservation"; 
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const services: string[] = [ "Full Service", "Haircut Only", "Perming", "Coloring", "Massage Only", "Facial Treatment" ];
const times: string[] = [ "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00" ];

const ReservationPage = () => {
    const [formInfo, setFormInfo] = useState<ReserveInfo>({
        name: "",
        phone_number: "",
        created_date: new Date(),
        date: new Date(),
        time: "",
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
        <div className="min-h-screen bg-white flex flex-col justify-center items-center gap-8">
            <div className="flex flex-row justify-center items-center px-8 gap-8">
                <div>
                    <TextInput valueName="name" parentFunction={handleInputChange} placeholder="Ahmad Garuda"/>
                    <TextInput valueName="phone_number" parentFunction={handleInputChange} placeholder="081xxxxxxxxx"/>
                    <div className="w-full">
                        <p className="text-black">Select a service</p>
                        <div className="grid grid-cols-2 gap-1">
                            {services.map((service) => (
                                <label key={service} className="block w-full">
                                <input
                                    type="radio"
                                    value={service}
                                    checked={formInfo.service === service}
                                    onChange={() => handleInputChange("service", service)}
                                    className="hidden peer"
                                    aria-label={service}
                                />
                                <span className="block w-full text-center px-4 py-2 rounded-md border border-gray-300 bg-gray-200 text-gray-800 
                                                hover:bg-gray-300 hover:text-black transition 
                                                peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500">
                                    {service}
                                </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-black'>Select a date</p>
                    <Calendar value={value} onChange={onChange} className="text-black rounded-xl"/>
                </div>
                <div className="text-black">
                    <h1>Pick a time</h1>
                    <div className="grid grid-cols-2 gap-2 bg-white border border-gray-500 rounded-2xl h-full p-2">
                        {times.map((time) => (
                            <label key={time} className="block w-full">
                            <input
                                type="radio"
                                value={time}
                                checked={formInfo.time === time}
                                onChange={() => handleInputChange("time", time)}
                                className="hidden peer"
                                aria-label={time}
                            />
                            <span className="block w-full text-center px-4 py-2 rounded-md border border-gray-300 bg-gray-200 text-gray-800 
                                             hover:bg-gray-300 hover:text-black transition 
                                             peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500">
                                {time}
                            </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                {isComplete? "" : <p className="text-red-400 text-s">Please fill all the required forms</p>}
                <button 
                className="w-full text-center px-4 py-2 rounded-md border hover:bg-orange-400 hover:text-black transition bg-orange-500 text-white border-orange-500"     
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