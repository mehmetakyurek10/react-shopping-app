import { useSelector } from "react-redux";
import "../../css/Jewelery.css";

export default function Jewelery() {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const jewelry = products.filter(
    (urun) => urun.title && urun.category === "jewelery",
  );

  return (
    <>
      <div className="home-triple-div">
        <h3 style={{ textAlign: "center" }}>Mücevherler</h3>
        <div className="highlights-container">
          {jewelry.map((urun) => (
            <div className="highlights-product-card">
              <img
                src={urun.image}
                alt={urun.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
