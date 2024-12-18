import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export interface ReserveInfo {
    name: string,
    phone_number: string,
    created_date: Date,
    date: Date,
    service: string,
}

const addReservation = async (reserveInfo: ReserveInfo) => {
    try {
        const docRef = await addDoc(collection(db, "reservation"), reserveInfo);
        console.log("Document written with ID : ", docRef.id);
    } catch(err) {
        console.error(err);
    }
}

export { addReservation };