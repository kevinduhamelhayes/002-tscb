import React from 'react';
import './Car.css';

function Car({ plate, timeParked }) {
  return (
    <div className="Car">
      <div>Plate: {plate}</div>
      <div>Time: {timeParked} mins</div>
    </div>
  );
}

export { Car };
