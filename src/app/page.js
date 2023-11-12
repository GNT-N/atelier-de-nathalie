"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollableViewport from "./components/ScrollableViewport";
import styles from "../../styles/ScrollableViewport.module.css";
import "../app/globals.css";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Vérifiez la largeur de l'écran et définissez isMobile en conséquence
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Vous pouvez ajuster la largeur de seuil
        };

        // Vérifiez la largeur de l'écran lors du chargement initial
        checkIsMobile();

        // Ajoutez un écouteur d'événements de redimensionnement pour mettre à jour isMobile
        window.addEventListener("resize", checkIsMobile);

        return () => {
            // Retirez l'écouteur d'événements lors du démontage du composant
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <ScrollableViewport>
            <section
                className={`${styles.section} font-script flex flex-col justify-center items-center h-screen bg-cover`}
                // background écran accueil page home
                style={{ backgroundImage: `url("/images/test_accueil.jpg")` }}
            >
                <h1 className="my-auto text-4xl">L&apos;Atelier De Nathalie</h1>
                <p className="w-2/3 text-center text-2xl">
                    Considérant que la reconnaissance de la dignité inhérente à
                    tous les membres de la famille humaine et de leurs droits
                    égaux et inaliénables constitue le fondement de la liberté,
                    de la justice et de la paix dans le monde.{" "}
                </p>
                <div className="my-auto">
                    <Link href="/contact">
                        <div className="border rounded">
                            <p className="my-auto px-4 py-2">Me Contacter</p>
                        </div>
                    </Link>
                </div>
            </section>

            <hr className="w-2/3 mx-auto border-none" />

            {isMobile ? (
                <>
                    <section className={styles.section}>
                        <div className="font-script mt-16">
                            <div
                                className="bg-contain bg-center bg-no-repeat p-4 mx-auto"
                                // bakcground card Création avec des végétaux issue de ma production
                                style={{
                                    backgroundImage: `url("/flower.png")`,
                                }}
                            >
                                <Link href="/vegetaux_personnels">
                                    <h2 className="text-center text-xl">
                                        Création avec avec des végétaux issue de
                                        ma production
                                    </h2>
                                </Link>

                                <div className="grid justify-center mt-16">
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#printemps"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Printemps
                                            backgroundImage: `url("/images/printemp.jpg")`,
                                        }}
                                    >
                                        <h3>Printemps</h3>
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#ete"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Été
                                            backgroundImage: `url("/images/ete.jpg")`,
                                        }}
                                    >
                                        <h3>Été</h3>
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#automne"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Automne
                                            backgroundImage: `url("/images/automne.jpg")`,
                                        }}
                                    >
                                        <h3>Automne</h3>
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#hiver"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Hiver
                                            backgroundImage: `url("/images/hiver.jpg")`,
                                        }}
                                    >
                                        <h3>Hiver</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className="font-script mt-16">
                            <div
                                className="bg-contain bg-center bg-no-repeat p-4 mx-auto"
                                // background card Création avec des végétaux issue du commerce
                                style={{
                                    backgroundImage: `url("/flower.png")`,
                                }}
                            >
                                <Link href="/vegetaux_commerciaux">
                                    <h2 className="text-center text-xl">
                                        Création avec des végétaux issue du
                                        commerce
                                    </h2>
                                </Link>

                                <div className="grid justify-center mt-16">
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#printemps"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Printemps
                                            backgroundImage: `url("/images/printemp.jpg")`,
                                        }}
                                    >
                                        Printemps
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#ete"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Été
                                            backgroundImage: `url("/images/ete.jpg")`,
                                        }}
                                    >
                                        Été
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#automne"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Automne
                                            backgroundImage: `url("/images/automne.jpg")`,
                                        }}
                                    >
                                        Automne
                                    </Link>
                                    <Link
                                        className="bg-cover bg-center border rounded text-center m-2 sm: py-8 px-16"
                                        href="/vegetaux_personnels#hiver"
                                        style={{
                                            // background card Création avec des végétaux issue de ma production - Hiver
                                            backgroundImage: `url("/images/hiver.jpg")`,
                                        }}
                                    >
                                        Hiver
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                // Le contenu pour les écrans PC
                <section className={styles.section}>
                    <div className="font-script flex items-center grid grid-cols-2 min-h-screen">
                        <div
                            className="bg-cover bg-center h-2/3 w-4/5 p-4 mx-auto"
                            // bakcground card Création avec des végétaux issue de ma production
                            style={{
                                backgroundImage: `url("/menu1.png")`,
                            }}
                        >
                            <Link href="/vegetaux_personnels">
                                <h2 className="text-center text-2xl mt-10">
                                    Création avec avec des végétaux issue de ma
                                    production
                                </h2>
                            </Link>

                            <div className="grid grid-cols-2 text-center mt-16 px-28">
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#printemps"
                                    style={{
                                        // background card Création avec des végétaux issue de ma production - Printemps
                                        backgroundImage: `url("/images/printemp.jpg")`,
                                    }}
                                >
                                    Printemps
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#ete"
                                    style={{
                                        // background card Création avec des végétaux issue de ma production - Été
                                        backgroundImage: `url("/images/ete.jpg")`,
                                    }}
                                >
                                    Été
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#automne"
                                    style={{
                                        // background card Création avec des végétaux issue de ma production - Automne
                                        backgroundImage: `url("/images/automne.jpg")`,
                                    }}
                                >
                                    Automne
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#hiver"
                                    style={{
                                        // background card Création avec des végétaux issue de ma production - Hiver
                                        backgroundImage: `url("/images/hiver.jpg")`,
                                    }}
                                >
                                    Hiver
                                </Link>
                            </div>
                        </div>

                        <div
                            className="bg-no-repeat bg-cover bg-center h-2/3 w-4/5 p-4 mx-auto"
                            // background card Création avec des végétaux issue du commerce
                            style={{
                                backgroundImage: `url("/menu1.png")`,
                            }}
                        >
                            <Link href="/vegetaux_commerciaux">
                                <h2 className="text-center text-2xl mt-10">
                                    Création avec des végétaux issue du commerce
                                </h2>
                            </Link>

                            <div className="grid grid-cols-2 text-center mt-10">
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#printemps"
                                    style={{
                                        // background card Création avec des végétaux issue du commercer - Printemps
                                        backgroundImage: `url("/images/printemp.jpg")`,
                                    }}
                                >
                                    Printemps
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#ete"
                                    style={{
                                        // background card Création avec des végétaux issue du commercer - Été
                                        backgroundImage: `url("/images/ete.jpg")`,
                                    }}
                                >
                                    Été
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#automne"
                                    style={{
                                        // background card Création avec des végétaux issue du commercer - Automne
                                        backgroundImage: `url("/images/automne.jpg")`,
                                    }}
                                >
                                    Automne
                                </Link>
                                <Link
                                    className="bg-cover bg-center rounded flex items-center justify-center text-white m-2 p-16"
                                    href="/vegetaux_personnels#hiver"
                                    style={{
                                        // background card Création avec des végétaux issue du commercer - Hiver
                                        backgroundImage: `url("/images/hiver.jpg")`,
                                    }}
                                >
                                    Hiver
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </ScrollableViewport>
    );
}
