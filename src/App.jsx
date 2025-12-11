import Products from "./Linkler/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./Linkler/Home";
import About from "./Linkler/About";
import Layout from "./Layout";
import ProductDetail from "./ProductsDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}
