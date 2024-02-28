import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

export default async function LandingLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    );
}
