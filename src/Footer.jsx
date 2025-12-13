import { NavLink } from "react-router-dom";
import logo from "./resimler/logo.jpg";
import "./CSS Dosyaları/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-main-div">
      <h3>Magaza.com</h3>

      <div className="footer-insta-vizyon">
        <div className="vizyon-misyon">
          <p>
            <strong>Misyonumuz:</strong> Müşterilerimize ihtiyaç duydukları
            ürünleri şeffaf, pratik ve sorunsuz bir alışveriş süreciyle sunmak.
          </p>
          <p>
            <strong>Vizyonumuz:</strong> Dijital alışverişte kalite,
            erişilebilirlik ve kullanıcı memnuniyetini ön planda tutan bir marka
            haline gelmek.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="footer-navlink-div">
        <NavLink to="/" className="nav-link-footer">
          Ana Sayfa
        </NavLink>
        <NavLink to="/about" className="nav-link-footer">
          Hakkımızda
        </NavLink>
        <NavLink to="/products" className="nav-link-footer">
          Ürünler
        </NavLink>
      </div>

      <div className="logo-telif">
        <img src={logo} alt="Magaza Logo" className="footer-logo" />
        <span>© 2025 Magaza. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
