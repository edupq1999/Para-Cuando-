import React from 'react'
import Interests from '../components/general/Interests'
import Popular from '../components/general/Popular'
import Recents from '../components/general/Recents'
import SearchBar from '../components/general/SearchBar'
import Suggestions from '../components/general/Suggestions'
import Layout from '../components/Layout'

export default function Brands() {
  return (
    <Layout 
      title='PC?|Brands and Shops' 
      description='Marcas y tiendas de la página Para Cuando?'>
      <main className='bg brands pageMain'>
        <div className='md:w-4/5 m-auto'>
          <h3 className='pageRoute'>Home / Marcas</h3>
          <h1 className='pageTitle'>Marcas y tiendas</h1>
          <p className='pageInfo'>Descubre las marcas y tiendas que la gente quiere cerca </p>
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
