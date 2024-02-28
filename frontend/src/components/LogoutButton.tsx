import React from "react";
import Link from "next/link";


export default function LogoutButton() {
    return (
        <button className="focus:outline-none focus:ring focus:border-red-300 focus:bg-red-500 transition-all duration-300 ease-in-out hover:bg-red-600 text-white px-4 py-2 rounded-md flex justify-center">
            <Link href={"/api/auth/logout"}>Logout</Link>
        </button>
    );
}
