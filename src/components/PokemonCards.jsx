import React from 'react'

export default function PokemonCards({ pokemon }) {
  return (
    <div className="d-flex m-10">
      <div className="flex flex-col p-10 border-gray-700 border-2 ">
        <div className="flex flex-row">
          {pokemon.types.map((p) => (
            <h3 className="pr-2">{p.type.name}</h3>
          ))}
        </div>
        <div className="w-100 h-52  overflow-hidden">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-72 h-72 object-cover pb-20 "
          ></img>
        </div>
        <h2 className="border-2 text-left">{pokemon.name}</h2>
      </div>
    </div>
  )
}
