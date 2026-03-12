import "../css/Layout.css";
import Footer from "./Footer";
import logo from "../images/logo.jpg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="layout-header">
        <div className="header-content">
          <img
            src={logo}
            alt="Site Logosu"
            className="logo"
            onClick={() => navigate(`/`)}
          />

          <nav className="navbar-links">
            <NavLink to="/" className="nav-link">
              Ana Sayfa
            </NavLink>
            <NavLink to="/about" className="nav-link">
              Hakkımızda
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Ürünler
            </NavLink>
          </nav>
        </div>
      </div>

      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
