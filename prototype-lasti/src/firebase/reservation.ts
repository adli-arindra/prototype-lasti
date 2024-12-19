import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export interface ReserveInfo {
    name: string,
    phone_number: string,
    created_date: Date,
    date: Date,
    service: string,
    token: string,
}

const addReservation = async (reserveInfo: ReserveInfo) => {
    try {
        const docRef = await addDoc(collection(db, "reservation"), reserveInfo);
        console.log("Document written with ID : ", docRef.id);
    } catch(err) {
        console.error(err);
    }
}

export async function fetchItems() {
    const querySnapshot = await getDocs(collection(db, "reservation"));
    const ret: ReserveInfo[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const newReserveInfo = data as ReserveInfo;
        newReserveInfo.date = new Date(data.date);
        ret.push(newReserveInfo);
    });
    return ret;
}

export { addReservation };