/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useCategoria } from "../../../hooks/useCategoria";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { buscarPorId, deletarCategoria, categoria, isLoading } = useCategoria();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  if (!id) return;

  return (
    <div className="container w-full max-w-[600px] mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a categoria a seguir?</p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-blue-600 text-white font-bold text-2xl">Categoria</header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
        <div className="flex">
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={() => navigate("/categorias")}>
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-blue-400 
                                   hover:bg-blue-600 flex items-center justify-center"
            onClick={() => deletarCategoria(id)}
          >
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
