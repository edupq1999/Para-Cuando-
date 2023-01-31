import React from 'react'
import Card from '../components/general/Card'
import Interests from '../components/general/Interests'
import Recents from '../components/general/Recents'
import Main from '../components/home/Main'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout
      title='PC | Home'>
        <Main />
        <section>
          <div className='m-20'>
            <h1 className='font-bold'> Populares en Querétaro</h1>
            <p className='text-grey2'>Lo que las personas piden más</p>
          </div>
          <div className='flex overflow-hidden w-fit'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
        <div className='m-20'>
            <h1 className='font-bold'> Sugerencias para ti </h1>
            <p className='text-grey2'> Publicaciones que podrías colaborar </p>
          </div>
          <div className='flex overflow-hidden w-300%'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Interests />
        <Recents />
    </Layout>
  )
}
