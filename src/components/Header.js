import { Link } from "react-router-dom";
import logo from "../images/HungryLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">

      <div>
        <img className="w-40" src={logo} alt="TheHungryExplorerLogo" />
      </div>

      <div className="flex items-center flex-grow">
        <form className="search-bar mx-auto">
          <input
            placeholder="Search recipe..."
            className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg"
          />
        </form>
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
  );
};

export default Header;
