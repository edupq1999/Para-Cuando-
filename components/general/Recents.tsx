import React from 'react'
import Card from './Card'

export default function Recents() {
  return (
    <section>
        <div className='m-20'>
            <h1 className='font-bold'> Recientes </h1>
            <p className='text-grey2'> Las personas últimamente están hablando de esto </p>
            </div>
            <div className='flex overflow-hidden w-300%'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}
