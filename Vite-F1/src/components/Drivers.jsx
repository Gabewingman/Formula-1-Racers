// Import the CSS file for styling
import "./Drivers.css";

// Import the images for each driver
import maxVerstappen from "../assets/maxver01.avif";
import landoNorris from "../assets/lannor02.avif";
import charlesLeclerc from "../assets/chalec03.avif";
import carlosSainz from "../assets/carsai04.avif";
import oscarPiastri from "../assets/oscpia05.avif";
import sergioPerez from "../assets/serper06.avif";
import georgeRussell from "../assets/georus07.avif";
import lewisHamilton from "../assets/lewham08.avif";
import fernandoAlonso from "../assets/feralo09.avif";
import lanceStroll from "../assets/lanstr010.avif";
import nicoHulkenberg from "../assets/nichul011.avif";
import yukiTsunoda from "../assets/yuktsu012.avif";
import danielRicciardo from "../assets/danric013.avif";
import oliverBearman from "../assets/olibea014.avif";
import pierreGasly from "../assets/piegas015.avif";
import kevinMagnussen from "../assets/kevmag016.avif";
import alexanderAlbon from "../assets/alealb017.avif";
import estebanOcon from "../assets/estoco018.avif";
import zhouGuanyu from "../assets/guazho019.avif";
import loganSargeant from "../assets/logsar020.avif";
import valtteriBottas from "../assets/valbot021.avif";

// Create an array of objects to store the driver information
const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    image: maxVerstappen,
    link: "https://www.formula1.com/en/drivers/max-verstappen",
  },
  {
    id: 2,
    name: "Lando Norris",
    team: "McLaren",
    image: landoNorris,
    link: "https://www.formula1.com/en/drivers/lando-norris",
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    image: charlesLeclerc,
    link: "https://www.formula1.com/en/drivers/charles-leclerc",
  },
  {
    id: 4,
    name: "Carlos Sainz",
    team: "Ferrari",
    image: carlosSainz,
    link: "https://www.formula1.com/en/drivers/carlos-sainz",
  },
  {
    id: 5,
    name: "Oscar Piastri",
    team: "McLaren",
    image: oscarPiastri,
    link: "https://www.formula1.com/en/drivers/oscar-piastri",
  },
  {
    id: 6,
    name: "Sergio Perez",
    team: "Red Bull Racing",
    image: sergioPerez,
    link: "https://www.formula1.com/en/drivers/sergio-perez",
  },
  {
    id: 7,
    name: "George Russell",
    team: "Mercedes",
    image: georgeRussell,
    link: "https://www.formula1.com/en/drivers/george-russell",
  },
  {
    id: 8,
    name: "Lewis Hamilton",
    team: "Mercedes",
    image: lewisHamilton,
    link: "https://www.formula1.com/en/drivers/lewis-hamilton",
  },
  {
    id: 9,
    name: "Fernando Alonso",
    team: "Aston Martin",
    image: fernandoAlonso,
    link: "https://www.formula1.com/en/drivers/fernando-alonso",
  },
  {
    id: 10,
    name: "Lance Stroll",
    team: "Aston Martin",
    image: lanceStroll,
    link: "https://www.formula1.com/en/drivers/lance-stroll",
  },
  {
    id: 11,
    name: "Nico Hulkenberg",
    team: "Haas",
    image: nicoHulkenberg,
    link: "https://www.formula1.com/en/drivers/nico-hulkenberg",
  },
  {
    id: 12,
    name: "Yuki Tsunoda",
    team: "RB",
    image: yukiTsunoda,
    link: "https://www.formula1.com/en/drivers/yuki-tsunoda",
  },
  {
    id: 13,
    name: "Daniel Ricciardo",
    team: "RB",
    image: danielRicciardo,
    link: "https://www.formula1.com/en/drivers/daniel-ricciardo",
  },
  {
    id: 14,
    name: "Oliver Bearman",
    team: "Ferrari",
    image: oliverBearman,
    link: "https://www.formula1.com/en/drivers/oliver-bearman",
  },
  {
    id: 15,
    name: "Pierre Gasly",
    team: "Alpine",
    image: pierreGasly,
    link: "https://www.formula1.com/en/drivers/pierre-gasly",
  },
  {
    id: 16,
    name: "Kevin Magnussen",
    team: "Haas",
    image: kevinMagnussen,
    link: "https://www.formula1.com/en/drivers/kevin-magnussen",
  },
  {
    id: 17,
    name: "Alexander Albon",
    team: "Williams",
    image: alexanderAlbon,
    link: "https://www.formula1.com/en/drivers/alexander-albon",
  },
  {
    id: 18,
    name: "Esteban Ocon",
    team: "Alpine",
    image: estebanOcon,
    link: "https://www.formula1.com/en/drivers/esteban-ocon",
  },
  {
    id: 19,
    name: "Zhou Guanyu",
    team: "Kick Sauber",
    image: zhouGuanyu,
    link: "https://www.formula1.com/en/drivers/zhou-guanyu",
  },
  {
    id: 20,
    name: "Logan Sargeant",
    team: "Williams",
    image: loganSargeant,
    link: "https://www.formula1.com/en/drivers/logan-sargeant",
  },
  {
    id: 21,
    name: "Valtteri Bottas",
    team: "Kick Sauber",
    image: valtteriBottas,
    link: "https://www.formula1.com/en/drivers/valtteri-bottas",
  },
];

// Define the Drivers component
function Drivers() {
  // Use the map function to render each driver's information
  return (
    <>
      {drivers.map((driver) => (
        <div className="drivers-container">
          <div className="drivers">
            <a href={driver.link}>
              {/* Display the driver's image */}
              <img src={driver.image} alt={driver.name} height={200} />
              {/* Display the driver's name and team */}
              <p>
                <strong className="textStrong">{driver.name}</strong>
              </p>
              <p>
                <strong>{driver.team}</strong>
              </p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

// Export the Drivers component
export default Drivers;