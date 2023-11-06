import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Configurez un transporteur SMTP pour Gmail.
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "atelierdenathalie@gmail.com", // Votre adresse Gmail
                pass: "Nathalie031064", // Le mot de passe de votre compte Gmail
            },
        });

        // Préparez l'e-mail à envoyer.
        const mailOptions = {
            from: email, // Votre adresse Gmail
            to: "nathalie.gonot@free.fr", // Adresse e-mail destinataire
            subject: `Nouveau message de ${name}`,
            text: message,
        };

        // Envoyez l'e-mail.
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({
                    message: "Erreur lors de l'envoi de l'e-mail",
                });
            } else {
                console.log("E-mail envoyé : " + info.response);
                res.status(200).json({ message: "E-mail envoyé avec succès" });
            }
        });
    } else {
        res.status(405).end();
    }
}
