/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useProduto } from "../../../hooks/useProduto";

function DeletarProduto() {
  const navigate = useNavigate();

  const { isLoading, produto, buscarProdutoPorId, deletarProduto } =
    useProduto();

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
    <div className="container w-full py-8">
      <div className="mx-auto max-w-[400px]">
        <h1 className="my-4 text-center text-4xl">Deletar Produto</h1>

        <p className="mb-4 text-center font-semibold">
          Você tem certeza de que deseja apagar o produto a seguir?
        </p>

        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
          <header className="bg-blue-600 px-6 py-2 text-2xl font-bold text-white">
            Produto
          </header>
          <div className="p-4 ">
            <h4 className="text-lg font-semibold uppercase">{produto.nome}</h4>
            <div>
              <img src={produto.foto} alt="" />
            </div>
            <p>R$ {produto.preco}</p>
            <p>Categoria: {produto.categoria?.nome}</p>
          </div>
          <div className="flex">
            <button
              className="w-full bg-red-400 py-2 text-slate-100 hover:bg-red-600"
              onClick={() => navigate("/produtos")}
            >
              Não
            </button>
            <button
              className="flex w-full items-center 
                        justify-center bg-blue-400 text-slate-100 hover:bg-blue-600"
              onClick={() => deletarProduto(id)}
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Sim</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
