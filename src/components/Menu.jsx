import { useState, useEffect } from "react";

const Menu = () => {
  const [receitas, setReceitas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function buscarReceitas() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setReceitas(Array.isArray(data) ? data : (data.meals ?? []));
      } catch (error) {
        console.error("Houve um erro com a API: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    buscarReceitas();
  }, []);

  const receitasFiltradas = receitas.filter((receita) => {
    const nomeReceita = receita.strMeal.toLowerCase();
    //texto digitado
    const correspondeAoTexto = nomeReceita.includes(pesquisa.toLowerCase());
    // some(): retorna true quando for encontrado um dos nomes do prato
    const correspondeAoPrato =
      categoria === "spaghetti"
        ? ["spaghetti", "linguine", "fettuccine"].some((tipo) =>
            nomeReceita.includes(tipo),
          )
        : nomeReceita.includes(categoria.toLowerCase());

    return correspondeAoTexto && correspondeAoPrato;
  });

  if (error) {
    return (
      <>
        <div>
          <p>Ocorreu um erro ao carregar as receitas</p>
        </div>
      </>
    );
  }

  return (
    <div className="pt-18 sm:pt-20 lg:pt-24 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-3xl text-center ">
        <span className="text-sm font-black uppercase tracking-[0.25em] text-gourmet-green">
          Buscar pratos
        </span>
        <h2 className="mt-4 text-4xl font-black leading-tight text-gourmet-dark sm:text-5xl">
          Descubra novos sabores com
          <span className="text-gourmet-red"> GourmetOn</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full mx-auto max-w-3xl text-center ">
        <div className="w-full">
          <label className="mt-8 block text-left" htmlFor="filtro-receitas">
            <span className="mb-2 block font-bold text-gourmet-dark">
              Buscar prato
            </span>
          </label>

          <input
            id="filtro-receitas"
            type="search"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Digite o nome do prato"
            className="w-full rounded-xl border border-gourmet-dark/15 bg-white px-4 py-3 text-gourmet-dark outline-none transition focus:border-gourmet-red focus:ring-2 focus:ring-gourmet-red/20"
          />
        </div>
        <div className="flex flex-col bg-gourmet-green p-2 rounded-md gap-2">
          <label
            htmlFor="select-pratos"
            className="mb-2 font-bold text-gourmet-dark text-start"
          >
            Categoria do prato
          </label>

          <select
            name="pratos"
            id="select-pratos"
            value={categoria}
            className="col-start-1 row-start-1 appearance-none bg-gourmet-cream px-3 rounded-md "
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="">Todos os pratos</option>
            <option value="sandwich">Sanduíches</option>
            <option value="pie">Tortas</option>
            <option value="spaghetti">Macarrão</option>
            <option value="prawn">Frutos do mar</option>
          </select>
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-20 x-auto">
        {loading ? (
          <p>Carregando receitas...</p>
        ) : (
          receitasFiltradas.map((receita) => (
            <article
              key={receita.idMeal}
              className="flex min-w-0 w-full flex-col items-center rounded-3xl border border-gourmet-dark/8 bg-white px-4 py-6"
            >
              <img
                className="rounded-md "
                src={receita.strMealThumb}
                alt="Imagem ilustrativa da receita"
                width={200}
                height={200}
              />
              <p className="mt-6 w-full wrap-break-word text-center text-base font-extrabold text-gourmet-dark">
                {receita.strMeal}
              </p>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Menu;
