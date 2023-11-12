"use client";
import React from "react";
import Link from "next/link";
import Form from "../components/Form";

export default function Contact() {
    return (
        <main>
            <div
                className="flex min-h-screen flex-col items-center bg-center bg-contain bg-no-repeat"
                style={{
                    backgroundImage: `url("/contact_cadre.png")`,
                }}
            >
                <h1 className="text-4xl text-center mt-12">Contact</h1>
                <div className="flex flex-col items-center w-full mt-32">
                    <Form />
                </div>
                <div className="border rounded mt-10">
                    <Link href="/">
                        <h2 className="px-8 text-black">Accueil</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
}
