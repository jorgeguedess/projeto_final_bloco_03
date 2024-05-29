/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar, deletar } from "../service/Service";
import Categoria from "../models/Categoria";
import { ToastAlert } from "../utils/ToastAlert";

interface UseCategoriaProps {
  buscarPorId(id: string): Promise<void>;
  deletarCategoria(id: string): Promise<void>;
  buscarCategorias(): Promise<void>;
  atualizarEstado(e: ChangeEvent<HTMLInputElement>): void;
  gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>): Promise<void>;
  categorias: Categoria[];
  categoria: Categoria;
  isLoading: boolean;
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  setCategoria: React.Dispatch<React.SetStateAction<Categoria>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useCategoria = (): UseCategoriaProps => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        navigate("/");
      } else {
        console.error("Erro ao buscar categorias:", error);
      }
    }
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      }
    }
  }

  async function deletarCategoria(id: string) {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      ToastAlert("Categoria apagada com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      } else {
        ToastAlert("Erro ao deletar a categoria.", "erro");
      }
    }

    setIsLoading(false);
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlert("A Categoria foi atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlert("Erro ao atualizar o categoria.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlert("A Categoria foi cadastrado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlert("Erro ao cadastrar a categoria.", "erro");
        }
      }
    }

    setIsLoading(false);
    navigate("/categorias");
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return {
    isLoading,
    categorias,
    categoria,
    buscarCategorias,
    buscarPorId,
    deletarCategoria,
    atualizarEstado,
    gerarNovaCategoria,
    setCategoria,
    setCategorias,
    setIsLoading,
  };
};
