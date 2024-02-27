import Link from "next/link";
import React from "react";
import TabButton from "./TabButton";

export default function SideBar() {
    return (
        <div className="min-h-full col-span-1 p-4 flex flex-col items-center gap-4">
            <div className="mt-5">Conquest</div>
            <div className="flex flex-col gap-2 w-full">
                <TabButton>
                    <Link href={"/dashboard"}>Dashboard</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/explore"}>Explore</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/profile"}>Profile</Link>
                </TabButton>
                <TabButton>
                    <Link href={"/about"}>About</Link>
                </TabButton>
            </div>
        </div>
    );
}
