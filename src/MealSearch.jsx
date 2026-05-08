import { useEffect, useState } from "react";
import { useMeals } from "./hooks/useMeal";

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

    return(
        <div>
            <div className="items-center flex justify-center pt-16">
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Look for a recipe..." className="border rounded-md w-3/4 h-10 text-center flex justify-center text-gray-700"/>
            </div>

            {loading && <p className="text-center pt-10">Loading...</p>}
            {error && <p className="text-center pt-10">Error: {error}</p>}

            <div className="pt-10 justify-center pl-56 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
                {data?.meals?.map((meal) => (
                    <div key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={300} className="rounded-3xl"/>
                        <p>{meal.strCategory} . {meal.strArea}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}