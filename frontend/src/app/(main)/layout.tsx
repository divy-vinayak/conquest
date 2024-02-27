import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

export default function MainLayout({children} : {children: ReactNode}) {
    return <div className="grid grid-cols-6 gap-1 min-h-screen">
    <div className="col-span-1 h-full fixed top-0 left-0 w-60 bg-black">
      <div className="h-full border border-teal-400 ">
        <SideBar />
      </div>
    </div>
    <div className="col-start-2 col-span-5 h-full ">
      {children}
    </div>
  </div>
    
}
