import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';
import './App.css';


function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9');

  const getAllPokemon = async () => {

    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    console.log(data.next);
    console.log(data);

    // to get more information about each pokemon, we must create an object by 
    // fetching the data from the pokemon's unique endpoint
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await response.json();

        // load more pokemon to our array
        // keep the current list of pokemon, THEN add more to the end of the list
        setAllPokemon(currentPokeArray => [...currentPokeArray, data]);
        // allPokemon.push(data);

        // in case we  want to reassign instead -- pagination?
        // assign all of our individual pokemon info json objects to our allPokemon array
        //* setAllPokemon(data);

        await allPokemon.sort((a, b) => a.id - b.id);
        // await allPokemon.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemon);
  };
  // useEffect will run this on application start. I can also use it to run code on variable or data change.
  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="App">
      {/* <h1>Pokemon</h1> */}
      <div className='pokemon-browser-container'>
        <div className='all-pokemon'>
          {allPokemon.map((pokemon, index) => <PokemonCards key={index} pokemon={pokemon} />)}
        </div>
        <button className='load-more border-2 p-2' onClick={() => getAllPokemon()}>Load more Pokemon</button>
      </div>
    </div>
  );
}

export default App;
