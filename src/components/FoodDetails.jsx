import styles from "./foodDetails.module.css";
import { useEffect } from "react";
import { useState } from "react";
import IngrediantsList from "./IngrediantsList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  // const API_KEY = "ffa85e953bff49dfb72f630ccb2c9a11";
  const API_KEY = "f40e881027cd4aceab09c0d48bfa2489";
  useEffect(() => {
    async function foodRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(food);
      setIsLoading(false);
    }
    foodRecipe();
  }, [foodId]);
  return (
    <div id="details">
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeTitle}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦{food.servings} Servings</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : " 🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              $ {Math.ceil(food.pricePerServing / 100)} Per Serving
            </strong>
          </span>
        </div>
        <h2>Ingrediants</h2>
        <IngrediantsList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeIns}>
          <ol>
            {isLoading
              ? "Loading..."
              : food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
