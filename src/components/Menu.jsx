import { useState, useEffect } from "react";

const Menu = () => {
  const [receitas, setReceitas] = useState([]);
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
        setReceitas(data ?? []);
      } catch (error) {
        console.error("Houve um erro com a API: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    buscarReceitas();
  }, []);

  console.log("receitas encontradas: ", receitas.slice(1, 5));

  return (
    <div>
      <h1>Mais pedidos</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-20 x-auto">
        {receitas.slice(1, 5).map((receita) => (
          <article key={receita.idMeal}>
            <img
              src={receita.strMealThumb}
              alt="Imagem ilustrativa da receita"
              width={200}
              height={200}
            />
            <p>{receita.strMeal}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Menu;
