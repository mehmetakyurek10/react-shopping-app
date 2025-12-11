import logo from "./resimler/logo.jpg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="logo" onClick={() => navigate(`/`)} />

        <nav className="navbar-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
