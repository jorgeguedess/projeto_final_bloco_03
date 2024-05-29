import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import FormCategoria from "./components/categorias/form-categoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletar-categoria/DeletarCategoria";
import ListaCategorias from "./components/categorias/lista-categorias/ListaCategorias";
import Perfil from "./pages/perfil/Perfil";
import { NotFound } from "./components/notfound/NotFound";
import CategoriaPage from "./pages/categoria/Categoria";

function App() {
  return (
    <div className="font-inter flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categoria/:id/:nome" element={<CategoriaPage />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
