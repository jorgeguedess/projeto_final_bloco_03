const mockUsuario = {
  nome: "Usuário",
  usuario: "usuario@root.com",
  foto: "https://i.imgur.com/Sk5SjWE.jpg",
};

function Perfil() {
  return (
    <div className="rounded-2xl overflow-hidden py-8">
      <div className="container">
        <img className="w-full h-72 object-cover border-b-8 border-white" src="https://i.imgur.com/ZZFAmzo.jpg" alt="Capa do Perfil" />

        <img className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10" src={mockUsuario.foto} alt={`Foto de perfil de ${mockUsuario.nome}`} />

        <div
          className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
        >
          <p>Nome: {mockUsuario.nome} </p>
          <p>Email: {mockUsuario.usuario}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
