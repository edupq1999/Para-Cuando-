import React from 'react'
import Header from '../components/newPublish/Header'

export default function NewPublishInfo() {
  return (
    <>
    <div className='md:flex'>
      <Header />
      <a href='./home' className='text-blue text-lg w-20 ml-4 mt-2 font-bold md:mt-10 h-5'>Back</a>
      <form className='formRegister pb-10 mr-10'>
        <div>
          <h1 className='newPublishTitle'>Publicación</h1>
          <span className='newPublishInfo'>Información Básica</span>
        </div>
        <input 
          className='formInput'
          type="text" 
          placeholder='Título de publicación'/>
        <select 
          className='formInput text-grey'
          name="type" 
          id="type" 
          placeholder='Tipo'>
          <option value="brands">Marcas y tiendas</option>
          <option value="artists">Artistas y conciertos</option>
          <option value="tournaments">Torneos</option>
        </select>
        <select 
          className='formInput text-grey'
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
        <textarea 
          className='formInput h-40 '
          placeholder='¿Por qué lo recomiendas?'/>
        <input 
          className='formInput'
          type="text" 
          placeholder='Link de referencia'/>
        <a href='./newPublishImgs' className='buttonForm text-center'>Siguiente</a>
      </form>
      </div>
    </>
  )
}
