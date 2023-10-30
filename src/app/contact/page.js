import React from "react";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-center">
                <h1 className="">Contact</h1>
                <Link href="/">
                    {" "}
                    <h2>Accueil</h2>
                </Link>
            </div>
        </main>
    );
}
