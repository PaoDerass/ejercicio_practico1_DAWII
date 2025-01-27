import React from "react";
import {persona} from "/src/modelos/persona";

const tarjetaP: React.FC<persona>= ({nombre, ocupacion, pais}) => {
    return (
        <h3>{nombre}</h3>
        <p><strong>Ocupación:</strong>{ocupacin}</p>
        <p><strong>Pais:</strong>{pais}</p>
    );
};

export default tarjetaP;