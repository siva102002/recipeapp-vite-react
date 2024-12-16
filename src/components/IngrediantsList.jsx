import Ingrediants from "./Ingrediants";
export default function IngrediantsList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Ingrediants item={item} />)
      )}
    </div>
  );
}
