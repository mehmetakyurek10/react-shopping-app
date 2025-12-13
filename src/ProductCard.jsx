import "./CSS Dosyaları/ProductCard.css";
import { useNavigate, NavLink } from "react-router-dom";
export default function ProductCard({ urun }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${urun.id}`)}
    >
      <img
        src={urun.image}
        alt={urun.title}
        className="productCard-urun-images"
      />
      <h4 className="urun-title">{urun.title}</h4>
      <p className="urun-price-p">{urun.price} $</p>

      <NavLink to={`/products/${urun.id}`} className="detaylarıGör">
        <button className="detayları-gör-btn">Detayları Gör</button>
      </NavLink>
    </div>
  );
}
