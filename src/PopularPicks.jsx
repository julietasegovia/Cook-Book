import { useMeals } from "./hooks/useMeal";
import IndividualMeal from "./IndividualMeal";
import { Link, useNavigate } from "react-router-dom";

function PopularPicks() {
    const { data: d1 } = useMeals(`/random.php`);
    const { data: d2 } = useMeals(`/random.php`);
    const { data: d3 } = useMeals(`/random.php`);
    const { data: d4 } = useMeals(`/random.php`);
    const { data: d5 } = useMeals(`/random.php`);
    const navigate = useNavigate();

    const meals = [
        d1?.meals?.[0],
        d2?.meals?.[0],
        d3?.meals?.[0],
        d4?.meals?.[0],
        d5?.meals?.[0],
    ];

    if (meals.some(m => !m)) return <p className="flex justify-center pt-10">Loading...</p>;

    return (
        <div>
            <p className='text-5xl'>Popular Picks</p>
            <div className='flex justify-center items-center pt-6'>
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
