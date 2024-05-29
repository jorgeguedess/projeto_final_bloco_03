import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="flex w-full max-w-80 flex-col items-start justify-start gap-4 border border-gray-50 p-4 shadow-lg">
      <div className="relative">
        <img src={produto.foto} alt="" />
        <span className="absolute right-0 top-0">
          {produto.categoria && (
            <span className="pointer-events-none rounded bg-[#FEEE00] px-1 py-1 font-inter font-semibold text-[#141414]">
              Categoria: {produto.categoria?.nome}
            </span>
          )}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <h4 className="mb-1 text-base font-medium capitalize text-[#194F81]">
          {produto.nome}
        </h4>

        <p className="text-2xl font-semibold text-[#194F81]">
          R$ {produto.preco}
        </p>
      </div>

      <div className="flex w-full flex-col gap-2">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="flex w-full items-center 
                    justify-center rounded bg-[#0D4F81] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a72b6]"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className="flex w-full 
                    items-center justify-center rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
