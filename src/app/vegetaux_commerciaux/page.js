"use client";
import React from "react";
import Link from "next/link";
import ScrollableViewport from "../components/ScrollableViewport";
import styles from "../../../styles/ScrollableViewport.module.css";

export default function Commerciaux() {
    return (
        <>
            <div
                className="fixed top-0 right-0 bg-cover bg-center p-8"
                style={{
                    zIndex: 999,
                    backgroundImage: `url("/pancarte.png")`,
                }}
            >
                <div>
                    <Link href="/">Accueil</Link>
                </div>
                <div>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <ScrollableViewport>
                <main className="font-script text-center">
                    <hr className="w-2/3 mx-auto border-none" />

                    <section
                        className={styles.section}
                        style={{ position: "relative" }}
                    >
                        <div
                            className={`${styles.section} bg-cover bg-center opacity-80`}
                            style={{
                                // background écran accueil Création avec des végétaux issue du commerce
                                backgroundImage: `url("/images/bg_vege_com.jpg")`,
                            }}
                        ></div>
                        <h1
                            className="flex flex-col justify-center items-center text-lg lg:text-4xl"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "1",
                            }}
                        >
                            Création avec des végétaux issue du commerce
                        </h1>
                    </section>

                    <section
                        className={styles.section}
                        style={{ position: "relative" }}
                        id="printemps"
                    >
                        <div
                            className={`${styles.section} bg-cover opacity-80`}
                            style={{
                                // background écran Printemps
                                backgroundImage: `url("/images/printemp_min2.jpg")`,
                            }}
                        ></div>
                        <h2
                            className="flex flex-col justify-center items-center text-lg lg:text-4xl"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "1",
                            }}
                        >
                            Printemps
                        </h2>
                    </section>

                    {/* ------------------------------ Début page photos Printemps ------------------------------ */}
                    <section className={styles.section}>
                        <p className="mt-96">Page Photos</p>
                    </section>
                    {/* ------------------------------ Fin page photos Printemps ------------------------------ */}

                    <hr className="w-2/3 mx-auto border-none" />

                    <section
                        className={styles.section}
                        style={{ position: "relative" }}
                        id="ete"
                    >
                        <div
                            className={`${styles.section} bg-cover bg-center opacity-80`}
                            style={{
                                // background écran Été
                                backgroundImage: `url("/images/ete_min2.jpg")`,
                            }}
                        ></div>
                        <h2
                            className="flex flex-col justify-center items-center text-lg lg:text-4xl"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "1",
                            }}
                        >
                            Été
                        </h2>
                    </section>

                    {/* ------------------------------ Début page photos Été ------------------------------ */}
                    <section className={styles.section}>
                        <p className="mt-96">Page Photos</p>
                    </section>
                    {/* ------------------------------ Fin page photos Été ------------------------------ */}

                    <hr className="w-2/3 mx-auto border-none" />

                    <section
                        className={styles.section}
                        style={{ position: "relative" }}
                        id="automne"
                    >
                        <div
                            className={`${styles.section} bg-cover bg-center opacity-80`}
                            style={{
                                // background écran Automne
                                backgroundImage: `url("/images/automne_min2.jpg")`,
                            }}
                        ></div>
                        <h2
                            className="flex flex-col justify-center items-center text-lg lg:text-4xl"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "1",
                            }}
                        >
                            Automne
                        </h2>
                    </section>

                    {/* ------------------------------ Début page photos Automne ------------------------------ */}
                    <section className={styles.section}>
                        <p className="mt-96">Page Photos</p>
                    </section>
                    {/* ------------------------------ Fin page photos Automne ------------------------------ */}

                    <hr className="w-2/3 mx-auto border-none" />

                    <section
                        className={styles.section}
                        style={{ position: "relative" }}
                        id="hiver"
                    >
                        <div
                            className={`${styles.section} bg-cover bg-center opacity-80`}
                            style={{
                                // background écran Hiver
                                backgroundImage: `url("/images/hiver_min2.jpg")`,
                            }}
                        ></div>
                        <h2
                            className="flex flex-col justify-center items-center text-lg lg:text-4xl"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "1",
                            }}
                        >
                            Hiver
                        </h2>
                    </section>

                    {/* ------------------------------ Début page photos Hiver ------------------------------ */}
                    <section className={styles.section}>
                        <p className="mt-96">Page Photos</p>
                    </section>
                    {/* ------------------------------ Fin page photos Hiver ------------------------------ */}
                </main>
            </ScrollableViewport>
        </>
    );
}
