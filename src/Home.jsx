import React from 'react'
import PopularPicks from './PopularPicks'
import VegetarianPicks from './VegetarianPicks'

function Home() {
  return (
    <div className='flex justify-center flex-col items-center pt-20 gap-20'>
      <PopularPicks></PopularPicks>
      <VegetarianPicks></VegetarianPicks>
    </div>
  )
}

export default Home
