import { NextApiRequest, NextApiResponse } from "next";
import { GenerateBase64OrderId, endpoint, content_type, AUTH_STRING } from "./midtrans";

export default async function handler(res: NextApiResponse, req: NextApiRequest) {
    if (req.method === "POST") {
        const order_id = GenerateBase64OrderId();
        try {
            const transaction_token = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": content_type,
                    "Accept": content_type,
                    "Authorization": AUTH_STRING    
                },
                body: JSON.stringify({
                    "transaction_details" : {
                        "order_id": order_id,
                        "gross_amount": 1000
                    }
                }),
            });
        } catch(err) {
            return res.status(500).json({"error": err})
        }
    }
    else {
        return res.status(400).json({"error": "Can only use POST method!"})
    }
}