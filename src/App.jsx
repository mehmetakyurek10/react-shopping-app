import Products from "./link/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./link/Home";
import About from "./link/About";
import Layout from "./components/Layout";
import ProductDetail from "./ProductsDetail";
import ScrollToTop from "./components/ScrollToTop";
import Clothing from "./link/productLink/Clothing";
import Electronics from "./link/productLink/Electronics";
import Jewelery from "./link/productLink/Jewelery";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />}>
            <Route index element={<Clothing />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
}
