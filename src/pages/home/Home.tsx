import ListaProdutos from "../../components/produtos/lista-produtos/ListaProdutos";

import HomeMarket2 from "../../assets/farmacia/market2.jpg";
import HomeMarket3 from "../../assets/farmacia/market3.jpg";
import HomeMarket1 from "../../assets/farmacia/market1.jpg";

export const Home = () => {
  return (
    <div className="flex-1">
      <section className="w-full py-8">
        <div className="container text-center text-[#0D4F81]">
          <h2 className="mb-4 text-3xl font-bold">Mais Vendidos</h2>
          <ListaProdutos />
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container text-center text-[#0D4F81]">
          <div className="mb-4">
            <h2 className="mb-2 text-3xl font-bold">A Nossa Drogaria</h2>
            <p className="text-base">Nossa família cuida da sua, desde 1960</p>
          </div>
          <div className="grid grid-cols-3  gap-4">
            <img src={HomeMarket1} className="rounded" alt="" />
            <img src={HomeMarket2} className="rounded" alt="" />
            <img src={HomeMarket3} className="rounded" alt="" />
          </div>
        </div>
      </section>

      {/* <div>
        <div className="flex justify-center bg-blue-950 py-8">
          <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col items-center justify-center gap-4 py-4">
              <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
              <p className="text-xl">
                Expresse aqui seus pensamentos e opniões
              </p>

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
      </div> */}
    </div>
  );
};
