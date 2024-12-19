import { GenerateBase64OrderId, endpoint, content_type, AUTH_STRING } from "../midtrans";

export async function POST() {
    const order_id = GenerateBase64OrderId();
    try {
        const response = await fetch(endpoint, {
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
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200
        });
    } catch(err) {
        console.log(err);
        return new Response("Error processing request", {status: 500});
    }
}