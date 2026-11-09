import { Routes, Route } from "react-router";
import './App.css'
import ProductCatalog from './pages/ProductCatalog'
import { Header } from "./components/Header";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </main>
    </>
  )
}

export default App
