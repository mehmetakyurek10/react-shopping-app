import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "../css/ScrollToTop.css";

export default function ScrollToTop() {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const scrollControl = () => {
      if (window.scrollY > 300) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", scrollControl);
    return () => window.removeEventListener("scroll", scrollControl);
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visibility && (
        <button onClick={toTop} className="scroll-to-top-btn">
          <FaAngleUp size={24} />
        </button>
      )}
    </>
  );
}
