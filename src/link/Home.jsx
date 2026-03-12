import { NavLink, Outlet } from "react-router-dom";
import "../css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { useEffect } from "react";
import dress from "../images/dress.jpg";
import phone from "../images/phone.png";
import jewelery from "../images/jewelery.jpg";

export default function Home() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const highlights = [...(products || [])]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home-main-div">
      <nav className="home-navlinks">
        <NavLink to="/" className="nav-link">
          Giyim
        </NavLink>
        <NavLink to="/electronics" className="nav-link">
          Elektronik
        </NavLink>
        <NavLink to="/jewelery" className="nav-link content-navlink">
          Mücevher
        </NavLink>
      </nav>

      <div className="clothing-container">
        <div className="explore-product">
          <div className="img-wrapper left-box">
            <img src={dress} alt="Elbise" />
          </div>

          <div className="img-wrapper center-box">
            <img src={jewelery} alt="Takı" />
            <button className="discover-btn">Şimdi Keşfet</button>
          </div>

          <div className="img-wrapper right-box">
            <img src={phone} alt="Telefon" />
          </div>
        </div>
        <div></div>
      </div>

      <div>
        <div className="home-triple-div">
          <h3 style={{ textAlign: "center" }}>Öne Çıkanlar</h3>
          <div className="highlights-container">
            {highlights.map((urun) => (
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
        <Outlet />
      </div>
    </div>
  );
}
