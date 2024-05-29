import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormCategoria from "../form-categoria/FormCategoria";

function ModalCategoria() {
  return (
    <>
      <Popup trigger={<button className="border rounded px-4 py-2 hover:bg-white hover:text-blue-800 transition-colors font-medium">Cadastrar Nova Categoria</button>} modal>
        <FormCategoria />
      </Popup>
    </>
  );
}

export default ModalCategoria;
