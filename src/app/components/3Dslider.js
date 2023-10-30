import React from "react";
import "../../../styles/3Dslider.module.css";

function MonComposant() {
    return (
        <section id="slideshow" className="slideshow">
            <h1>L'Atelier de Nathalie</h1>
            <div className="entireContent">
                <div className="contentCarrousel">
                    <figure className="shadow">
                        <img src="images/ambu.jpg" alt="Image 1" />
                    </figure>
                    <figure className="shadow">
                        <img src="images/tatoo.jpg" alt="Image 2" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default MonComposant;
