import React from 'react'
import Card from './Card'

export default function Recents() {
  return (
    <section>
      <div className='sectionCards'>
        <h1 className='sectionCardsTitle'>Recientes</h1>
        <p className='sectionCardsInfo'>Las personas últimamente están hablando de esto</p>
      </div>
      <div className='sectionCardsContainer'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
