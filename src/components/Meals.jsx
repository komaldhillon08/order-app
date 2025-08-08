import { useEffect, useState } from "react";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])
    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals')
        if (!response.ok) {
            return
        }
        const meals = await response.json();
        setLoadedMeals(meals)
        console.log("between function");

    }

    useEffect(() => {
        console.log("effect");
        fetchMeals();
    }, [])




    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <li key={meal.id}>{meal.name}</li>
            ))}

        </ul>
    )
}