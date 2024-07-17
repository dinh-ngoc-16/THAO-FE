import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Header from "./components/Header.jsx";
import ThemeContext from "./context.js";
import { useEffect, useState } from "react";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    location.pathname === "/login" || location.pathname === "/signup"
      ? setIsLoginPage(true)
      : setIsLoginPage(false);
  }, [location]);

  return (
    <ThemeContext.Provider value={isLoginPage}>
      {!isLoginPage ? <Header /> : <></>}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      {!isLoginPage ? <Footer /> : <></>}
    </ThemeContext.Provider>
  );
}

export default App;
