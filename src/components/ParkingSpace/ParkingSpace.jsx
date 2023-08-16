
import { Car } from './Car/Car';
import './ParkingSpace.css';

function ParkingSpace({ car }) {
  return (
    <div className="ParkingSpace">
      {car ? <Car plate={car.plateNumber} timeParked={car.timeParked} /> : "Available"}
    </div>
  );
}

export { ParkingSpace };
