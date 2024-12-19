import Link from "next/link";

const ReservationSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-900">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="mt-6 text-2xl font-bold">Reservation Confirmed!</h1>
        <p className="mt-4 text-gray-600 mb-4">
          Thank you for your reservation. We’ve successfully received your booking.
        </p>
        <Link
          href="/"
          className="px-4 py-2 mt-6 text-white bg-orange-500 rounded hover:bg-orange-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ReservationSuccess;
