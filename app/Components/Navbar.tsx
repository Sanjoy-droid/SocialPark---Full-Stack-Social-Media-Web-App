"use client";
import {
  SignedIn,
  SignIn,
  SignInButton,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className="text-white py-4 shadow-md w-full">
      <div className="w-full flex justify-between items-center px-4">
        {/* App Name */}
        <a href="/" className="text-2xl font-bold">
          SocialPark
        </a>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center flex-1 mx-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-lg px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login & Signup */}
        <div className="flex space-x-6">
          {!user && (
            <>
              <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
