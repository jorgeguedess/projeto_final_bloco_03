import Banner from "../../assets/banner.png";
import ModalCategoria from "../../components/categorias/modal-categoria/ModalCategoria";
import ListaProdutos from "../../components/produtos/lista-produtos/ListaProdutos";
import ModalProduto from "../../components/produtos/modal-produto/ModalProduto";

export const Home = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-blue-950 py-8">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalProduto />
                <ModalCategoria />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={Banner} alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaProdutos />
    </div>
  );
};
