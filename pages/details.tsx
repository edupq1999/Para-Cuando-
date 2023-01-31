import React from 'react'
import Interests from '../components/general/Interests'
import Recents from '../components/general/Recents'
import Layout from '../components/Layout'

export default function Details() {
  return (
    <Layout>
      <div className='flex flex-col m-auto w-11/12'>
        <div>
          <h3 className='font-semibold text-12'>Artista / Pop / Rock</h3>
          <h1 className='font-bold text-30'>Concierto de Lady Gaga</h1>
          <p className='text-grey2 text-15'>El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática.</p>
          <a 
            className='text-blue text-10 font-semibold'
            href="#">ladygaga.com</a>
          <div className='flex text-10 items-center'>
          <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2115_7383)">
            <path d="M4.89245 15.3778L4.8923 15.3781C4.68621 15.7136 4.5835 16.0766 4.5835 16.4834V17.25C4.5835 17.5764 4.69105 17.8376 4.92733 18.0738C5.16269 18.3092 5.42338 18.4167 5.75016 18.4167H17.2502C17.5768 18.4167 17.8379 18.3093 18.074 18.0738C18.3094 17.8378 18.4168 17.5766 18.4168 17.25V16.4834C18.4168 16.0766 18.3141 15.7136 18.108 15.3781L18.1079 15.3778C17.8992 15.0379 17.6301 14.7874 17.2932 14.6122C16.3524 14.1422 15.4008 13.7916 14.438 13.5581C13.4738 13.3249 12.4949 13.2084 11.5002 13.2084C10.5054 13.2084 9.52654 13.3249 8.56233 13.5581L4.89245 15.3778ZM4.89245 15.3778C5.10108 15.0379 5.37019 14.7874 5.7071 14.6122M4.89245 15.3778L5.7071 14.6122M5.7071 14.6122C6.64777 14.1423 7.59919 13.7917 8.5619 13.5582L5.7071 14.6122ZM11.5002 10.75C10.6465 10.75 9.93437 10.4548 9.3232 9.84367C8.71204 9.23251 8.41683 8.52038 8.41683 7.66671C8.41683 6.81304 8.71204 6.10091 9.3232 5.48975C9.93437 4.87858 10.6465 4.58337 11.5002 4.58337C12.3538 4.58337 13.066 4.87858 13.6771 5.48975C14.2883 6.10091 14.5835 6.81303 14.5835 7.66671C14.5835 8.52038 14.2883 9.23251 13.6771 9.84367C13.066 10.4548 12.3538 10.75 11.5002 10.75Z" stroke="#1A1E2E" stroke-width="1.5"/>
            </g>
            <defs>
            <clipPath id="clip0_2115_7383">
            <rect width="23" height="23" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <span className='font-semibold'>90800756 votos</span>
          </div>
        </div>
        <img 
        className='my-30'
          src="https://los40es00.epimg.net/los40/imagenes/2017/02/06/musica/1486367147_194336_1486369812_noticia_normal.jpg" alt="detailImg" />
        <div className='bg-blue text-white w-full h-10 rounded-4xl grid place-items-center'>
          <span>Votar</span>
        </div>
      </div>
      <Interests />
      <Recents />
    </Layout>
  )
}
