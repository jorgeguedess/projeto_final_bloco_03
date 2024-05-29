/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import Popup from "reactjs-popup";
import FormCategoria from "../../components/categorias/form-categoria/FormCategoria";
import DeletarCategoria from "../../components/categorias/deletar-categoria/DeletarCategoria";
import { useCategoria } from "../../hooks/useCategoria";
import "reactjs-popup/dist/index.css";

function CategoriaPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { buscarCategoriaPorId, categoria, isLoading, setIsLoading } =
    useCategoria();

  if (!id) navigate("/");

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    buscarCategoriaPorId(id!);
  }, [id]);

  if (!id) navigate("/");

  return (
    <div className="flex-1 py-12">
      <div className="container">
        {isLoading && !categoria && (
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          />
        )}
        <div className="flex flex-col gap-4">
          <div className="flex gap-x-8 gap-y-4">
            <h1 className="text-4xl font-medium">{categoria.nome}</h1>

            <Popup
              trigger={
                <button className="rounded border border-blue-800 bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600">
                  Editar Categoria
                </button>
              }
              modal
            >
              <FormCategoria />
            </Popup>
            <Popup
              trigger={
                <button className="rounded border border-red-800 bg-red-700 px-4 py-2 text-white hover:bg-red-600 focus:bg-red-600">
                  Deletar Categoria
                </button>
              }
              modal
            >
              <DeletarCategoria />
            </Popup>
          </div>
          <p className="max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            neque perspiciatis magnam eos obcaecati nulla incidunt facilis,
            voluptatibus dolores distinctio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoriaPage;
