import "./css/ProductCard.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard({ urun }) {
  const navigate = useNavigate();
  const currencies = useSelector((state) => state.currency.currencies);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency,
  );

  const convertedPrice = (urun.price * currencies[selectedCurrency]).toFixed(2);

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
      <p className="urun-price-p">
        {convertedPrice} {selectedCurrency}
      </p>
      <NavLink to={`/products/${urun.id}`} className="detaylarıGör">
        <button className="detayları-gör-btn">Detayları Gör</button>
      </NavLink>
    </div>
  );
}
