/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          alert("Erro ao atualizar o categoria.");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          alert("Erro ao cadastrar a categoria.");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

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
