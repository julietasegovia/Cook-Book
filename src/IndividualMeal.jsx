import { useParams } from "react-router-dom";
import { useMeals } from "./hooks/useMeal";

export default function IndividualMeal() {
    const { id } = useParams();
    const { data, loading, error } = useMeals(`/lookup.php?i=${id}`);
    const meal = data?.meals?.[0];

    if (loading) return <p className="flex justify-center pt-10">Loading...</p>;
    if (error) return <p className="flex justify-center pt-10">Error: {error}</p>;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex pt-20 pl-20">
                <img src={meal.strMealThumb} alt={meal.strMeal} width={350} className="rounded-3xl pl-2"></img>
                <div className="flex flex-col items-center justify-center text-center w-1/2">
                <h3 className="text-7xl pt-10 flex justify-center items-center text-center">{meal?.strMeal}</h3>
                <p className="text-xl pt-2">{meal.strCategory}</p> <p className="pt-2 text-gray-700 text-xl">{meal.strArea}</p>
                {meal?.strYoutube && (<a className="pt-5 text-yellow-500 hover:text-yellow-400 hover:underline-offset-1 text-2xl" href={meal.strYoutube}>Watch the Video-Recipe</a>)}
                </div>
            </div>
            <p className="pt-10 w-1/2">{meal.strInstructions}</p>
        </div>
    );
}