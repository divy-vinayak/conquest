import { ReactNode } from "react";

export default function AuthLayout({ children }: {children: ReactNode}) {
    return (
        <div className="flex h-full">
            {children}
            <div className="flex-1 border border-white" style={{ position: "relative" }}>
                <img src="https://uploads-ssl.webflow.com/6212e72bb840050c246ea51b/622dbb87b588c8f2069161cb_derive-japan-cody-ellingham.jpeg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

    )
}