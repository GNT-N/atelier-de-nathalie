"use client";
import React from "react";
import Link from "next/link";
import Form from "../components/Form";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="z-10 w-9xl text-center">
                <h1 className="">Contact</h1>
                <Link href="/">
                    {" "}
                    <h2>Accueil</h2>
                </Link>
            </div>
            <Form />
        </main>
    );
}
