import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

export default function Products() {
  const [metin, setMetin] = useState("");
  const [urunler, setUrunler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setUrunler(json);
        setYukleniyor(false);
      });
  }, []);

  const filtrelenmisUrunler = urunler.filter(
    (urun) =>
      urun.title && urun.title.toLowerCase().includes(metin.toLowerCase())
  );

  if (yukleniyor) {
    return <h2 style={{ textAlign: "center" }}>Ürünler Yükleniyor...</h2>;
  }

  return (
    <>
      <div className="searching">
        <h2 style={{ textAlign: "center" }}>Ürünlerimiz</h2>
        <input
          type="text"
          onChange={(e) => setMetin(e.target.value)}
          value={metin}
          placeholder="Ürün ara..."
          style={{ marginBottom: "20px", padding: "10px" }}
          className="input-arama"
        />
      </div>

      <div className="products-container">
        {filtrelenmisUrunler.length === 0 ? (
          <p>Aradığınız kriterde ürün yok</p>
        ) : (
          filtrelenmisUrunler.map((urun) => (
            <ProductCard key={urun.id} urun={urun} />
          ))
        )}
      </div>
    </>
  );
}
