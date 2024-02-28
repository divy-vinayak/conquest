import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

export default function MainLayout({children} : {children: ReactNode}) {
    return <div className="grid grid-cols-6 gap-1 min-h-screen">
    <div className="col-span-1 h-full fixed col-start-1 col-end-2 top-0 left-0 w-60 bg-black">
      <div className="h-full border-r col-start-1 col-end-2 bg-black border-teal-400 ">
        <SideBar />
      </div>
    </div>
    <div className="col-end-6 col-start-2 justify-center col-span-6 h-full ">
      {/* Search Bar */}
      <div className="bg-gray-900 mb-6 mt-10 ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-black border-2 border-white text-white px-4 py-2 w-full focus:outline-teal-2 focus:bg-black"
          />
        </div>

        {/* Children Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
    
}
