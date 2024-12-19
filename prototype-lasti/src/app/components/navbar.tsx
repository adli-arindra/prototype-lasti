"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="text-black sticky top-0">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold my-4">
          <Link href="/" >
            <Image
            src="/logo.png"
            width={125}
            height={50}
            alt=""/>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-xl justify-between min-w-80">
            <button className="hover:text-orange-500">Home</button>
            <button className="hover:text-orange-500">Services</button>
            <button className="hover:text-orange-500">About Us</button>
        </div>

        {/* Profile Icon */}
        <Link className="flex items-center space-x-4" href="/admin">
          <button className="hover:text-orange-500 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
          </button>
          <div className="hidden md:block">
            <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9.978 9.978 0 0112 15a9.978 9.978 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
            </button>
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
        <div className="md:hidden">
        </div>
    </nav>
  );
};

export default Navbar;
