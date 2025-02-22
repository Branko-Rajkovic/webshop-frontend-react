import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import AdminItems from "./pages/AdminItems";
import AdminUsers from "./pages/AdminUsers";
import ProductPage from "./pages/ProductPage";
import AllProducts from "./pages/AllProducts";
import Category from "./pages/Category";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin-items" element={<AdminItems />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/all-products" element={<AllProducts />} />

          <Route index element={<Home />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<Category />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
