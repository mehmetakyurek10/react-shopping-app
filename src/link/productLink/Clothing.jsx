import { useSelector } from "react-redux";
import "../../css/Clothing.css";

export default function Clothing() {
  const clothing = useSelector((state) => state.products.products);

  const menClothing = clothing
    .filter((urun, index) => urun.title && urun.category === "men's clothing")
    .slice(1);

  const womenClothing = clothing
    .filter((urun, index) => urun.title && urun.category === "women's clothing")
    .slice(3);

  console.log(clothing);

  return (
    <>
      <div className="home-triple-div">
        <h3 style={{ textAlign: "center" }}>Erkek Kıyafetleri</h3>
        <div className="highlights-container">
          {menClothing.map((urun) => (
            <div key={urun.id} className="highlights-product-card">
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
        <h3 style={{ textAlign: "center" }}>Kadın Kıyafetleri</h3>
        <div className="highlights-container">
          {womenClothing.map((urun) => (
            <div key={urun.id} className="highlights-product-card">
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
