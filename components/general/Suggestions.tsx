import React from 'react'
import Card from './Card'

export default function Suggestions() {
  return (
    <section>
        <div className='sectionCards'>
        <h1 className='sectionCardsTitle'>Sugerencias para ti</h1>
        <p className='sectionCardsInfo'>Publicaciones que podrías colaborar</p>
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
