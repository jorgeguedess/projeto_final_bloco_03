/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useProduto } from "../../../hooks/useProduto";

function DeletarProduto() {
  const navigate = useNavigate();

  const { isLoading, produto, buscarProdutoPorId, deletarProduto } = useProduto();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  if (!id) {
    navigate("/");
    return;
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Produto</h1>

      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-blue-600 text-white font-bold text-2xl">Produto</header>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{produto.nome}</h4>
          <div>
            <img src={produto.foto} alt="" />
          </div>
          <p>R$ {produto.preco}</p>
          <p>Categoria: {produto.categoria?.nome}</p>
        </div>
        <div className="flex">
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={() => navigate("/produtos")}>
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-blue-400 
                        hover:bg-blue-600 flex items-center justify-center"
            onClick={() => deletarProduto(id)}
          >
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
