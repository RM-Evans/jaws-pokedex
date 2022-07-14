import React from 'react'

import { ReactComponent as FireSVG } from '../assets/PokemonTypeIcons/fire.svg';
import { ReactComponent as NormalSVG } from '../assets/PokemonTypeIcons/normal.svg';
import { ReactComponent as WaterSVG } from '../assets/PokemonTypeIcons/water.svg';
import { ReactComponent as GrassSVG } from '../assets/PokemonTypeIcons/grass.svg';
import { ReactComponent as ElectricSVG } from '../assets/PokemonTypeIcons/electric.svg';
import { ReactComponent as IceSVG } from '../assets/PokemonTypeIcons/ice.svg';
import { ReactComponent as FightingSVG } from '../assets/PokemonTypeIcons/fighting.svg';
import { ReactComponent as PoisonSVG } from '../assets/PokemonTypeIcons/poison.svg';
import { ReactComponent as GroundSVG } from '../assets/PokemonTypeIcons/ground.svg';
import { ReactComponent as FlyingSVG } from '../assets/PokemonTypeIcons/flying.svg';
import { ReactComponent as PsychicSVG } from '../assets/PokemonTypeIcons/psychic.svg';
import { ReactComponent as BugSVG } from '../assets/PokemonTypeIcons/bug.svg';
import { ReactComponent as RockSVG } from '../assets/PokemonTypeIcons/rock.svg';
import { ReactComponent as GhostSVG } from '../assets/PokemonTypeIcons/ghost.svg';
import { ReactComponent as DarkSVG } from '../assets/PokemonTypeIcons/dark.svg';
import { ReactComponent as DragonSVG } from '../assets/PokemonTypeIcons/dragon.svg';
import { ReactComponent as SteelSVG } from '../assets/PokemonTypeIcons/steel.svg';
import { ReactComponent as FairySVG } from '../assets/PokemonTypeIcons/fairy.svg';




let capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


let typeToIcon = (type) => {
  switch(type) {
    case "fire":
      return <FireSVG className=' bg-red-500  rounded-full p-[3px]'/>
    
    case "normal":
      return <NormalSVG className=' bg-gray-500  rounded-full p-[3px]'/>

    case "water":
      return <WaterSVG className=' bg-blue-500  rounded-full p-[3px]'/>

    case "grass":
      return <GrassSVG className=' bg-green-500	  rounded-full p-[3px]'/>

    case "electric":
      return <ElectricSVG className=' bg-yellow-500	  rounded-full p-[3px]'/>

    case "ice":
      return <IceSVG className=' bg-teal-300  rounded-full p-[3px]'/>

    case "fighting":
      return <FightingSVG className=' bg-rose-500  rounded-full p-[3px]'/>
    
    case "poison":
      return <PoisonSVG className=' bg-purple-500  rounded-full p-[3px]'/>

    case "ground":
      return <GroundSVG className=' bg-yellow-800 rounded-full p-[3px]'/>

    case "flying":
      return <FlyingSVG className=' bg-sky-300  rounded-full p-[3px]'/>
  
    case "psychic":
      return <PsychicSVG className=' bg-pink-700  rounded-full p-[3px]'/>

    case "bug":
      return <BugSVG className=' bg-lime-400  rounded-full p-[3px]'/>

    case "rock":
      return <RockSVG className=' bg-stone-500  rounded-full p-[3px]'/>

    case "ghost":
      return <GhostSVG className=' bg-indigo-700  rounded-full p-[3px]'/>

    case "dark":
      return <DarkSVG className=' bg-neutral-800  rounded-full p-[3px]'/>

    case "dragon":
      return <DragonSVG className=' bg-red-600  rounded-full p-[3px]'/>

    case "steel":
      return <SteelSVG className=' bg-teal-700  rounded-full p-[3px]'/>

    case "fairy":
      return <FairySVG className=' bg-pink-400	  rounded-full p-[3px]'/>
}
}

export default function PokemonCards({ pokemon }) {
  return (
    <div className="d-flex m-10 max-w-sm">

      <div className="flex flex-col p-10 border-red-600 border-2 rounded-md ">
        <div className="flex flex-row w-full">
          {pokemon.types.map((p) => (
            <div className="flex justify-between">
              <div className="mr-2 ">{typeToIcon(p.type.name)}</div>
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
