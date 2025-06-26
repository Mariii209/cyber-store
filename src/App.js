import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./HomeSection/Home";
import ProductPagePhone from "./HomeSection/ProductPage/ProductPagePhone";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductPagePhone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
