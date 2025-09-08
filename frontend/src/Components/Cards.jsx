<<<<<<< HEAD
import React, { useContext } from "react";
import Card from "./Card";
import { CarContext } from "../Utils/Context";

function Cards({ searchCar, cat, transmission, fuelType, selectedPrice }) {
  const { car } = useContext(CarContext);

  const SearchedCar = car.filter((item) => {
    // ✅ backend has "name" not "title"
    const itemCheck = item.name.toLowerCase().includes(searchCar.toLowerCase());

    const matchesCategory = cat.length > 0 ? cat.includes(item.type) : true;
    const matchTransmission =
      transmission.length > 0 ? transmission.includes(item.transmission) : true;
    const fuel_Type =
      fuelType.length > 0 ? fuelType.includes(item.fuel_type) : true;

    // ✅ backend has "price_per_day" not "price"
    const itemPrice =
      selectedPrice.length > 0
        ? item.price_per_day >= selectedPrice[0] &&
          item.price_per_day <= selectedPrice[1]
        : true;

    return itemCheck && matchesCategory && matchTransmission && fuel_Type && itemPrice;
  });

  return (
    <div className="w-full mt-10 min-h-screen">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {SearchedCar.length > 0 ? (
            SearchedCar.map((item, index) => <Card key={index} val={item} />)
          ) : (
            <h2>No available car</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
=======
import React, { useContext } from 'react'
import Card from './Card'
import { CarContext } from '../Utils/Context';

function Cards({ searchCar,cat,transmission,fuelType,selectedPrice }) {
    const { car } = useContext(CarContext);
    const SearchedCar = car.filter((item)=>{
       const itemCheck =   item.title.toLowerCase().includes(searchCar.toLowerCase());
       const matchesCategory = cat.length > 0 ? cat.includes(item.type) : true;
       const matchTransmission = transmission.length >0 ? transmission.includes(item.transmission):true
       const fuel_Type = fuelType.length>0 ? fuelType.includes(item.fuel_type) : true;
       const itemPrice = selectedPrice ? item.price<=selectedPrice: true
       return itemCheck && matchesCategory && matchTransmission && fuel_Type && itemPrice
    })
    return (
        <div className='w-full mt-10 min-h-screen'>
            <div className=' mx-auto'>
                <div className="flex flex-wrap justify-center gap-6">
                   {
                    SearchedCar.length>0?(
                         SearchedCar.map((item, index) => (
                        <Card key={index} val={item} />
                    ))
                    ):(
                        <h2>no available car</h2>
                    )
                   }
                </div>
            </div>
        </div>
    )
}

export default Cards
>>>>>>> 89933d8ea30beabc7ec798edbb16a4faf77cef55
