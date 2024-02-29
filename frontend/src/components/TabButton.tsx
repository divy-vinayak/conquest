import React, { ReactNode } from "react";


export default function TabButton({ children }: { children: ReactNode }) {
    return (
        <button className=" focus:outline-none focus:ring focus:border-teal-300 focus:bg-teal-500 transition-all duration-300 ease-in-out hover:bg-teal-600 text-white px-4 py-2 rounded-md flex justify-center">
            {children}
        </button>
    );
}
