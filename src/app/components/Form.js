import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "", // Ajoutez le champ message
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Envoi des données du formulaire au serveur (votre API route)
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Le formulaire a été envoyé avec succès, affichez un message de succès.
                console.log("E-mail envoyé avec succès.");
            } else {
                // Affichez une erreur en cas d'échec de l'envoi du formulaire.
                console.error("Erreur lors de l'envoi de l'e-mail.");
            }
        } catch (error) {
            // Gérez les erreurs liées à la requête.
            console.error("Erreur lors de l'envoi de la requête.", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-black w-2/3">
            <div
                className="mt-16"
                style={{ display: "flex", justifyContent: "center" }}
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
                        marginRight: 39 + "px",
                        borderRadius: "10px",
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
                    }}
                />
            </div>
            <div
                className="mt-8"
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
                        width: 64 + "%",
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
                        width: 64 + "%",
                        height: 10 + "rem",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <button
                className="mt-8 text-white"
                type="submit"
                style={{ width: 100 + "%" }}
            >
                Soumettre
            </button>
        </form>
    );
}
