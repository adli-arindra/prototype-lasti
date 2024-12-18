"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Top Bar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-teal-900">
        <Image src="/trich.svg" alt="Trich Logo" width={50} height={30} />
        <div className="flex space-x-6">
          {/* Link to the Services section */}
            <a href="#services" className="px-4 py-2 text-teal-50 hover:text-orange-500">
            Service
            </a>
          {/* Link to the Reservation section */}
            <a href="/reservation" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-teal-50 hover:text-orange-500 hover:border hover:border-orange-500">
            Reservation
            </a>
        </div>
      </nav>

      {/* Highlight Section */}
      <section
        className="relative h-100 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/highlight.png')" }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md">
          <h1 className="text-3xl font-bold">Holiday Promo!</h1>
          <p className="mt-2">Get 20% off on all services this holiday season!</p>
          {/* Link to the Services section */}
          <a
        href="#services"
        className="mt-4 inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-teal-50 hover:text-orange-500 hover:border hover:border-orange-500"
          >
        See Details
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-[#548c7c] shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-50">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service cards */}
            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Full Service</h3>
            <p className="mt-2 text-gray-600">Haircut + Perming + Massage + Facial Treatment.</p>
            <p className="mt-4 text-[#548c7c] font-bold line-through inline-block mr-2">Rp 135.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">Rp 100.000</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Haircut Only</h3>
            <p className="mt-2 text-gray-600">A stylish haircut to suit your taste.</p>
            <p className="mt-4 text-[#548c7c] font-bold line-through inline-block mr-2">Rp 85.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">Rp 65.000</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Perming</h3>
            <p className="mt-2 text-gray-600">Long-lasting curls or waves to up your styling.</p>
            <p className="mt-4 text-[#548c7c] font-bold inline-block mr-2">Rp 150.000 - 500.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">off 20%!!</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Coloring</h3>
            <p className="mt-2 text-gray-600">Professional hair coloring for your fresh new look.</p>
            <p className="mt-4 text-[#548c7c] font-bold inline-block mr-2">Rp 250.000 - 750.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">off 15%!!</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Massage Only</h3>
            <p className="mt-2 text-gray-600">Relaxing massage to lift up your stress.</p>
            <p className="mt-4 text-[#548c7c] font-bold line-through inline-block mr-2">Rp 35.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">Rp 25.000</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold text-teal-900">Facial Treatment</h3>
            <p className="mt-2 text-gray-600">Style and care for your moustache and/or beard.</p>
            <p className="mt-4 text-[#548c7c] font-bold line-through inline-block mr-2">Rp 45.000</p>
            <p className="mt-1 text-orange-500 font-bold inline-block">Rp 30.000</p>
            <p className="text-sm text-gray-500">Promo: Holiday Promo this week only!</p>
            </div>
        </div>
        {/* Link to Reservation section */}
        <div className="text-center mt-8">
          <a
            href="/reservation"
            className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-teal-50 hover:text-orange-500 hover:border hover:border-orange-500"
          >
            Make a Reservation
          </a>
        </div>
      </section>

      {/* Contact Section: Provides contact details and a map */}
      <section id="contact" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="text-orange-500">TRICH</span> <span className="text-white">Location</span>
            </h3>
            <p className="mt-2">Jl. Sumbawa no. 24, Merdeka, Sumur Bandung, Kota Bandung</p>
            <p className="mt-2">Opening Hours: Mon-Sun 10:00 AM - 21:00 PM</p>
            <p className="mt-2">Phone: <a href="tel:+628992310069" className="hover:underline">+62 899-2310-069</a></p>
            <p className="mt-2">Email: <a href="mailto:trichbarberspace@gmail.com" className="hover:underline">trichbarberspace@gmail.com</a></p>
            <h3 className="text-xl font-bold mt-6">
            <span className="text-orange-500">TRICH</span> <span className="text-white">Socials</span>
            </h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/trichbarber" target="_blank" rel="noopener noreferrer">
                <div className="text-white">
                  <Image src="/instagram.svg" alt="Instagram Logo" width={30} height={30} />
                </div>
              </a>
              <a href="https://www.tiktok.com/@trichbarber" target="_blank" rel="noopener noreferrer">
              <Image src="/tiktok.svg" alt="TikTok Logo" width={30} height={30} />
              </a>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8126085313547!2d107.61715199999999!3d-6.912995799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6338d24320b%3A0xc4b664c835e91ffe!2sJl.%20Sumbawa%20No.24%2C%20Merdeka%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040113!5e0!3m2!1sen!2sid!4v1734505543785!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-teal-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div>
            <Image src="/trich.svg" alt="Trich Logo" width={50} height={30} />
            <p className="mt-2">Jl. Sumbawa no. 24</p>
            <p className="mt-2">
              Phone: <a href="tel:+628992310069" className="hover:underline">+62 899-2310-069</a>
            </p>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="/reservation" className="hover:underline text-orange-500 font-bold">Reservation</a>
            <a href="/admmin" className="hover:underline">Login as Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
