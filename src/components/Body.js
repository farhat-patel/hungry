//import FryingPan from "./FryingPan";
import { useState, useEffect } from "react";
import Meal from "./Meal";
import { Link } from "react-router-dom";

const Body = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    //console.log(data);
    const jsonData = await data.json();
    console.log(jsonData);
    setFoodItems(jsonData.meals);
  };

  const handleSearch = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setMeals(jsonData.meals);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          {/* <img className="w-40" src={logo} alt="TheHungryExplorerLogo" /> */}
          <h2 className="text-2xl font-bold italic m-2">
            TheHungry<span className="text-rose-500">Explorer</span>
          </h2>
        </div>

        <div className="flex items-center flex-grow">
          <div className="search-bar mx-auto">
            <input
              placeholder="Search recipe..."
              className="bg-white/75  p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="px-4 py-1 bg-gray-200 m-4 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4 text-xl">
            <li className="px-4 text-xl">
              <Link to="/home">Home</Link>
            </li>
            <li className="px-4 text-xl">
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <p className="text-2xl lg:text-4xl text-center font-semibold p-20">
        Nothing to show, please search anything!
      </p>
      <FryingPan /> */}

      {meals.length > 0 ? (
        <Meal meals={meals} />
      ) : (
        <div className="flex flex-wrap gap-5">
          {foodItems.map((res) => {
            return (
              <div
                key={res.idMeal}
                className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-slate-300"
              >
                <img src={res.strMealThumb} alt="Food Images" />
                <h1 className="font-bold">{res.strMeal}</h1>
                <h1>Category: {res.strCategory}</h1>
                <h1>Area: {res.strArea}</h1>
                <button className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300">
                  View Recipe
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
