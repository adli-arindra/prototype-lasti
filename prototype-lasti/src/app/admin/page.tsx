import CustomerTable from "../components/customerTable";

const AdminPage = () => {
    return (
        <div className="flex flex-col pt-12 items-center min-h-screen bg-white">
            <h1 className="text-black text-4xl font-bold">Active Reservations</h1>
            <CustomerTable className="flex justify-center items-center mx-40 bg-gray-700 m-8 p-6 rounded-3xl"/>
        </div>
    )
}

export default AdminPage;