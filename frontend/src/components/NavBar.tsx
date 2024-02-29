import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

export default async function NavBar() {

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
            <div className="flex gap-3 justify-between self-stretch font-medium">
                {!false ? (
                    <>
                        <Link
                            href={"/login"}
                            className="grow justify-center px-5 py-2.5 bg-teal-400 rounded-lg"
                        >
                            <button>Login</button>
                        </Link>
                        <Link
                            href={"/signup"}
                            className="grow justify-center self-start px-5 py-2 rounded-lg border-2 border-teal-400 border-solid hover:bg-teal-400"
                        >
                            <button>Get Started</button>
                        </Link>
                    </>
                ) : (
                    <>
                    <LogoutButton />
                    <Link
                            href={"/dashboard"}
                            className="grow justify-center self-start px-5 py-2 rounded-lg border-2 border-teal-400 border-solid hover:bg-teal-400"
                        >
                            <button>Go To Dashboard</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
