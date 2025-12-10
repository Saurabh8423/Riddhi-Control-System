import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Photos from "./pages/Photos/Photos";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Dashboard from "./pages/Admin/Dashboard";
import ManageProducts from "./pages/Admin/ManageProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute admin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute admin={true}>
              <ManageProducts />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
