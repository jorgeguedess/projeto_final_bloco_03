import { Basket, MagnifyingGlass, UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const NavbarMiddle = () => {
  return (
    <div className="bg-white py-4 text-[#141414]">
      <div className="container flex items-center justify-between gap-10 font-medium">
        <Link to={"/"} className="flex items-center gap-4">
          <img src={Logo} alt="" className="size-14" />
          <span className="text-2xl font-semibold text-[#0D4F81]">
            DrogariaReact
          </span>
        </Link>
        <div className="relative flex w-full max-w-[500px] flex-1 rounded-xl">
          <input
            className="placeholder:[#757575] w-full rounded-xl border border-solid border-[#0D4F81] px-5 py-4 font-roboto text-base font-normal  text-black outline-none placeholder:font-normal focus:border-gray-500"
            type="text"
            placeholder="O que você procura?"
          />
          <button className="text-muted-foreground group absolute right-0 top-[50%] flex translate-y-[-50%] rounded-xl px-5 py-2 outline-none">
            <MagnifyingGlass className="size-6 text-blue-800 group-focus-visible:text-gray-500" />
          </button>
        </div>

        {/* <div className="flex items-center gap-4">
          <Link to={"/categorias"}>Categorias</Link>
          <Link to={"/produtos"}>Produtos</Link>
        </div> */}

        <div className="flex items-center gap-4">
          <Link to="/perfil" className="flex gap-2 text-base">
            <UserCircle className="size-6" />
            <span>Olá usuário!</span>
          </Link>
          <button className="flex items-center justify-center gap-2">
            <div className="relative">
              <Basket className="z-10 size-7" />
              <span className="bg-primary absolute bottom-[20px] right-0 flex size-4 items-center justify-center rounded-full bg-[#0D4F81] text-xs font-bold text-white">
                0
              </span>
            </div>
            <span className="sr-only">Carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
};
