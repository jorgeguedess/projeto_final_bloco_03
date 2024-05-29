/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { CardCategorias } from "../card-categorias/CardCategorias";
import { useCategoria } from "../../../hooks/useCategoria";

function ListaCategorias() {
  const { buscarCategorias, categorias } = useCategoria();

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />}
      <div className="flex py-8 justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
