﻿/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Cardprodutos from "../card-produtos/CardProdutos";
import { useProduto } from "../../../hooks/useProduto";

function ListaProdutos() {
  const { produtos, buscarprodutos } = useProduto();

  useEffect(() => {
    buscarprodutos();
  }, [produtos.length]);

  return (
    <div className="bg-white py-8">
      <div className="container">
        {produtos.length === 0 && <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />}
        <div
          className=" my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {produtos.map((produto) => (
            <Cardprodutos key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaProdutos;
