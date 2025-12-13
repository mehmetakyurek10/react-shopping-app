import "../CSS Dosyaları/Products.css";
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
    return <h2>Ürünler Yükleniyor...</h2>;
  }

  return (
    <div className="product-main-div">
      <div className="searching">
        <h2>Ürünlerimiz</h2>
        <input
          type="text"
          onChange={(e) => setMetin(e.target.value)}
          value={metin}
          placeholder="Ürün ara..."
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
    </div>
  );
}
