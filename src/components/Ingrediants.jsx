import styles from "./ingrediants.module.css";
export default function Ingrediants({ item }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
