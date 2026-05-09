import { useMeals } from "./hooks/useMeal";
import { useNavigate } from "react-router-dom";
import React from 'react'

function VegetarianPicks() {
    const { data, loading, error } = useMeals(`/filter.php?c=Vegetarian`);
    const navigate = useNavigate();

    const meals = data?.meals?.slice(0, 5) ?? [];

    if (loading) return <p className="flex justify-center pt-10">Loading...</p>
    if (error) return <p className="flex justify-center items-center pt-10">Error: {error}</p>

  return (
    <div>
        <p className='text-5xl flex justify-center items-center'>Vegeterian Picks</p>
        <div className='flex justify-around items-center pt-10 gap-2'>
            {meals.map((meal) => (
                <div key={meal.idMeal} className="flex justify-center flex-col text-center items-center w-full hover:bg-gray-100 rounded-xl cursor-pointer" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                    <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} width={280} className="rounded-3xl"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default VegetarianPicks
