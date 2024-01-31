//import FryingPan from "./FryingPan";
import { useState, useEffect } from "react";

const Body = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    // );
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setFoodItems(jsonData.meals);
  };

  return (
    <div className="body">
      {/* <p className="text-2xl lg:text-4xl text-center font-semibold p-20">
        Nothing to show, please search anything!
      </p>
      <FryingPan /> */}
      <div className="flex flex-wrap">
        {foodItems.map((res) => {
          return (
            <div
              id={res.idMeal}
              className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-slate-300"
            >
              <img src={res.strMealThumb} alt="Food Images" />
              <h1 className="font-bold">{res.strMeal}</h1>
              <h1>Category: {res.strCategory}</h1>
              <h1>Area: {res.strArea}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
