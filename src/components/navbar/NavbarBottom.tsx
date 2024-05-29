/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { buscar } from "../../service/Service";

export const NavbarBottom = () => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const categoriasMenu = categorias.slice(0, 6);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        navigate("/");
      } else {
        console.error("Erro ao buscar categorias:", error);
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="bg-gray-100">
      <nav className="container">
        <ul className="flex flex-wrap gap-4 justify-between">
          {categoriasMenu.map((categoria) => (
            <li key={categoria.id}>
              <Link to={`/categoria/${categoria.id}/{${categoria.nome}}`} className="text-neutral-700 uppercase py-2 inline-block hover:text-blue-500 focus:text-blue-500 transition-colors">
                {categoria.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
