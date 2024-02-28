"use client";

import React, { useState } from "react";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log("Form data submitted:", formData);
        // Reset the form after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-black mt-40 text-black rounded-lg shadow-lg ">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium text-teal-400 bg-black text-xl py-2  border-teal-500 outline-none rounded-t-lg">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 rounded-md bg-white border-b py-3 border-teal-500 outline-none w-[500px]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-teal-400 bg-black text-xl py-2  border-teal-500 outline-none rounded-t-lg">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 rounded-md bg-white border-b py-3 border-teal-500 outline-none w-[500px]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium text-teal-400 bg-black text-xl py-2  border-teal-500 outline-none rounded-t-lg">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 rounded-md bg-white border-b py-3 border-teal-500 outline-none w-[500px]"
                        required
                    />
                </div>
                <button type="submit" className="bg-teal-600 text-white py-2 px-4 rounded text-center">Submit</button>
            </form>
        </div>
    );
}
