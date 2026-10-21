import { Routes, Route } from "react-router";
import './App.css'
import ProductCatalog from './pages/ProductCatalog'
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/catalog" element={<ProductCatalog />} />
        </Routes>
      </main>
    </>
  )
}

export default App
