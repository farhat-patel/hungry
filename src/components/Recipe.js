import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeData = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId
        );
        const recipeJsonData = await recipeData.json();
        console.log(recipeJsonData);
        setRecipe(recipeJsonData.meals || []);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        // Optionally, you can set an error state here to handle errors gracefully
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <>
      {recipe.length === 0 ? (
        ""
      ) : (
        <div className="bg-rose-100">
          {recipe.map((res) => (
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
                  {/* Render ingredients and measures */}
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                    const ingredient = res[`strIngredient${index}`];
                    const measure = res[`strMeasure${index}`];
                    if (ingredient && measure) {
                      return (
                        <h4 key={index}>
                          <b>{ingredient}</b>: {measure}
                        </h4>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div className="flex-1 text-justify py-6 pr-10">
                  <h2 className="font-bold">INSTRUCTIONS:</h2>
                  <br />
                  <h4>{res.strInstructions}</h4>
                </div>
              </div>
              <div className="w-9/12 mx-auto my-12">
                {res.strYoutube && (
                  <iframe
                    width="100%"
                    height="515"
                    title="recipeVideo"
                    src={`https://www.youtube.com/embed/${getVideoId(res.strYoutube)}`}
                  ></iframe>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

// Function to extract video ID from YouTube URL
const getVideoId = (youtubeUrl) => {
  const videoId = youtubeUrl.split("v=")[1]; // Extract video ID from URL
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  } else {
    return videoId;
  }
};

export default Recipe;