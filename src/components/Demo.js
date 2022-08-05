import { useRef } from "react";

const Demo = () => {
  const maReference = useRef(); //maReference.current contient un objet {}
  const maFonction = () => {
    //ici je vais modifier le text du premier bouton
    maReference.current.textContent = "Mon nouveau texte"
  };
  return (
    <div>
      <button ref={maReference}>Coucou</button>
      <button onClick={maFonction}>Changer le texte du premier bouton</button>
    </div>
  );
};

export default Demo;
