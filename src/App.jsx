import Products from "./link/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./link/Home";
import About from "./link/About";
import Layout from "./components/Layout";
import ProductDetail from "./ProductsDetail";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
}
