import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
var id = "";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId
      );
      const recipeJsonData = await recipeData.json();
      console.log(recipeJsonData);
      setRecipe(recipeJsonData.meals);
    };

    fetchRecipe();
  }, [recipeId]); // Include recipeId in the dependency array

  if (recipe && recipe.strYoutube) {
    const strYoutube = recipe.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  } else {
    // Handle the case where recipe or recipe.strYoutube is undefined
    // For example, you can set a default value for id or display an error message
  }

  return (
    <>
      {!recipe ? (
        ""
      ) : (
        <div className="bg-rose-100">
          {recipe.map((res) => {
            return (
              <div key={res.idMeal}>
                <img
                  src={res.strMealThumb}
                  alt="Food"
                  className="w-full"
                  style={{ height: "600px" }}
                />
                <div className="bg-white bg-opacity-80 text-black text-center text-lg p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                  <h1>{res.strMeal}</h1>
                  <h2>{res.strArea} Food</h2>
                  <h3>Category: {res.strCategory}</h3>
                </div>
                <div className="w-70 mx-auto flex">
                  <div className="flex-1 text-justify mt-6 p-2 pl-10">
                    <h2 className="font-bold">INGREDIENTS:</h2>
                    <br />
                    <h4>
                      <b>{res.strIngredient1}</b>: {res.strMeasure1}
                    </h4>
                    <h4>
                      <b>{res.strIngredient2}</b>: {res.strMeasure2}
                    </h4>
                    <h4>
                      <b>{res.strIngredient3}</b>: {res.strMeasure3}
                    </h4>
                    <h4>
                      <b>{res.strIngredient4}</b>: {res.strMeasure4}
                    </h4>
                    <h4>
                      <b>{res.strIngredient5}</b>: {res.strMeasure5}
                    </h4>
                    <h4>
                      <b>{res.strIngredient6}</b>: {res.strMeasure6}
                    </h4>
                    <h4>
                      <b>{res.strIngredient7}</b>: {res.strMeasure7}
                    </h4>
                    <h4>
                      <b>{res.strIngredient8}</b>: {res.strMeasure8}
                    </h4>
                  </div>
                  <div className="flex-1 text-justify py-6 pr-10">
                    <h2 className="font-bold">INSTRUCTIONS:</h2>
                    <br />
                    <h4>{res.strInstructions}</h4>
                  </div>
                </div>
                <div className="w-9/12 mx-auto my-12">
                  <iframe
                    width="
                        100%"
                    height="515"
                    title="recipeVideo"
                    src={`https://www.youtube.com/embed/${id}`}
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Recipe;
