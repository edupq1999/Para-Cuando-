import React from 'react'

export default function Interests() {
  return (
    <section className='bg-skyBlue p-6 flex flex-col gap-3'>
        <h1 className='font-bold text-grey2 text-20'>¡Hagámoslo más personal!</h1>
        <p className='text-grey2 text-12'>Selecciona tus intereses para brindarte sugerencias de acuerdo a tus gustos</p>
        <div className='rounded-4xl text-grey bg-white w-content px-2 py-1 text-10'>
            Artistas mexicanos
        </div>
        <a 
            className='text-blue text-12'
            href="#">Ver todos los intereses</a>
    </section>
  )
}
