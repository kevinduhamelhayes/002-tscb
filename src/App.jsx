import { useState } from "react"
import { CarForm } from "./components/CarForm/CarForm"
import { ParkingGrid } from "./components/ParkingGrid/ParkingGrid"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [parkedCars, setParkedCars] = useState([])
  const handleAddCar = (plateNumber) => {
    // Suponiendo que cada auto solo necesita un número de placa y una marca de tiempo
    const newCar = {
      plateNumber,
      timeParked: Date.now() // Puedes usar la marca de tiempo para calcular cuánto tiempo ha estado estacionado un auto
    };
  
    setParkedCars(prevCars => [...prevCars, newCar]);
  }
  

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <CarForm onAddCar={handleAddCar} />
      <ParkingGrid cars={parkedCars} />
    </div>
  )
}

export default App
