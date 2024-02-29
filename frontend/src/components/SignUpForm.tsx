"use client";
import { BACKEND_URL } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

export default function SignUpForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        username: string;
        email: string;
        password: string;
    }>({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Replace 'https://example.com/api' with your API endpoint
        const apiUrl = BACKEND_URL + "/api/signup/";
        // console.log({apiUrl: apiUrl, formData: formData})

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 201) {
                const data = await response.json();
                alert(data.message)
                router.push('/login')
            }

        } catch (error) {
            // Handle errors (e.g., display an error message to the user)
            console.error("Error submitting form data:", error);
        }
    }

    return (
        <div className="flex bg-white justify-center h-screen">
            <div className="p-8" style={{ fontFamily: "Abhaya Libre" }}>
                <br />
                <div className="text-xl font-bold text-teal-400 mb-10 text-center">
                    <Link href={"/"}>Conquest</Link>
                </div>
                <br />
                <div className="text-5xl font-bold text-black mb-1 text-center ">
                    Create an account
                </div>

                <form className="mb-6" onSubmit={handleSubmit}>
                    <br />
                    <br />
                    <label className="text-lg block mb-4 text-black">
                        Username
                        <input
                            className="block w-full mt-1 border-b-2 border-gray-300 focus:border-teal-400 ounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
                            type="text"
                            name="username"
                            placeholder="Enter your user name"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </label>

                    <br />
                    <label className="text-lg block mb-4 text-black">
                        Email
                        <input
                            className="block w-full mt-1 border-b-2 border-gray-300 focus:border-teal-400 ounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>

                    <br />
                    <label className="text-lg block mb-4 text-black">
                        Password:
                        <input
                            className="ounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-noneblock w-full mt-1 text-black border-b-2 border-gray-300 focus:border-teal-400"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </label>
                    <div className="text-center text-lg text-gray-400">
                        By creating an account,
                        <br />
                        you agree to our Term of use and Privacy Policy
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center">
                        {" "}
                        {/* Added flex utilities to center the button */}
                        <button
                            className="bg-teal-400 text-white font-bold py-2 px-4 rounded hover:bg-teal-500"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="text-center text-lg text-gray-400">
                    Already have an account?{" "}
                    <b>
                        <Link href={"/login"}>Sign In</Link>
                    </b>
                </div>
            </div>
        </div>
    );
}
