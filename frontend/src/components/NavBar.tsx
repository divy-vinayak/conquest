import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import React from "react";

export default async function NavBar() {
    const session = await getSession();
    const user = session?.user || null;

    return (
        <div
            className="flex gap-5 justify-between items-center w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full px-4"
            style={{
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: "26px",
                fontFamily: "Abhaya Libre",
            }}
        >
            {/* Logo and Brand */}
            <div className="flex gap-2.5 self-stretch my-auto  text-2xl font-bold leading-6 text-teal-400">
                <div className="grow">
                    <Link href={"/"}>ConQuest</Link>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-5 justify-between self-stretch my-auto">
                <div>
                    <Link href={"/home"}>Home</Link>
                </div>
                <div>
                    <Link href={"/about"}>About</Link>
                </div>
                <div>
                    <Link href={"/contact"}>Contact Us</Link>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5 justify-between self-stretch font-medium">
                <div className="grow justify-center px-5 py-2.5 bg-teal-400 rounded-lg">
                    {!user ? (
                        <Link href={"/api/auth/login"}>
                            <button>Login</button>
                        </Link>
                    ) : (
                        <Link href={"/api/auth/logout"}>
                            <button>Logout</button>
                        </Link>
                    )}
                </div>
                <div
                    className="grow justify-center self-start px-5 py-2 rounded-lg border-2 border-teal-400 border-solid"
                    style={{ paddingRight: "20px" }}
                >
                    <Link href={"/signup"}>
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
