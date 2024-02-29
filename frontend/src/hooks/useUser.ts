import { BACKEND_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

type UserType = {
    id: number;
    username: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    // gender: "male" | "female";
    type: "user" | 'cm' | 'admin'
} | null;

export default function useUser() {
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token || token.length === 0){
            setUser(null);
            return;
        }
        // fetch current user from backend and store it in u
        fetch(`${BACKEND_URL}/api/verify/`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json()).then(val => setUser(val.data.user));
    }, []);

    return user;
}
