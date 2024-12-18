const endpoint = "https://app.sandbox.midtrans.com/snap/v1/transactions";

const MerchantID = "G268777340";
const ClientKey = "SB-Mid-client-UMew8UfwDZufZ0WO";
const ServerKey = "SB-Mid-server-2TL8Ng39AHHM3fIU5c82wg3F";
const AUTH_STRING = "Basic U0ItTWlkLXNlcnZlci0yVEw4TmczOUFISE0zZklVNWM4MndnM0Y=:";
const content_type = "application/json";

const GenerateBase64OrderId = () => {
    const randomData = crypto.getRandomValues(new Uint8Array(8));
    return btoa(String.fromCharCode(...randomData)).slice(0, 12);
};

export { endpoint, MerchantID, ClientKey, ServerKey, AUTH_STRING, content_type, GenerateBase64OrderId}

// export const GetToken = async () => {
//     const order_id = GenerateBase64OrderId();
  
//     const transaction_token = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//             "Content-Type": content_type,
//             "Accept": content_type,
//             "Authorization": AUTH_STRING    
//         },
//         body: JSON.stringify({
//             "transaction_details" : {
//                 "order_id": order_id,
//                 "gross_amount": 1000
//             }
//         }),
//     });

//     return transaction_token;
// }