import ListaProdutos from "../../../components/produtos/lista-produtos/ListaProdutos";

interface SectionProdutosProps {
  title: string;
}

export const SectionProdutos = ({ title }: SectionProdutosProps) => {
  return (
    <section className="w-full py-8">
      <div className="container flex flex-col gap-4">
        <h2 className="text-center text-3xl font-bold text-[#0D4F81]">
          {title}
        </h2>
        <ListaProdutos />
      </div>
    </section>
  );
};
