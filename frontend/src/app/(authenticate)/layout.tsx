import { ReactNode } from "react";

export default function AuthLayout({ children }: {children: ReactNode}) {
    return (
        <div className="flex h-full">
            {children}
            <div className="flex-1 border border-white">
                This is Background area as in figma design
            </div>
        </div>
    )
}