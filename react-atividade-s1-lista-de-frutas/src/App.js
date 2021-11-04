import "./App.css";
import { useState } from "react";
import FruitList from "./components/fruitsNames";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits() {
    const red = fruits.filter((fruit) => fruit.color === "red");
    setFruits(red);
  }
  const totalPrice = fruits
    .map((fruit) => fruit.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <div className="App">
      <div className="App-header">
        <p>Preço total = {totalPrice}</p>
        {fruits.map((fruit, index) => (
          <FruitList index={index} fruitsName={fruit.name} />
        ))}
        <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </div>
    </div>
  );
}

export default App;
