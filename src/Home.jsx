import React from 'react'
import PopularPicks from './PopularPicks'

function Home() {
  return (
    <div className='flex justify-center flex-col items-center pt-20 gap-20'>
      <PopularPicks></PopularPicks>
      <div>
        <p className='text-5xl'>Vegeterian Picks</p>
        <div className='flex justify-around items-center'>
          
        </div>
      </div>
    </div>
  )
}

export default Home
