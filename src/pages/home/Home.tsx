import ListaCategorias from "../../components/categorias/lista-categorias/ListaCategorias";
import HomeFarmacia from "../../assets/home-farmacia.svg";
import ModalCategoria from "../../components/categorias/modal-categoria/ModalCategoria";
import Popup from "reactjs-popup";

export const Home = () => {
  return (
    <div className="flex-1 py-4 md:py-8 bg-blue-950">
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalCategoria />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={HomeFarmacia} alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </div>
  );
};
