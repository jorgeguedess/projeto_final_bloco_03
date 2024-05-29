import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{produto.nome}</h4>
          <div>
            <img src={produto.foto} alt="" />
          </div>
          <p>R$ {produto.preco}</p>
          {produto.categoria && <p>Categoria: {produto.categoria?.nome}</p>}
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-white bg-blue-400 
                    hover:bg-blue-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className="text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
