import React from 'react'
import Card from './Card'

export default function Popular() {
  return (
    <section>
          <div className='sectionCards'>
            <h1 className='sectionCardsTitle'> Populares en Querétaro</h1>
            <p className='sectionCardsInfo'>Lo que las personas piden más</p>
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
