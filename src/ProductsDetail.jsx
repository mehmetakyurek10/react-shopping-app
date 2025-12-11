import { useState, useEffect } from "react";

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
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Detaylar Yükleniyor...
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "20px",

        textAlign: "center",

        maxWidth: "500px",

        margin: "0 auto",
      }}
    >
      <img
        src={urun.image}
        alt={urun.title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />

      <h1>{urun.title}</h1>

      <h3 style={{ color: "green", fontSize: "24px" }}>{urun.price} $</h3>

      <p style={{ lineHeight: "1.6", color: "#555" }}>{urun.description}</p>

      <p style={{ fontWeight: "bold", marginTop: "10px" }}>
        Kategori: {urun.category}
      </p>

      <div style={{ marginTop: "20px" }}>
        <NavLink
          to="/products"
          style={{ textDecoration: "none" }}
          className="nav-link"
        >
          ⬅ Ürünlere Geri Dön
        </NavLink>
      </div>
    </div>
  );
}
