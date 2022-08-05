import { formatMoney } from "../lib/utilities";
import { BiCartAlt } from "react-icons/bi";
import { useRef, useState } from "react";
function ProductCard({
  productCode,
  description,
  unitPrice,
  showOverlay = true
}) {
  let timeout;
  const parentRef = useRef();
  // const [maClasse, setMaClasse] = useState("");
  const addToBasket = (e) => {
    e.preventDefault(); // court circuiter le cheminement en cours
    if (showOverlay) {
      // setMaClasse("added")
      parentRef.current.classList.add("added");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // setMaClasse("")
        parentRef.current.classList.remove("added");
      }, 1500);
    }
  };
  return (
    <div ref={parentRef} className={`card ${showOverlay ? "showOverlay" : ""}`}>
      {/* <div className={`card ${showOverlay ? "showOverlay" : ""} ${maClasse}`}> */}
      <img
        alt={`${description}`}
        width="300"
        height="400"
        src={`/images/products/${productCode.toLowerCase()}.jpg`}
      />
      <div className="bottom-bloc">
        <p>{description}</p>
        <p className="price">{formatMoney(unitPrice)}</p>
        <button onClick={addToBasket} className="addToBasket">
          <BiCartAlt /> Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
