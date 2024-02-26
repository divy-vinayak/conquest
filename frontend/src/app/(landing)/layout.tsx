import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="min-h-screen">{children}</div>
        </>
    );
}
