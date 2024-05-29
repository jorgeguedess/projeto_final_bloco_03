/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../service/Service";

function DeletarProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function DeletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);

      alert("Produto apagado com sucesso");
    } catch (error: any) {
      alert("Erro ao deletar o produto.");
      navigate("/");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/produtos");
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
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-blue-400 
                        hover:bg-blue-600 flex items-center justify-center"
            onClick={DeletarProduto}
          >
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
