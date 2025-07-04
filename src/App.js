import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./HomeSection/Home";
import ProductPagePhone from "./HomeSection/ProductPage/ProductPagePhone";
import ProductDetail from "./HomeSection/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductPagePhone />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
