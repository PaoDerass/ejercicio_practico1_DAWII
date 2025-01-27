import React from "react";
import {persona} from './modelos/persona';

const tarjetaP: React.FC<persona>= ({nombre, ocupacion, pais}) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <p><strong>Ocupación:</strong> {ocupacion}</p>
            <p><strong>País:</strong> {pais}</p>
        </div>
    );
};

export default tarjetaP;