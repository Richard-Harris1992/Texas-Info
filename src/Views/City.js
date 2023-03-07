import { useParams } from "react-router-dom";
import { cityData } from "../data/cities";
import { useEffect } from "react";

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
      <main>
        <section>
          <h2>{cityInfo.name}, Texas</h2>
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

        <aside>
          <div className="aside-content">
           
            <h3>Quick Facts</h3>
            <ul>
              <li>
                <strong>City Population:</strong> {cityInfo.population}
              </li>
              <li>
                <strong>Year Incorporated:</strong>{" "}
                {cityInfo.yearIncorporated}
              </li>
              <li>
                <strong>Region:</strong> {cityInfo.region}
              </li>
              <li>
                <strong>Classification:</strong> {cityInfo.classification}
              </li>
              <li>
                <strong>Average Income:</strong> {cityInfo.averageIncome}
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default City;
