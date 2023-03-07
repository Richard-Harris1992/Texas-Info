import { useParams } from "react-router-dom";
import { cityData } from "../data/cities";
import { useEffect } from "react";
import '../stylesheets/City.css'

const City = () => {
  const { city } = useParams();
  const cityInfo = cityData.find(
    (cityData) => cityData.name.toLowerCase() === city.toLowerCase()
  );

  useEffect(() => {
    document.title = `${cityInfo.name}, Texas`;
  }, [cityInfo.name]);

  return (
    <div>
      <main className="cityMain">
        <section className="citySection">
          <h2 className="cityName">{cityInfo.name}, Texas</h2>
          <article>
            <h3>City Overview</h3>
            <p>{cityInfo.overview}</p>
          </article>
          <article>
            <h3>City History</h3>
            <p>{cityInfo.history}</p>
          </article>
          <article>
            <h3>City Attractions</h3>
            <p>
             {cityInfo.attractions}
            </p>
          </article>
        </section>

        <aside className="cityAside">
          <div className="asideContent">
           
            <h3>Quick Facts</h3>
            <ul className="cityQL">
              <li>
                City Population: {cityInfo.population}
              </li>
              <li>
                Year Incorporated:{" "}
                {cityInfo.yearIncorporated}
              </li>
              <li>
                Region: {cityInfo.region}
              </li>
              <li>
                Classification: {cityInfo.classification}
              </li>
              <li>
                Average Income: {cityInfo.averageIncome}
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default City;
