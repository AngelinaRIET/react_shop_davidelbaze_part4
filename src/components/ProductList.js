import ProductCard from "./ProductCard";
import { productDatabase } from "../lib/database";
import { Link } from "react-router-dom";
function ProductList() {
  return (
    <div className="productList">
      {productDatabase.map((product) => (
        <Link key={product.productCode} to={`/product/${product.productCode}`} className="linkCard">
          <ProductCard
            key={product.productCode}
            productCode={product.productCode}
            description={product.description}
            unitPrice={product.unitPrice}
          />
        </Link>
      ))}
  
    </div>
  );
}
export default ProductList;
