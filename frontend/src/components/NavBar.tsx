import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <div className="flex gap-5 justify-between items-center w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full px-4" style={{ marginLeft: "0px", marginRight: "0px", marginTop:"26px", fontFamily: "Abhaya Libre" }}>
            {/* Logo and Brand */}
            <div className="flex gap-2.5 self-stretch my-auto  text-2xl font-bold leading-6 text-teal-400">
                <img/>
                <div className="grow">
                    <Link href={"/"}>ConQuest</Link>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-5 justify-between self-stretch my-auto">
                <div><Link href={"/home"}>Home</Link></div>
                <div><Link href={"/about"}>About</Link></div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5 justify-between self-stretch font-medium">
                <div className="grow justify-center px-5 py-2.5 bg-teal-400 rounded-lg">
                    <Link href={"/login"}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="grow justify-center self-start px-5 py-2 rounded-lg border-2 border-teal-400 border-solid" style={{ paddingRight: "20px" }}>
                    <Link href={"/signup"}>
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
