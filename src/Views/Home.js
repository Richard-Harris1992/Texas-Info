import { texasData } from "../data/texas";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../stylesheets/Home.css';

const Home = () => {
  useEffect(() => {
    document.title = "Welcome to Texas"
  }, [])

  return (
    <div>
      <main>
        <aside className='ql'>
          <h3>Quick Links to Cities</h3>
          <ul>
            <li><Link className="color" to="/cities/austin">Austin</Link></li> <br/>
            <li><Link className="color" to="/cities/dallas">Dallas</Link></li> <br/>
            <li><Link className="color" to="/cities/houston">Houston</Link></li> <br/>
            <li><Link className="color" to="/cities/san-antonio">San Antonio</Link></li> <br/>
          </ul>
          <br/>
          <p>Check out our <a className="color" href="https://www.traveltexas.com/" target="_blank" rel="noreferrer">official Texas tourism website</a> for more information.</p>
        </aside>

        <section>
          <article>
            <h2>Introduction</h2>
            <p>{texasData.introduction}</p>
          </article>

          <article>
            <h3>State Overview</h3>
            <p>{texasData.stateOverview}</p>
          </article>

          <article>
            <h3>State History</h3>
            <p>{texasData.stateHistory}</p>
          </article>

          <article>
            <h3>State Tourism</h3>
            <p>{texasData.stateTourism}</p>
            <table>
              <tr>
                <th>City</th>
                <th>Attraction</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Austin</td>
                <td>Barton Springs Pool</td>
                <td>Outdoor swimming pool with natural spring water</td>
              </tr>
              <tr>
                <td>San Antonio</td>
                <td>The Alamo</td>
                <td>Historic site of the 1836 Battle of the Alamo</td>
              </tr>
              <tr>
                <td>Houston</td>
                <td>Space Center Houston</td>
                <td>NASA's official visitor center for the Johnson Space Center</td>
              </tr>
              <tr>
                <td>Dallas</td>
                <td>Reunion Tower</td>
                <td>Observation deck and revolving restaurant</td>
              </tr>
            </table>
          </article>
        </section>

        <aside className='qf'>
          <h3>Quick Facts</h3>
          <ol>
            <li>Capital: {texasData.capital}</li> <br/>
            <li>Largest City: {texasData.largestCity}</li> <br/>
            <li>Population: {texasData.population}</li> <br/>
            <li>State Bird: {texasData.stateBird}</li> <br/>
            <li>State Flower: {texasData.stateFlower}</li>
          </ol>

          <img id='txSeal' src={texasData.img} alt='Texas state seal'/>
        </aside>
      </main>
    </div>
  );
}

export default Home;
