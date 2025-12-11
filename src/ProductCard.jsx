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
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h4>{urun.title}</h4>
      <p style={{ fontWeight: "bold" }}>{urun.price} $</p>

      <NavLink to={`/products/${urun.id}`} className="detaylarıGör">
        <button style={{ cursor: "pointer", padding: "5px 10px" }}>
          Detayları Gör
        </button>
      </NavLink>
    </div>
  );
}
