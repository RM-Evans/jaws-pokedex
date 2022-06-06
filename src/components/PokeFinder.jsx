import React from 'react'

export default function PokeFinder() {
  return (
    <div className=' m-7'>
    <input type="search" placeholder="pikachu...." className='border-2 rounded-md border-slate-500 p-1 mr-2 w-80'></input>
    <button className='border-2 rounded-md p-1 bg-red-600 border-red-800 text-white'>search</button>
  </div>
  )
}
