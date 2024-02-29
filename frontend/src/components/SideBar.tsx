import Link from "next/link";
import React from "react";
import TabButton from "./TabButton";
import LogoutButton from "./LogoutButton";

export default function SideBar() {
    return (
        <div className="col-span-1 flex flex-col overflow-hidden items-center gap-4 justify-between" style={ {fontFamily: "Abhaya Libre", height:"100%"} }>
            {/* ConQuest */}
            <div className="mt-10 justify-center flex text-2xl font-light text-teal-400">
                <div className="grow">
                    <Link href={"/"}>ConQuest</Link>
                </div>
            </div>
            
            {/* Tab Buttons */}
            <div className="flex flex-col mt-10 w-full font-light">
                <TabButton>
                    <Link href={"/dashboard"}>Dashboard</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/explore"}>Explore</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/profile/me"}>Profile</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/about"}>About</Link>
                </TabButton>
            </div>
            
            {/* Logout Button */}
            <div className="mt-auto flex flex-col w-full font-light mb-2">
                <LogoutButton />
            </div>
        </div>
    );
}
