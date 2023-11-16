import { Inter } from "next/font/google";
import "./globals.css";

const pinyonScript = "Pinyon Script";

export const metadata = {
    title: "L'Atelier De Nathalie",
    description: "Flower compostion",
};

export default function RootLayout({ children }) {
    return (
        <>
            <head>
                <meta
                    name="L\'Atelier De Nathalie"
                    content="Blog de différentes compositions fleural"
                />
                <link rel="icon" href="/favicon.png" />
                <title>L&apos;Atelier De Nathalie</title>
            </head>
            <html lang="en">
                <body className={pinyonScript.className}>{children}</body>
            </html>
        </>
    );
}
