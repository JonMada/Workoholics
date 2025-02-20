import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importación del archivo global de estilos
import "./assets/styles/main.scss";

//Importación del navbar
import NavBar from "./components/navbar";

//Importación del banner promocional
import Banner from "../src/components/banner";

//Importación de las páginas
import LandingPage from "./pages/landing-page";
import Books from "./pages/books-page";
import Clothes from "./pages/clothes-page";
import Others from "./pages/others-page";
import Cart from "./pages/cart-page";

//Importación contexto cart
import { CartProvider } from "./components/cart-context";

function App() {
  return (
    <CartProvider>
      <Router>
        <Banner />
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/others" element={<Others />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
