import { useState } from "react";
import { useEffect } from "react";
import styles from "./inputBox.module.css";
export default function InputBox({ getFoodItem }) {
  const [query, getQuery] = useState("pizza");
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  // const API_KEY = "ffa85e953bff49dfb72f630ccb2c9a11";
  const API_KEY = "f40e881027cd4aceab09c0d48bfa2489";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      getFoodItem(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputBox}
        type="text"
        onChange={(e) => getQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}
