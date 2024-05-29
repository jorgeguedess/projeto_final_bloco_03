/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useCategoria } from "../../../hooks/useCategoria";

function FormCategoria() {
  const { id } = useParams<{ id: string }>();
  const { atualizarEstado, categoria, isLoading, buscarCategoriaPorId, gerarNovaCategoria } = useCategoria();

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center my-8">{id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}</h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Descrição do Categoria</label>
          <input type="text" placeholder="Nome da sua Categoria" name="nome" className="border-2 border-slate-700 rounded p-2" value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <button
          className="rounded text-slate-100 bg-blue-400 
                               hover:bg-blue-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
