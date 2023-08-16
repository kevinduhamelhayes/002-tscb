import { Car } from "./Car/Car"
import { ParkingSpace } from "../ParkingSpace/ParkingSpace"
import "./parkinggrid.css"

function ParkingGrid({ Car }) {
  return (
    <div className="ParkingGrid">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <ParkingSpace key={index} car={Car[index]} />
        ))}
    </div>
  )
}

export { ParkingGrid }
