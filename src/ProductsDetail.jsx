import { useState, useEffect } from "react";
import "./CSS Dosyaları/ProductDetail.css";
import { useParams, NavLink } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const [urun, setUrun] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())

      .then((json) => setUrun(json))

      .catch((err) => console.log(err));
  }, [id]);

  if (!urun) {
    return <h2>Detaylar Yükleniyor...</h2>;
  }

  return (
    <div className="product-detail-main-div">
      <img src={urun.image} alt={urun.title} className="product-detail-image" />

      <h1>{urun.title}</h1>

      <h3>{urun.price} $</h3>

      <p className="urun-description">{urun.description}</p>

      <p className="urun-category">Kategori: {urun.category}</p>

      <div className="product-details-button-div">
        <NavLink to="/products" className="nav-link">
          ⬅ Ürünlere Geri Dön
        </NavLink>
      </div>
    </div>
  );
}
