import Link from "next/link";
import React from "react";
import TabButton from "./TabButton";

export default function SideBar() {
    return (
        <div className="col-span-1 p-4 flex flex-col overflow-hidden items-center gap-4" style={ {fontFamily: "Abhaya Libre"} }>
            <div className=" mt-10 ml-14 flex gap-2.5 self-stretch my-auto  text-2xl font-light leading-6 text-teal-400">
                <div className="grow">
                    <Link href={"/"}>ConQuest</Link>
                </div>
            </div>
            
            <div className="flex mt-20 flex-col gap-2 w-full">
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
