import { useState, useEffect } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const requestApi = async () => {
    const pokemons = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    ).then((response) => response.json());
    debugger;
    setList(pokemons.results);
  };

  //component carta y reciba como parametros imagen y nombre
  //colocarle estilos o utilizar bootstrap
  //y funcioon que controle cifras

  useEffect(() => requestApi(), []);
  return (
    <div>
      {list.map((pokemon, index) => (
        <div className="card">
          <img
            className="image"
            src={
              "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00" +
              index +
              ".png"
            }
            alt=""
          />
          <div className="title">{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
