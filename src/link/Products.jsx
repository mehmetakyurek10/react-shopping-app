import "../css/Products.css";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { handleSetCurrency } from "../redux/currencySlice";
import { handleSetCategory } from "../redux/categorySlice";

export default function Products() {
  const [metin, setMetin] = useState("");
  const [urunler, setUrunler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setUrunler(json);
        setYukleniyor(false);
      });
  }, []);

  const filtrelenmisUrunler = urunler.filter((urun) => {
    const metinEslesiyorMu =
      urun.title && urun.title.toLowerCase().includes(metin.toLowerCase());

    const kategoriEslesiyorMu =
      selectedCategory === "all" ||
      (urun.category &&
        urun.category.toLowerCase() === selectedCategory.toLowerCase());
    return metinEslesiyorMu && kategoriEslesiyorMu;
  });

  if (yukleniyor) {
    return <h2>Ürünler Yükleniyor...</h2>;
  }

  return (
    <>
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
          <div className="filters-container">
            <select
              className="currency-select"
              onChange={(e) => dispatch(handleSetCurrency(e.target.value))}
            >
              <option value="USD">Dolar</option>
              <option value="TRY">Türk Lirası</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Sterlin</option>
            </select>

            <select
              className="category-select"
              onChange={(e) => dispatch(handleSetCategory(e.target.value))}
            >
              <option value="all">Tüm Kategoriler</option>
              <option value="Men's Clothing">Erkek Giyim</option>
              <option value="Jewelery">Takı & Mücevher</option>
              <option value="Electronics">Elektronik</option>
              <option value="Women's Clothing">Kadın Giyim</option>
            </select>
          </div>
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
    </>
  );
}
