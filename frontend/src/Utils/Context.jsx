/* eslint react-refresh/only-export-components: off */
import axios from 'axios';
<<<<<<< HEAD
import React, { useEffect, useState, createContext } from 'react';

=======
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
>>>>>>> 89933d8ea30beabc7ec798edbb16a4faf77cef55
export const CarContext = createContext();

function Context({ children }) {
    const [car, setCar] = useState([]);
<<<<<<< HEAD

    function loader() {
    try {
        axios.get("http://localhost:4000/cars") // ✅ backend API
            .then(res => setCar(res.data));
    } catch (error) {
        console.log(error);
    }
}


    // Add new car
    async function addCar(newCar) {
        try {
            const res = await axios.post("http://localhost:5000/cars/add", newCar);
            setCar([...car, res.data.car]); // append new car
        } catch (error) {
            console.error("Error adding car:", error);
        }
    }

    // Delete a car
    async function deleteCar(id) {
        try {
            await axios.delete(`http://localhost:5000/cars/${id}`);
            setCar(car.filter(c => c.id !== id));
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    }

    useEffect(() => {
        loader();
    }, []);

    const category = [...new Set(car.map((item) => item.type))];
    const transm = [...new Set(car.map((item) => item.transmission))];
    const fuel = [...new Set(car.map((item) => item.fuel_type))];
    const prices = car.map(item => item.price_per_day);
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

=======
    function loader() {
        try {
            axios.get('/cardata.json').then(res => setCar(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loader();
    }, [])
    const category = [...new Set(car.map((item) => item.type))]
    const transm = [...new Set(car.map((item)=>item.transmission))]
    const fuel = [...new Set(car.map((item)=>item.fuel_type))]
    const prices = car.map(item=>item.price);
    const minPrice = prices.length>0 ? Math.min(...prices):0;
    const maxPrice = prices.length>0 ? Math.max(...prices):0;
>>>>>>> 89933d8ea30beabc7ec798edbb16a4faf77cef55
    const data = {
        car,
        setCar,
        category,
        transm,
        fuel,
        minPrice,
<<<<<<< HEAD
        maxPrice,
        addCar,
        deleteCar
    };

    return (
        <CarContext.Provider value={data}>
            {children}
        </CarContext.Provider>
    );
}

export default Context;
=======
        maxPrice
    }
    return (
        <div>
            <CarContext.Provider value={data}>
                {children}
            </CarContext.Provider>
        </div>
    )
}

export default Context
>>>>>>> 89933d8ea30beabc7ec798edbb16a4faf77cef55
