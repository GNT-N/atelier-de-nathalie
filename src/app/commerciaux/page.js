import React from "react";
import Link from "next/link";

export default function page2() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-center">
                <h1 className="">
                    Création avec des végétaux issue du commerce
                </h1>
            </div>
            <section>
                <h2>Printemps</h2>
                <Link href="/">
                    {" "}
                    <h3>Accueil</h3>
                </Link>
                <Link href="/contact">
                    {" "}
                    <h3>Contact</h3>
                </Link>
            </section>

            <section>
                <h2>Été</h2>
                <Link href="/">
                    {" "}
                    <h3>Accueil</h3>
                </Link>
                <Link href="/contact">
                    {" "}
                    <h3>Contact</h3>
                </Link>
            </section>

            <section>
                <h2>Automne</h2>
                <Link href="/">
                    {" "}
                    <h3>Accueil</h3>
                </Link>
                <Link href="/contact">
                    {" "}
                    <h3>Contact</h3>
                </Link>
            </section>

            <section>
                <h2>Hiver</h2>
                <Link href="/">
                    {" "}
                    <h3>Accueil</h3>
                </Link>
                <Link href="/contact">
                    {" "}
                    <h3>Contact</h3>
                </Link>
            </section>
        </main>
    );
}
