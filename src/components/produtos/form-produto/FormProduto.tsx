/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "" });
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);

        alert("Produto atualizado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          alert("Erro ao atualizar o Produto");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        alert("Produto cadastrado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          alert("Erro ao cadastrar o Produto");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome === "";

  return (
    <div className="py-8">
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? "Editar Produto" : "Cadastrar Produto"}</h1>

        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do Produto</label>
            <input type="text" placeholder="Nome" name="nome" required className="border-2 border-slate-700 rounded p-2" value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Foto do Produto</label>
            <input type="text" placeholder="Foto do produto" name="foto" required className="border-2 border-slate-700 rounded p-2" value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preco">Preço do Produto</label>
            <input type="number" placeholder="R$ 99.90" name="preco" required className="border-2 border-slate-700 rounded p-2" value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do Produto</p>
            <select name="categoria" id="categoria" className="border p-2 border-slate-800 rounded" onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>
                Selecione uma categoria
              </option>

              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id}>{categoria.nome}</option>
                </>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="rounded disabled:bg-slate-200 bg-blue-400 hover:bg-blue-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
            disabled={carregandoCategoria}
          >
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;
