import '../stylesheets/Source.css'
import { useEffect } from 'react'

const Sources = () => {
    useEffect(() => {
        document.title = "Sources"
    })
  return (
    <div className="sourceContainer">
      <h2 className="sourceTitle">Works Cited</h2>
      <ol className="sourceList">
        <li>"Texas." Encyclopedia Britannica, Encyclopedia Britannica, Inc., 28 Feb. 2022, <a href="https://www.britannica.com/place/Texas-state" className="sourceLink">https://www.britannica.com/place/Texas-state</a>.</li>
        <li>"Texas QuickFacts from the US Census Bureau." United States Census Bureau, 2021, <a href="https://www.census.gov/quickfacts/TX" className="sourceLink">www.census.gov/quickfacts/TX</a>.</li>
        <li>"History of Texas." Wikipedia, The Free Encyclopedia. Wikimedia Foundation, Inc., 28 Feb. 2023. Web. 06 Mar. 2023. <a href="https://en.wikipedia.org/wiki/History_of_Texas" className="sourceLink">https://en.wikipedia.org/wiki/History_of_Texas</a>.</li>
        <li>"Texas Tourist Attractions." Tour Texas. Tour Texas, 2023. Web. 06 Mar. 2023. <a href="https://www.tourtexas.com/attractions" className="sourceLink">https://www.tourtexas.com/attractions</a>.</li>
        <li>"Visit Austin, Texas | Explore Hotels, Music, Restaurants, Attractions and Things to Do." Visit Austin, 2023, <a href="https://www.austintexas.org/" className="sourceLink">https://www.austintexas.org/</a>.</li>
        <li>"Visit Dallas: Dallas TX Attractions & Things To Do." VisitDallas, 2023, <a href="https://www.visitdallas.com/" className="sourceLink">https://www.visitdallas.com/</a>.</li>
        <li>"Visit Houston Texas | Explore Hotels, Restaurants, Events & Things to Do." Visit Houston, 2023, <a href="https://www.visithoustontexas.com/" className="sourceLink">https://www.visithoustontexas.com/</a>.</li>
        <li>"Visit San Antonio | Official Tourism Site." Visit San Antonio, 2023, <a href="https://www.visitsanantonio.com/" className="sourceLink">https://www.visitsanantonio.com/</a>.</li>
      </ol>
    </div>
  );
}

export default Sources;
