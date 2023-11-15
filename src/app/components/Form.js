import { useState } from "react";
import styles from "../../../styles/Form.module.css";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("E-mail envoyé avec succès.");
            } else {
                console.error(
                    "Erreur lors de l'envoi de l'e-mail. Statut :",
                    response.status
                );
                const responseBody = await response.text();
                console.error("Contenu de la réponse :", responseBody);
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            method="post"
            className={styles.customForm}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridColumnGap: "10px",
                }}
            >
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                    className={styles.customInput}
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom"
                    className={styles.customInput}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={styles.customInput}
                />
            </div>
            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    className={styles.customTextarea}
                />
            </div>
            <button type="submit" className={styles.customSubmit}>
                Soumettre
            </button>
        </form>
    );
}
