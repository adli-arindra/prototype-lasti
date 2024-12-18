import CustomerTable from "../components/customerTable";

const AdminPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <CustomerTable className="flex justify-center items-center mx-40 bg-gray-700 m-8 p-6 rounded-3xl"/>
        </div>
    )
}

export default AdminPage;