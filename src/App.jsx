import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Products" element={<Products />} />
          <Route path="ProductDetail" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
