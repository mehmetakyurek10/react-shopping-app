import { useState, useEffect } from "react";
import "./css/ProductDetail.css";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSetCurrency } from "./redux/currencySlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [urun, setUrun] = useState(null);

  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currency.currencies);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency || "USD",
  );

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setUrun(json))
      .catch((err) => console.log(err));
  }, [id]);

  if (!urun) {
    return <h2>Detaylar Yükleniyor...</h2>;
  }

  const currentRate = currencies?.[selectedCurrency] || 1;
  const convertedPrice = (urun.price * currentRate).toFixed(2);

  return (
    <div className="product-detail-main-div">
      <img src={urun.image} alt={urun.title} className="product-detail-image" />
      <h1>{urun.title}</h1>
      <div className="currency-selector-container">
        <select
          className="currency-select"
          onChange={(e) => dispatch(handleSetCurrency(e.target.value))}
        >
          <option value="">Para Birimi Seçin</option>
          <option value="USD">Dolar</option>
          <option value="TRY">Türk Lirası</option>
          <option value="EUR">Euro</option>
          <option value="GBP">Sterlin</option>
        </select>
      </div>
      <h3>
        {convertedPrice} {selectedCurrency}
      </h3>
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
