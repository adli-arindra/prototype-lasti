import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-[url('/Homepage.png')] bg-cover bg-center text-gray-900 min-h-screen flex flex-row px-28 ">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {/* Left Content */}
        <div className="flex flex-col md:justify-around md:mb-52 mb-0">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover
            <br />
            <span className="text-gray-700">The style you fit the best</span>
          </h1>
          <div className="mt-8 hidden md:block">
            <h2 className="text-xl font-semibold">2024 Trend New Style</h2>
            <button className="mt-2 inline-block text-orange-500 hover:underline">
              View all →
            </button>
          </div>
          <div className="mt-8 text-gray-600 hidden md:block">
            <p className="text-4xl font-bold">4.5</p>
            <p className="mt-2">What they said about us?</p>
            <div className="flex mt-4 space-x-2">
              {/* Example User Avatars */}
              {[1, 2, 3].map((avatar) => (
                <button
                  key={avatar}
                  className="w-10 h-10 rounded-full bg-gray-300 border border-gray-200 hover:bg-orange-200"
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="flex flex-col gap-4 justify-between min-w-52 mt-52">
        <div className="md:flex flex-col gap-4 hidden">
            {["Services", "Pricelist", "Style & Trend"].map((item) => (
            <button
                key={item}
                className="flex items-center justify-between border-b pb-2 hover:text-orange-700"
            >
                <span>{item}</span>
                <span>→</span>
            </button>
            ))}
            </div>
            {/* Book Now Button */}
            <div className="container px-4 py-8 text-center min-w-full mb-12">
                <Link
                href="/reservation"
                className="inline-block px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-700"
                >
                Book Now!
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Home;
