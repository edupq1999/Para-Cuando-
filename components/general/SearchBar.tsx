import React from 'react'

export default function SearchBar() {
  return (
    <section className='grid gap-3 place-items-center w-11/12 mx-auto my-30'>
      <div className='relative w-full'>
        <input 
          className='px-2 py-1 border-grey border-2 rounded-4xl h-12 w-full text-3vmin'
          type="text" 
          placeholder='¿Qué quieres ver en tu ciudad?'/>
        <svg 
          className='absolute top-3 right-2 fill-grey'
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
      </div>
      <ul className='flex justify-center gap-5 w-full text-2.8vmin'>
        <li className='border-grey border-2 py-2 px-3 rounded-4xl text-grey'>
          <a href="./brands">
            Marcas y tiendas
            </a>
        </li>
        <li className='border-grey border-2 py-2 px-3 rounded-4xl text-grey'>
          <a href="./artists">
            Artistas y conciertos
            </a>
        </li>
        <li className='border-grey border-2 py-2 px-3 rounded-4xl text-grey'>
          <a href="./tournament">
            Torneos
          </a>
        </li>
      </ul>
    </section>
  )
}
