import { useSelector } from "react-redux";
import "../../css/Electronics.css";

export default function Electronics() {
  const products = useSelector((state) => state.products.products);

  //console.log(products);

  const monitors = products
    .filter((urun) => urun.title && urun.category === "electronics")
    .slice(4);

  const ssdHdd = products
    .filter((urun, index) => urun.title && urun.category === "electronics")
    .slice(0, 3);
  return (
    <>
      <div className="home-triple-div">
        <h3 style={{ textAlign: "center" }}>Monitörler</h3>
        <div className="highlights-container">
          {monitors.map((urun) => (
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

      <div className="home-triple-div">
        <h3 style={{ textAlign: "center" }}>SSD & HDD</h3>
        <div className="highlights-container">
          {ssdHdd.map((urun) => (
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
