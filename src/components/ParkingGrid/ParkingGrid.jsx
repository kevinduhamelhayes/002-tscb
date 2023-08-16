import { Car } from "./Car/Car"
import { ParkingSpace } from "../ParkingSpace/ParkingSpace"
import "./parkinggrid.css"

function ParkingGrid({ cars }) {
  return (
    <div className="ParkingGrid">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <ParkingSpace key={index} car={cars[index]} />
        ))}
    </div>
  )
}

export { ParkingGrid }
