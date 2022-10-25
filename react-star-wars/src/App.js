import './App.css';
import StarshipCards from './components/StarshipCards';
import useFetch from './services/sw-api';

function App() {


  const { starships, isPending } = useFetch();


  return (

    <div className="App">

      <h1 className='title'>STAR WARS STARSHIPS</h1>

      {isPending && <div>Loading... </div>}

      <div>

        {
          starships

          &&

          starships.results.map((ships, index) => {

            return <StarshipCards key={index} ships={ships}/>

          })

        }

      </div>
      
    </div>

  );

}

export default App;