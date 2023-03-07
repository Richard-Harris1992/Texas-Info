//I have home
//I next need to make citites card
//make city data
//then routes to city
//Then form
//sources last

//go through and follow instructions to a T.
import { cityData } from "../data/cities.js"
import CityCard from "../components/CityCard.js";
import "../stylesheets/Cities.css"
import { useEffect } from "react";
const Cities = () => {
    useEffect(() => {
        document.title = "The cities of Texas"
    });

    return (
        <div>
            <h2>Cities in Texas</h2>
            <div className='card-container'>
                {console.log(cityData)}
                {cityData.map((city) => {
                    return (
                        <CityCard city={city} key={city.id}/>
                    );
                })}
            </div>
        </div>     
    );
}
export default Cities;