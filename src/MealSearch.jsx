import { useEffect, useState } from "react";
import { useMeals } from "./hooks/useMeal";
import IndividualMeal from "./IndividualMeal";
import { Link, useNavigate } from "react-router-dom";

export default function MealSearch() {
    const [query, setQuery] = useState("Chicken");
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);
        return () => clearTimeout(timer);
    }, [query])

    const { data, loading, error } = useMeals(`/search.php?s=${debouncedQuery}`);
    const navigate = useNavigate();

    return(
        <div className="flex justify-center flex-col items-center">
            <div className="items-center flex justify-center pt-16 w-full">
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Look for a recipe..." className="border-2 rounded-md h-10 text-center flex justify-center text-gray-700 w-1/2"/>
            </div>

            {loading && <p className="text-center pt-10">Loading...</p>}
            {error && <p className="text-center pt-10">Error: {error}</p>}

            <div className="pt-10 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {data?.meals?.map((meal) => (
                    <div key={meal.idMeal} className="flex justify-center flex-col text-center items-center w-full hover:bg-gray-100 rounded-xl" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={280} className="cursor-pointer rounded-3xl"/>
                        <p>{meal.strCategory}</p> <p className="text-gray-700">{meal.strArea}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}