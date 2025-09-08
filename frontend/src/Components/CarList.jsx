import { useContext } from "react";
import { CarContext } from "../context/Context";

function CarList() {
  const { car, deleteCar } = useContext(CarContext);

  return (
    <div>
      {car.map(c => (
        <div key={c.id}>
          <h3>{c.name} - {c.brand}</h3>
          <button onClick={() => deleteCar(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
