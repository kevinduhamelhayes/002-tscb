import { useState } from "react"
import { ParkingGrid } from "./components/ParkingGrid/ParkingGrid"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const handleSpaceClick = (index) => {
    const selectedCar = parkedCars[index]

    if (selectedCar) {
      // Si hay un coche en ese espacio, ofrece eliminarlo
      const confirmRemove = window.confirm(
        `Remove car with plate ${selectedCar.plateNumber}?`
      )
      if (confirmRemove) {
        const newCars = [...parkedCars]
        newCars[index] = undefined // Elimina el coche de esa posición
        setParkedCars(newCars)
      }
    } else {
      // Si el espacio está vacío, permite agregar un coche
      const plateNumber = window.prompt("Enter the car's plate number:")
      if (plateNumber) {
        handleAddCar(plateNumber, index)
      }
    }
  }
  const handleAddCar = (plateNumber, index) => {
    const newCar = {
      plateNumber,
      timeParked: Date.now(),
    }

    const newCars = [...parkedCars]
    newCars[index] = newCar
    setParkedCars(newCars)
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <ParkingGrid cars={parkedCars} onSpaceClick={handleSpaceClick} />
    </div>
  )
}
export default App
