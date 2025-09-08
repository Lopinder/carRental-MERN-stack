import { useState, useContext } from "react";
import { CarContext } from "../context/Context";

function CarForm() {
  const { addCar } = useContext(CarContext);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    model: "",
    price_per_day: "",
    location: "",
    seats: "",
    fuel_type: "",
    transmission: "",
    image_url: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addCar(form);   // calls backend POST /cars/add
    setForm({
      name: "",
      brand: "",
      model: "",
      price_per_day: "",
      location: "",
      seats: "",
      fuel_type: "",
      transmission: "",
      image_url: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} required />
      <input name="model" placeholder="Model" value={form.model} onChange={handleChange} required />
      <input name="price_per_day" type="number" placeholder="Price/Day" value={form.price_per_day} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <input name="seats" type="number" placeholder="Seats" value={form.seats} onChange={handleChange} required />
      <input name="fuel_type" placeholder="Fuel Type" value={form.fuel_type} onChange={handleChange} required />
      <input name="transmission" placeholder="Transmission" value={form.transmission} onChange={handleChange} required />
      <input name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleChange} />
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
