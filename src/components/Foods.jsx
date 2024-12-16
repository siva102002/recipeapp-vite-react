import Items from "./Items";
export default function Foods({ foodItem, setFoodId }) {
  return (
    <div>
      {foodItem.map((food) => (
        <Items key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}
