/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useProduto } from "../../../hooks/useProduto";
import { useCategoria } from "../../../hooks/useCategoria";

function FormProduto() {
  const { id } = useParams<{ id: string }>();

  const { categorias, categoria, buscarCategoriaPorId, buscarCategorias } = useCategoria();

  const { isLoading, produto, buscarProdutoPorId, setProduto, atualizarEstado, gerarNovoProduto } = useProduto();

  useEffect(() => {
    async function fetchData() {
      await buscarCategorias();

      if (id !== undefined) {
        await buscarProdutoPorId(id);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    atualizarEstado(e, categoria);
  };

  const carregandoCategoria = !categoria.nome;

  return (
    <div className="py-8">
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? "Editar Produto" : "Cadastrar Produto"}</h1>

        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do Produto</label>
            <input type="text" placeholder="Nome" name="nome" required className="border-2 border-slate-700 rounded p-2" value={produto.nome} onChange={handleChangeInput} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Foto do Produto</label>
            <input type="text" placeholder="Foto do produto" name="foto" required className="border-2 border-slate-700 rounded p-2" value={produto.foto} onChange={handleChangeInput} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preco">Preço do Produto</label>
            <input type="string" placeholder="R$ 99.90" name="preco" required className="border-2 border-slate-700 rounded p-2" value={produto.preco} onChange={handleChangeInput} />
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
