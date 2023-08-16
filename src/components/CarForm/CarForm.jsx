import { useState } from "react";
import './CarForm.css';

function CarForm({ onAddCar }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="CarForm">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Add Car</button>
    </form>
  );
}

export { CarForm };
