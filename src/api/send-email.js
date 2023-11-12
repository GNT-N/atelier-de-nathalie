import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            secure: false,
            auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        try {
            console.log(req.body);
            await transporter.sendMail({
                from: '"atelier de nathalie" <atelierdenathalie@gmail.com>',
                to: "nathalie.gonot@free.fr",
                subject: "atelier de nathalie",
                text: `De: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
                html: `
                    <p>De: ${firstName} ${lastName}</p>
                    <p>Email: ${email}</p>
                    <p>Message: ${message}</p>
                `,
            });

            console.log("E-mail envoyé :", info.response);
            res.status(200).json({ message: "E-mail envoyé avec succès" });
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
            res.status(500).json({
                message: "Erreur lors de l'envoi de l'e-mail",
            });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
