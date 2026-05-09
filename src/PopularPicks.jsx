import { useMeals } from "./hooks/useMeal";
import IndividualMeal from "./IndividualMeal";
import { Link, useNavigate } from "react-router-dom";

function PopularPicks() {
    const { data, loading, error } = useMeals(`/filter.php?c=Beef`);
        const navigate = useNavigate();
    
        const meals = data?.meals?.slice(0, 5) ?? [];

    if (meals.some(m => !m)) return <p className="flex justify-center pt-10">Loading...</p>;

    return (
        <div>
            <p className='text-5xl flex justify-center items-center'>Popular Picks</p>
            <div className='flex justify-center items-center pt-10 gap-2'>
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="flex justify-center flex-col text-center items-center w-full hover:bg-gray-100 rounded-xl" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={280} className="cursor-pointer rounded-3xl"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularPicks;
