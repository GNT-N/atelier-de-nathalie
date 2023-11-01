import React from "react";
import Link from "next/link";
import ScrollableViewport from "./components/ScrollableViewport";
import styles from "../../styles/ScrollableViewport.module.css";

export default function Home() {
    return (
        <ScrollableViewport>
            <section
                className={`${styles.section} flex flex-col justify-center items-center h-screen`}
            >
                <h1 className="my-auto">L'Atelier De Nathalie</h1>
                <p className="w-2/3 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat risus mauris, a viverra quam finibus eget.
                    Nam et placerat massa. In semper ipsum tortor, eu accumsan
                    eros fringilla ut. Morbi dapibus consequat sapien, nec
                    facilisis quam scelerisque nec. Pellentesque egestas blandit
                    faucibus. Proin quis ullamcorper felis. Aenean sed nibh eget
                    purus efficitur consequat. Pellentesque semper sed est at
                    tempus. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. In sed lorem suscipit ligula ullamcorper blandit.
                    Maecenas rutrum nec nisi vulputate finibus. Donec auctor a
                    metus ut placerat. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Maecenas turpis augue, accumsan nec diam ac, gravida
                    fermentum augue.{" "}
                </p>
                <div className="w-1/6 my-auto">
                    <Link href="/contact">
                        <div className="border rounded">
                            {" "}
                            <p className="text-center">Me Contacter</p>
                        </div>
                    </Link>
                </div>
            </section>

            <hr className="w-2/3 mx-auto border-none" />

            <section className={styles.section}>
                <div className="flex items-center justify-center grid grid-cols-2 min-h-screen">
                    <Link className="border rounded" href="/personnels">
                        {" "}
                        <h2 className="text-center">
                            Création avec des végétaux issue de ma production
                        </h2>
                        {/* <ul className="mt-8">
                            <li className="mt-2">
                                <Link href="/personnels#printemps">
                                    Printemps
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/personnels#ete">Été</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/personnels#automne">Automne</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/personnels#hiver">Hiver</Link>
                            </li>
                        </ul> */}
                    </Link>

                    <Link className="border rounded" href="/commerciaux">
                        {" "}
                        <h2 className="text-center">
                            Création avec des végétaux issue du commerce
                        </h2>
                        {/* <ul className="mt-8 text-center">
                            <li className="mt-2">
                                <Link href="/commerciaux#printemps">
                                    Printemps
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/commerciaux#ete">Été</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/commerciaux#automne">Automne</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/commerciaux#hiver">Hiver</Link>
                            </li>
                        </ul> */}
                    </Link>
                </div>
            </section>
        </ScrollableViewport>
    );
}
