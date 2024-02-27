import { useEffect, useState } from "react";

type UserType = {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    role: 'cm' | 'user' | 'admin'
} | null;

export default function useUser() {
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        // fetch current user from backend and store it in u
        const u: UserType = {
            id: "1",
            userName: "pratyush",
            email: "pratyushkumar0308@gmail.com",
            firstName: "Pratyush",
            lastName: "Kumar",
            gender: "female",
            role: 'cm'
        };
        setUser(u);
    }, []);

    return user;
}
