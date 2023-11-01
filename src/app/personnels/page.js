"use client";
import React from "react";
import Link from "next/link";
import ScrollableViewport from "../components/ScrollableViewport";
import styles from "../../../styles/ScrollableViewport.module.css";

export default function Personnels() {
    return (
        <ScrollableViewport>
            <main className="text-center">
                <hr className="w-2/3 mx-auto border-none" />

                <section
                    className={`${styles.section} relative `}
                    id="printemps"
                >
                    <div className="absolute top-20 right-20">
                        <Link href="/">
                            {" "}
                            <h3 className="mt-2">Accueil</h3>
                        </Link>

                        <Link href="/contact">
                            {" "}
                            <h3 className="mt-2">Contact</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center h-screen">
                        <h2>Printemps</h2>
                    </div>
                </section>
                <section className={styles.section}>
                    <p className="mt-96">Page Photos</p>
                </section>

                <hr className="w-2/3 mx-auto border-gray-300" />

                <section className={`${styles.section} relative `} id="ete">
                    <div className="absolute top-20 right-20">
                        <Link href="/">
                            {" "}
                            <h3>Accueil</h3>
                        </Link>
                        <Link href="/contact">
                            {" "}
                            <h3>Contact</h3>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h2 className="">Été</h2>
                    </div>
                </section>
                <section className={styles.section}>
                    <p className="mt-96">Page Photos</p>
                </section>

                <hr className="w-2/3 mx-auto border-gray-300" />

                <section className={`${styles.section} relative `} id="automne">
                    <div className="absolute top-20 right-20">
                        <Link href="/">
                            {" "}
                            <h3>Accueil</h3>
                        </Link>
                        <Link href="/contact">
                            {" "}
                            <h3>Contact</h3>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h2>Automne</h2>
                    </div>
                </section>
                <section className={styles.section}>
                    <p className="mt-96">Page Photos</p>
                </section>

                <hr className="w-2/3 mx-auto border-gray-300" />

                <section className={`${styles.section} relative `} id="hiver">
                    <div className="absolute top-20 right-20">
                        <Link href="/">
                            {" "}
                            <h3>Accueil</h3>
                        </Link>
                        <Link href="/contact">
                            {" "}
                            <h3>Contact</h3>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h2>Hiver</h2>
                    </div>
                </section>
                <section className={styles.section}>
                    <p className="mt-96">Page Photos</p>
                </section>

                <hr className="w-2/3 mx-auto border-none" />
            </main>
        </ScrollableViewport>
    );
}
