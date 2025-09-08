<<<<<<< HEAD
import React, { useState, useContext } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import { CarContext } from "../Utils/Context";

function Cars() {
  const { car } = useContext(CarContext); // ✅ get cars from backend
  const [searchCar, setSearchCar] = useState("");
  const [cat, setCat] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  return (
    <div className="min-h-screen">
      <SearchBar setSearchCar={setSearchCar} />
      <div className="flex w-full">
        {/* Sidebar filters */}
        <div>
          <div className="sticky top-20">
            <FilterSection
              setCat={setCat}
              cat={cat}
              transmission={transmission}
              setTransmission={setTransmission}
              fuelType={fuelType}
              setFuelType={setFuelType}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <Cards
            cars={car} // ✅ pass backend cars to Cards
            searchCar={searchCar}
            cat={cat}
            transmission={transmission}
            fuelType={fuelType}
            selectedPrice={selectedPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default Cars;
=======
import React, { useState } from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'
import FilterSection from './FilterSection';

function Cars() {

    const [searchCar, setSearchCar] = useState("");
    const [cat, setCat] = useState([])
    const [transmission, setTransmission] = useState([])
    const [fuelType, setFuelType] = useState([])
    const [selectedPrice, setSelectedPrice] = useState([])
    return (
        <div className=' min-h-screen'>
            <SearchBar setSearchCar={setSearchCar} />
            <div className='flex w-full'>
                <div>
                    <div className='sticky top-20'>
                        <FilterSection setCat={setCat} cat={cat} transmission={transmission} setTransmission={setTransmission} fuelType={fuelType} setFuelType={setFuelType} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
                    </div>
                </div>
                <div className='flex-1'>
                    <Cards searchCar={searchCar} cat={cat} transmission={transmission} fuelType={fuelType} selectedPrice={selectedPrice} />

                </div>
            </div>
        </div>
    )
}

export default Cars
>>>>>>> 89933d8ea30beabc7ec798edbb16a4faf77cef55
