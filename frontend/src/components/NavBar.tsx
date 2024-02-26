import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <div className="flex justify-around p-5">
            <div>
                <Link href={"/"}>ConQuest</Link>
            </div>
            <div className="flex gap-2">
                <Link href={"/home"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </div>
            <div className="flex gap-2">
                <Link href={"/login"}>
                    <button>Login</button>
                </Link>
                <Link href={"/signup"}>
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    );
}
