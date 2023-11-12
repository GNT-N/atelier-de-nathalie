import { useState } from "react";

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
            res.status(500).json({
                message: "Erreur lors de l'envoi de l'e-mail",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-black w-2/3">
            <div
                className="mt-16"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <div
                    style={{
                        width: 60 + "%",
                        height: 5 + "rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Prénom"
                        style={{
                            textAlign: "center",
                            width: 30 + "%",
                            marginRight: 50 + "px",
                            borderRadius: "10px",
                            backgroundColor: "transparent",
                        }}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Nom"
                        style={{
                            textAlign: "center",
                            width: 30 + "%",
                            borderRadius: "10px",
                            backgroundColor: "lightgray",
                        }}
                    />
                </div>
            </div>
            <div
                className="mt-2"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    style={{
                        textAlign: "center",
                        width: 34 + "%",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div
                className="mt-8"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    style={{
                        textAlign: "center",
                        width: 34 + "%",
                        height: 8 + "rem",
                        borderRadius: "10px",
                        backgroundColor: "transparent",
                    }}
                />
            </div>
            <button
                className="mt-8 text-black"
                type="submit"
                style={{
                    width: 100 + "%",
                }}
            >
                Soumettre
            </button>
        </form>
    );
}
