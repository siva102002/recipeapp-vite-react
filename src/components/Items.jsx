import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./items.module.css";
export default function Items({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image} />
      <div className={styles.content}>
        <p className={styles.title}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <AnchorLink href="#details">
          <button
            onClick={() => {
              setFoodId(food.id);
            }}
            className={styles.itemButton}
          >
            View Recipe
          </button>
        </AnchorLink>
      </div>
    </div>
  );
}
