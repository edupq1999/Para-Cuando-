import React from 'react'
import Interests from '../components/general/Interests'
import Recents from '../components/general/Recents'
import SearchBar from '../components/general/SearchBar'
import Layout from '../components/Layout'

export default function Brands() {
  return (
    <Layout 
      title='PC?|Brands and Shops' 
      description='Marcas y tiendas de la página Para Cuando?'>
      <main className='bg-brands w-full bg-cover bg-center grid place-items-center py-3'>
        <div className='w-80% m-auto'>
          <h3 className='text-15 text-white font-semibold'>Home / Marcas</h3>
          <h1 className='text-30 text-yellow font-bold'>Marcas y tiendas</h1>
          <p className='text-15 text-white'>Descubre las marcas y tiendas que la gente quiere cerca </p>
        </div>
      </main>
      <SearchBar />
      <Recents />
      <Recents />
      <Interests />
      <Recents />
    </Layout>
  )
}
