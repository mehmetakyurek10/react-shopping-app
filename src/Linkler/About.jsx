import logo from "../resimler/logo.jpg";
import "../CSS Dosyaları/About.css";
export default function About() {
  return (
    <header>
      <div className="div-about-logo">
        <h1>Hakkımızda</h1>

        <img src={logo} alt="" className="about-logo" />
      </div>

      <p>
        Biz, teknoloji tutkunları için en iyi cihazları bir araya getiren küçük
        ama tutkulu bir ekibiz. 2024 yılından beri hizmet veriyoruz.
      </p>
      <hr />
      <h3>İletişim</h3>
      <p>Email: iletisim@magaza.com</p>
    </header>
  );
}
