import { useState } from "react";
import styles from "../../../styles/Form.module.css";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [validationMessage, setValidationMessage] = useState(null);

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
                setValidationMessage({
                    success: true,
                    message: "E-mail envoyé avec succès.",
                });
            } else {
                setValidationMessage({
                    success: false,
                    message: `Erreur lors de l'envoi de l'e-mail.`,
                });
            }
        } catch (error) {
            setValidationMessage({
                success: false,
                message: "Erreur lors de l'envoi de l'e-mail.",
            });
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                method="post"
                className={styles.customForm}
            >
                <div className={styles.customDiv}>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Prénom"
                        className={styles.customInput}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Nom"
                        className={styles.customInput}
                        required
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
                        required
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className={styles.customTextarea}
                        required
                    />
                </div>
                <button type="submit" className={styles.customSubmit}>
                    Envoyer
                </button>
            </form>
            {validationMessage && (
                <div
                    className={
                        validationMessage.success
                            ? styles.successMessage
                            : styles.errorMessage
                    }
                >
                    {validationMessage.message}
                </div>
            )}
        </div>
    );
}
