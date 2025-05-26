import React from "react";

const InputText = ({ nombre, enCambio, placeHolder, valor }) => {
  return (
    <input
      type="text"
      name={nombre}
      placeholder={placeHolder}
      onChange={enCambio}
      value={valor}
      className="u-full-width"
    />
  );
};

export default InputText;