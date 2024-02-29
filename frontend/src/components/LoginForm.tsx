/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { BACKEND_URL } from "@/lib/constants";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    const router = useRouter();

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
        const apiUrl = BACKEND_URL + "/api/login/";
        // console.log({apiUrl: apiUrl, formData: formData})

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 401) {
                alert('Invalid credentials. Please try again')
                return;
            }

            const resData = await response.json();
            localStorage.setItem('token', resData.token);
            router.push('/dashboard')
        } catch (error) {
            // Handle errors (e.g., display an error message to the user)
            console.error("Error submitting form data:", error);
        }
    };

    return (
        <div className="flex bg-white justify-center h-screen">
            <div className="p-8" style={{ fontFamily: "Abhaya Libre" }}>
                <br />
                <div className="text-xl font-bold text-teal-400 mb-10 text-center">
                    <Link href={"/"}>Conquest</Link>
                </div>
                <br />
                <br />
                <div className="text-5xl font-bold text-black mb-1 text-center ">
                    Welcome Back
                </div>
                <div className="text-lg text-gray-400 mb-6 text-center">
                    Enter your username and password to access your account
                </div>
                <br />
                <br />

                <form className="mb-6" onSubmit={handleSubmit}>
                    <label className="text-lg block mb-4 text-black">
                        username
                        <input
                            className="block w-full mt-1 border-b-2 border-gray-300 focus:border-teal-400 ounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
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
                    <div className="flex justify-between mt-2">
                        <label className="text-gray-400">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                className="mr-1"
                            />
                            Remember me
                        </label>
                        <a href="#" className="text-gray-400">
                            Forgot my password
                        </a>
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
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="text-center text-lg text-gray-400">
                    Don't have an account?{" "}
                    <b>
                        <Link href={"/signup"}>Sign Up</Link>
                    </b>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
