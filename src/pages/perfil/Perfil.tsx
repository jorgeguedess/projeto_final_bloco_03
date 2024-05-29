import ModalCategoria from "../../components/categorias/modal-categoria/ModalCategoria";
import ModalProduto from "../../components/produtos/modal-produto/ModalProduto";

const mockUsuario = {
  nome: "Usuário",
  usuario: "usuario@root.com",
  foto: "https://i.imgur.com/Sk5SjWE.jpg",
};

function Perfil() {
  return (
    <div className="overflow-hidden rounded-2xl py-8">
      <div className="container">
        <img
          className="h-72 w-full border-b-8 border-white object-cover"
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do Perfil"
        />

        <img
          className="relative z-10 mx-auto mt-[-8rem] w-56 rounded-full border-8 border-white"
          src={mockUsuario.foto}
          alt={`Foto de perfil de ${mockUsuario.nome}`}
        />

        <div className="relative mt-[-6rem] flex min-h-72 flex-col items-center justify-center bg-sky-500 text-2xl text-white">
          {/* <p>Nome: {mockUsuario.nome} </p>
          <p>Email: {mockUsuario.usuario}</p> */}
          <div className="mt-6 flex justify-around gap-4">
            <div className="flex justify-around gap-4">
              <ModalProduto />
              <ModalCategoria />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
