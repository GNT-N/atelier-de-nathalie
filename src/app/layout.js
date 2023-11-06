import { Inter } from "next/font/google";
import "./globals.css";

const pinyonScript = "Pinyon Script";

export const metadata = {
    title: "L'Atelier De Nathalie",
    description: "Flower compostion",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={pinyonScript.className}>{children}</body>
        </html>
    );
}
