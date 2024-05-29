import { Link } from "react-router-dom";
import { categoriasMock } from "../../mock/categoriasMock";

export const NavbarBottom = () => {
  return (
    <div className="bg-gray-100">
      <nav className="container">
        <ul className="flex gap-4 justify-between">
          {categoriasMock.map((categoria) => (
            <li key={categoria.id}>
              <Link to={"/"} className="text-neutral-700 uppercase py-2 inline-block hover:text-blue-500 focus:text-blue-500 transition-colors">
                {categoria.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
