import { Basket, MagnifyingGlass, UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const NavbarTop = () => {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container flex gap-4 items-center justify-between font-medium">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} alt="" className="size-14" />
          Farmácia Dev
        </Link>
        <div className="relative flex w-full max-w-[500px] rounded-xl flex-1">
          <input className="font-roboto w-full rounded-xl border border-solid border-border px-6 py-2 text-base  outline-none placeholder:font-normal placeholder:text-muted-foreground focus:border-gray-500 text-black" type="text" placeholder="O que você procura?" />
          <button className="group absolute right-0 top-0 flex rounded-xl px-3 py-2 text-muted-foreground outline-none">
            <MagnifyingGlass className="group-focus-visible:text-gray-500 text-blue-800 size-6" />
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <Link to={"/categorias"}>Categorias</Link>
          <Link to={"/produtos"}>Produtos</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/perfil" className="flex gap-2">
            <UserCircle className="size-6" />
            <span>Olá usuário!</span>
          </Link>
          <button className="flex items-center justify-center gap-2">
            <div className="relative">
              <Basket className="z-10 size-7" />
              <span className="absolute bottom-[20px] left-4 right-0 flex size-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-blue-800 bg-white">0</span>
            </div>
            <span className="sr-only">Carrinho</span>
          </button>
        </div>
      </div>
    </header>
  );
};
