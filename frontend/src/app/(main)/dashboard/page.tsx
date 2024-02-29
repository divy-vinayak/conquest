"use client";

import useUser from "@/hooks/useUser";
import { useEffect } from "react";

export default function Page() {
    const user = useUser();
    useEffect(() => {
        console.log({user: user})
    })
    return (
        <div>
            {user ? (
                <h1 className="text-4xl justify-center font-bold  text-teal-400 mt-10">
                    Welcome back, {user?.first_name ? user?.first_name.charAt(0).toUpperCase() + user?.first_name.slice(1) : user?.username}
                </h1>
            ) : null}

            <h1 className="text-xl justify-center font-light mb-8 text-grey">
                Lorem Ipsum is simply dummy text of the printing.
            </h1>
        </div>
    );
}
