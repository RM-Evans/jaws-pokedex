import React from 'react'

export default function PokemonCards({pokemon}) {

    
  return (
    <div className='d-flex'>
    <h2 className='border-1'>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
    </div>
  )
}
