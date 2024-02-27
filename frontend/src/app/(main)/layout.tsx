import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

export default function MainLayout({children} : {children: ReactNode}) {
    return <div className="grid grid-cols-6 gap-1 min-h-screen">
        <SideBar />
        {children}
    </div>
}