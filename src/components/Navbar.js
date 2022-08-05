import { NavLink } from "react-router-dom";
import { BiHomeCircle, BiShoppingBag } from "react-icons/bi";
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <BiHomeCircle />
        Accueil
      </NavLink>
      <NavLink to="/basket">
        <BiShoppingBag />
        Panier
      </NavLink>
    </nav>
  );
}
