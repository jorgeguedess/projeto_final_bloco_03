/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCategoria } from "../../hooks/useCategoria";
import { Link } from "react-router-dom";

export const NavbarBottom = () => {
  const { categorias } = useCategoria();
  const categoriasMenu = categorias.slice(0, 6);

  return (
    <div className="bg-[#0D4F81] font-roboto text-white">
      <nav className="container">
        <ul className="flex flex-wrap justify-between gap-4">
          {categoriasMenu.map((categoria) => (
            <li className="py-1" key={categoria.id}>
              <Link
                to={`/categoria/${categoria.id}/{${categoria.nome}}`}
                className="inline-block py-2 
              uppercase text-white transition-colors hover:text-gray-200 focus:text-gray-200"
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
