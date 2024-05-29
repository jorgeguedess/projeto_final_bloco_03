import "reactjs-popup/dist/index.css";
import FormProduto from "../form-produto/FormProduto";
import Popup from "reactjs-popup";

function ModalProduto() {
  return (
    <>
      <Popup trigger={<button className="border rounded px-4 py-2 hover:bg-white hover:text-blue-800 transition-colors font-medium">Cadastrar Novo Produto</button>} modal>
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalProduto;
