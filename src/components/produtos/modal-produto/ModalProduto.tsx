import "reactjs-popup/dist/index.css";
import FormProduto from "../form-produto/FormProduto";
import Popup from "reactjs-popup";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="rounded border border-[#0D4F81] bg-[#0D4F81] px-4 py-2 font-medium transition-colors hover:bg-[#125f9b]">
            Cadastrar Novo Produto
          </button>
        }
        modal
      >
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalProduto;
