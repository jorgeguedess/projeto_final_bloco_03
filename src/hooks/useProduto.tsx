/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar, deletar } from "../service/Service";
import { ChangeEvent, useEffect, useState } from "react";
import Produto from "../models/Produto";
import { ToastAlert } from "../utils/ToastAlert";
import Categoria from "../models/Categoria";

/* eslint-disable react-refresh/only-export-components */
interface UseProdutoProps {
  buscarProdutoPorId(id: string): Promise<void>;
  deletarProduto(id: string): Promise<void>;
  buscarprodutos(): Promise<void>;
  atualizarEstado: (e: ChangeEvent<HTMLInputElement>, categoria: Categoria) => void;
  gerarNovoProduto(e: ChangeEvent<HTMLFormElement>): Promise<void>;
  produtos: Produto[];
  produto: Produto;
  isLoading: boolean;
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
  setProduto: React.Dispatch<React.SetStateAction<Produto>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useProduto = (): UseProdutoProps => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      }
    }
  }

  async function deletarProduto(id: string) {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);

      ToastAlert("Produto apagado com sucesso", "sucesso");
    } catch (error: any) {
      ToastAlert("Erro ao deletar o produto.", "erro");
      navigate("/");
    }

    setIsLoading(false);
    navigate("/produtos");
  }

  async function buscarprodutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      }
    }
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);

        ToastAlert("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlert("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        ToastAlert("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlert("Erro ao cadastrar o Produto", "erro");
        }
      }
    }

    setIsLoading(false);
    navigate("/produtos");
  }

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>, categoria: Categoria) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  };

  useEffect(() => {
    buscarprodutos();
  }, [produtos.length]);

  return {
    atualizarEstado,
    buscarProdutoPorId,
    buscarprodutos,
    deletarProduto,
    gerarNovoProduto,
    isLoading,
    produto,
    produtos,
    setIsLoading,
    setProduto,
    setProdutos,
  };
};
