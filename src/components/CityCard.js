import { Link } from "react-router-dom";
import '../stylesheets/Cities.css'

const CityCard = ({ city }) => {
  return(
    <div className="card">
      <div className="card-info">
        <h3>{city.name}</h3>
        <img src={city.img} alt={`${city.name} skyline`}/>
        <Link className='link' to={`/cities/${city.name}`}>Learn More</Link>
      </div>
  </div>
  );
}
export default CityCard;