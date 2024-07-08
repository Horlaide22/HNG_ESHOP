import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fallback from "./components/Shared/Fallback";
import Layout from "./components/Shared/Layout";
import { Product } from "./Views/Product/Product";
import Cart from "./Views/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Fallback />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
