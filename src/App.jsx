import { useState } from "react";
import InputBox from "./components/InputBox";
import Foods from "./components/Foods";
import Nav from "./components/Nav";
import OuterContainer from "./components/OuterContainer";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import "./App.css";
function App() {
  const [foodItem, getFoodItem] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  console.log(foodItem);
  return (
    <div className="App">
      <Nav />
      <InputBox getFoodItem={getFoodItem} />
      <OuterContainer>
        <InnerContainer>
          <Foods setFoodId={setFoodId} foodItem={foodItem} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default App;
