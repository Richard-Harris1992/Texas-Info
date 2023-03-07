import { cityData } from "../data/cities.js";
import CityCard from "../components/CityCard.js";
import "../stylesheets/Cities.css";
import { useEffect } from "react";

const Cities = () => {
  useEffect(() => {
    document.title = "The Cities of Texas";
  });

  return (
    <div className="container">
      <h1 className="title">The Cities of Texas</h1>
      <div className="card-container">
        {cityData.map((city) => {
          return <CityCard city={city} key={city.id} />;
        })}
      </div>
    </div>
  );
};

export default Cities;
