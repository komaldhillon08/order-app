import { useEffect, useState } from "react";
import MealItems from "./MealItems.jsx";

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
    console.log("komal");
    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                // <li key={meal.id}>{meal.name}</li>
                <MealItems key={meal.id} meal={meal}/>
            ))}

        </ul>
    )
}