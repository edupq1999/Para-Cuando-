import React from 'react'
import Header from '../components/newPublish/Header'

export default function NewPublishInfo() {
  return (
    <>
      <Header />
      <button className='text-blue ml-10 mt-10 font-bold'>Back</button>
      <form className='flex flex-col m-auto w-11/12 gap-4'>
        <div>
          <h1 className='font-bold text-20'>Publicación</h1>
          <span className='text-15'>Información Básica</span>
        </div>
        <input 
          className='border-grey border-solid border-2 px-2 py-2 rounded-xl'
          type="text" 
          placeholder='Título de publicación'/>
        <select 
          className='border-grey border-solid border-2 px-2 py-2 rounded-xl text-grey'
          name="type" 
          id="type" 
          placeholder='Tipo'>
          <option value="brands">Marcas y tiendas</option>
          <option value="artists">Artistas y conciertos</option>
          <option value="tournaments">Torneos</option>
        </select>
        <select 
          className='border-grey border-solid border-2 px-2 py-2 rounded-xl text-grey'
          name="category" 
          id="category" 
          placeholder='Categoría'
          >
          <option value="clothing">Ropa y accesorios</option>
          <option value="sports">Deportes</option>
          <option value="concerts">Conciertos</option>
          <option value="Meet">Meet & Greet</option>
          <option value="Esports">E-sport</option>
          <option value="Pop">Pop / Rock</option>
          <option value="tecnology">Tecnología</option>
          <option value="home">Hogar / Decoración</option>
          <option value="catering">Abastecimiento</option>
        </select>
        <input 
          className='border-grey border-solid border-2 px-2 py-32 rounded-xl'
          type="text" 
          placeholder='¿Por qué lo recomiendas?'/>
        <input 
          className='border-grey border-solid border-2 px-2 py-2 rounded-xl'
          type="text" 
          placeholder='Link de referencia'/>
        <button className='m-auto bg-blue text-white py-2 px-4 rounded-4xl font-semibold'>Siguiente</button>
      </form>
    </>
  )
}
