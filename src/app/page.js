import React from "react";
import Link from "next/link";
import ScrollableViewport from "./components/ScrollableViewport";
import styles from "../../styles/ScrollableViewport.module.css";

export default function Home() {
    return (
        <ScrollableViewport>
            <section
                className={`${styles.section} font-script flex flex-col justify-center items-center h-screen bg-cover`}
                // background écran accueil page home
                style={{ backgroundImage: `url("/images/bg_ete.jpg")` }}
            >
                <h1 className="my-auto">L&apos;Atelier De Nathalie</h1>
                <p className="w-2/3 text-center">
                    Considérant que la reconnaissance de la dignité inhérente à
                    tous les membres de la famille humaine et de leurs droits
                    égaux et inaliénables constitue le fondement de la liberté,
                    de la justice et de la paix dans le monde.{" "}
                </p>
                <div className="my-auto">
                    <Link href="/contact">
                        <div className="border rounded">
                            {" "}
                            <p className="my-auto px-4 py-2">Me Contacter</p>
                        </div>
                    </Link>
                </div>
            </section>

            <hr className="w-2/3 mx-auto border-none" />

            <section className={styles.section}>
                <div className="font-script flex items-center justify-center grid lg:grid-cols-2 min-h-screen sm:grid-cols-1">
                    <div
                        className="border rounded h-2/3 w-3/5 p-4 mx-auto"
                        // bakcground card Création avec des végétaux issue de ma production
                        style={{ backgroundImage: `url("/images/bg_ete.jpg")` }}
                    >
                        <Link href="/vegetaux_personnels">
                            <h2 className="text-center mt-16">
                                Création avec avec des végétaux issue de ma
                                production
                            </h2>
                        </Link>

                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 text-center justify-center lg:mt-20">
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 mx-2 p-16"
                                href="/vegetaux_personnels#printemps"
                                style={{
                                    // background card Création avec des végétaux issue de ma production - Printemps
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Printemps
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 mx-2 p-16"
                                href="/vegetaux_personnels#ete"
                                style={{
                                    // background card Création avec des végétaux issue de ma production - Été
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Été
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 mx-2 p-16"
                                href="/vegetaux_personnels#automne"
                                style={{
                                    // background card Création avec des végétaux issue de ma production - Automne
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Automne
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 mx-2 p-16"
                                href="/vegetaux_personnels#hiver"
                                style={{
                                    // background card Création avec des végétaux issue de ma production - Hiver
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Hiver
                            </Link>
                        </div>
                    </div>

                    <div
                        className="border rounded h-2/3 w-3/5 p-4 mx-auto"
                        // background card Création avec des végétaux issue du commerce
                        style={{ backgroundImage: `url("/images/bg_ete.jpg")` }}
                    >
                        <Link href="/vegetaux_commerciaux">
                            <h2 className="text-center mt-16">
                                Création avec des végétaux issue du commerce
                            </h2>
                        </Link>

                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 text-center justify-center lg:mt-20">
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 p-16"
                                href="/vegetaux_commerciaux#printemps"
                                style={{
                                    // background card Création avec des végétaux issue du commerce - Printemps
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Printemps
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 p-16"
                                href="/vegetaux_commerciaux#ete"
                                style={{
                                    // background card Création avec des végétaux issue du commerce - Été
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Été
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 p-16"
                                href="/vegetaux_commerciaux#automne"
                                style={{
                                    // background card Création avec des végétaux issue du commerce - Automne
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Automne
                            </Link>
                            <Link
                                className="border rounded flex items-center justify-center text-white m-2 p-16"
                                href="/vegetaux_commerciaux#hiver"
                                style={{
                                    // background card Création avec des végétaux issue du commerce - Hivers
                                    backgroundImage: `url("/images/bg_ete.jpg")`,
                                }}
                            >
                                Hiver
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableViewport>
    );
}
