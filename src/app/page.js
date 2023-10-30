import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-center">
                <h1 className="">L'Atelier De Nathalie</h1>
                <Link href="/personnels">
                    {" "}
                    <h2>Création avec des végétaux issue de ma production</h2>
                </Link>
                <Link href="/commerciaux">
                    {" "}
                    <h2>Création avec des végétaux issue du commerce</h2>
                </Link>
            </div>
        </main>
    );
}
