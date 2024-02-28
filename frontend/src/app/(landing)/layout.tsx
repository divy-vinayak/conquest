import NavBar from "@/components/NavBar";
import { ReactNode } from "react";
import { getSession } from "@auth0/nextjs-auth0";

export default function LandingLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    );
}
