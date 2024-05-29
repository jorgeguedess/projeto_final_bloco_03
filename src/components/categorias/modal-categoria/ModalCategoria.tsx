import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormCategoria from "../form-categoria/FormCategoria";

function ModalCategoria() {
  return (
    <>
      <Popup
        trigger={
          <button className="rounded border border-[#0D4F81] bg-[#0D4F81] px-4 py-2 font-medium transition-colors hover:bg-[#125f9b]">
            Cadastrar Nova Categoria
          </button>
        }
        modal
      >
        <FormCategoria />
      </Popup>
    </>
  );
}

export default ModalCategoria;
