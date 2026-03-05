import { NavLink, Outlet } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-main-div">
      <nav className="home-navlinks">
        <NavLink to="/">Giyim</NavLink>
        <NavLink to="/electronics">Elektronik</NavLink>
        <NavLink to="/jewelery">Mücevher</NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
