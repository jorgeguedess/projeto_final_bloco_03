/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCategoria } from "../../hooks/useCategoria";
import { Link } from "react-router-dom";

export const NavbarBottom = () => {
  const { categorias, isLoading } = useCategoria();
  const categoriasMenu = categorias.slice(0, 6);

  return (
    <div className="bg-gray-100">
      <nav className="container">
        <ul className="flex flex-wrap gap-4 justify-between">
          {categoriasMenu.map((categoria) => (
            <li className="py-1" key={categoria.id}>
              <Link
                to={`/categoria/${categoria.id}/{${categoria.nome}}`}
                className="text-neutral-700 uppercase 
              py-2 inline-block hover:text-blue-500 focus:text-blue-500 transition-colors"
              >
                {categoria.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
