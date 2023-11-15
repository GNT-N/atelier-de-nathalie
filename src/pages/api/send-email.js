import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, message } = req.body;

        // Configurer le transporteur de courrier
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Définir le contenu de l'email
        const mailOptions = {
            from: "atelierdenathalie71@gmail.com",
            to: "nathalie.gonot@free.fr",
            subject: "l'Atelier de Nathalie",
            text: `Prénom : ${firstName}\nNom : ${lastName}\n\nEmail: ${email}\n\nMessage: \n${message}`,
        };

        try {
            // Envoyer l'e-mail
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                success: true,
                message: "E-mail envoyé avec succès",
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail", error);
            res.status(500).json({
                success: false,
                error: "Erreur lors de l'envoi de l'e-mail",
            });
        }
    } else {
        res.status(405).json({
            success: false,
            error: "Méthode non autorisée",
        });
    }
}
