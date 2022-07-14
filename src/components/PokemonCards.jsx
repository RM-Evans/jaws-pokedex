import React from 'react'

let capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

let typeToIcon = (type) => {
  if (type === 'fairy') {
    return 'AAAAAAA'
  }
  return type
}

export default function PokemonCards({ pokemon }) {
  return (
    <div className="d-flex m-10 max-w-sm">
      <div className="flex flex-col p-10 border-gray-700 border-2">
        <div className="flex flex-row w-full">
          {pokemon.types.map((p) => (
            <div className="flex justify-between">
              <h3 className="pr-2">{typeToIcon(p.type.name)}</h3>
            </div>
          ))}
          <h3 className="text-right w-full"># {pokemon.id}</h3>
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="inline w-56 h-56 object-cover"
          ></img>
        </div>
        <h1 className="text-left font-medium text-lg">
          {capitalizeFirstLetter(pokemon.name)}
        </h1>
      </div>
    </div>
  )
}
