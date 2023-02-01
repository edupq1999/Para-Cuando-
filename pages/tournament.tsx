import React from 'react'
import Interests from '../components/general/Interests'
import Popular from '../components/general/Popular'
import Recents from '../components/general/Recents'
import SearchBar from '../components/general/SearchBar'
import Suggestions from '../components/general/Suggestions'
import Layout from '../components/Layout'

export default function Tournament() {
  return (
    <Layout
      title='PC?|Artist and concerts'
      description='Artistas y conciertos de la página Para Cuando?'>
      <main className='bg tournaments pageMain'>
        <div>
          <h3 className='pageRoute'>Home / Tournaments</h3>
          <h1 className='pageTitle'>Torneos</h1>
          <p className='pageInfo'>Descubre los torneos que la gente quiere cerca </p>
        </div>
      </main>
      <SearchBar />
      <Popular />
      <Suggestions />
      <Interests />
      <Recents />
    </Layout>
  )
}
