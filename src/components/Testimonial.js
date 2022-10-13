import React from "react";

function Testimonial() {
  return (
    <div className="contenedor">
      <img
        className="img"
        src={require("../assets/Messi.jpg")}
        alt="Messi"
      />
      <div className="testimonials">
        <p className="nombre">Lionel Messi | PSG</p>
        <p className="posicion">CentroCampista</p>
        <p className="text">
          No sé si somos los grandes candidatos, pero creo que la Argentina de
          por sí es candidata siempre, por su historia, por lo que significa y
          más ahora en el momento en el que llegamos... Pero no somos los
          máximos favoritos, me parece a mí. Creo que hay otras selecciones que
          están por encima de nosotros, pero estamos ahí... muy cerquita
        </p>
      </div>
    </div>
  );
}


export default Testimonial