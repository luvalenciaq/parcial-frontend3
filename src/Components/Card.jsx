import React from "react";

const Card = ({ studentName, experienceLevel, email}) => {
  return (
    <div>
      <h2>¡Bienvenido!</h2>
      <h3>Usted se ha inscrito correctamente al curso de fotografía con los siguientes datos:</h3>
      <h3>
        <strong>Nombre:</strong>
        {studentName}
      </h3>
      <h3>
        <strong>Nivel de experiencia:</strong>
        {experienceLevel}
      </h3>
      <h3>
        <strong>Correo electrónico:</strong>
        {email}
      </h3>
    </div>
  );
};

export default Card;
