import dress from "../../images/dress.jpg";
import jewelery from "../../images/jewelery.jpg";
import phone from "../../images/phone.png";
import "../../css/Clothing.css";

export default function Clothing() {
  return (
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
    </div>
  );
}
