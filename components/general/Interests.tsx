import React from 'react'

export default function Interests() {
  return (
    <section className='bg-skyBlue p-6 flex flex-col gap-3 md:m-auto md:w-4/5 md:my-5'>
        <h1 className='interestTitle'>¡Hagámoslo más personal!</h1>
        <p className='interestInfo'>Selecciona tus intereses para brindarte sugerencias de acuerdo a tus gustos</p>
        <div className='interestOption'>
            Artistas mexicanos
        </div>
        <a 
            className='text-blue text-12'
            href="#">Ver todos los intereses</a>
    </section>
  )
}
