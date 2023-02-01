import React from 'react'
import Interests from '../components/general/Interests'
import Recents from '../components/general/Recents'
import Layout from '../components/Layout'

export default function Details() {
  return (
    <Layout>
      <div className='shadow-md mainWidth'>
        <div className='detailsFilter md:w-4/5'>
        <div className='filterDetailsPhone md:filterDetailsPC md:w-4/5'>
          <svg 
            className='md:hidden'
            width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12C7.71667 12 7.47933 11.904 7.288 11.712C7.096 11.5207 7 11.2833 7 11C7 10.7167 7.096 10.4793 7.288 10.288C7.47933 10.096 7.71667 10 8 10H10C10.2833 10 10.521 10.096 10.713 10.288C10.9043 10.4793 11 10.7167 11 11C11 11.2833 10.9043 11.5207 10.713 11.712C10.521 11.904 10.2833 12 10 12H8ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1ZM4 7C3.71667 7 3.479 6.904 3.287 6.712C3.09567 6.52067 3 6.28333 3 6C3 5.71667 3.09567 5.479 3.287 5.287C3.479 5.09567 3.71667 5 4 5H14C14.2833 5 14.5207 5.09567 14.712 5.287C14.904 5.479 15 5.71667 15 6C15 6.28333 14.904 6.52067 14.712 6.712C14.5207 6.904 14.2833 7 14 7H4Z" fill="black"/>
          </svg>
          <ul className='phoneHidden md:flex gap-1'>
            <li className='filterButton'><a href="./brands"> Marcas y tiendas</a></li>
            <li className='filterButton'><a href="./artists"> Artistas y conciertos</a></li>
            <li className='filterButton'><a href="./tournament"> Torneos</a></li>
          </ul>
        </div>
        <div className='relative pageSearchContainer ml-3'>
          <input 
            type="text" 
            placeholder='¿Qué quieres buscar en tu ciudad?'
            className='searchBar'/>
          <svg 
            className='searchBarLen'
            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8541 11.5833H12.097L11.8287 11.3021C12.4276 10.5458 12.8653 9.65498 13.1105 8.69335C13.3557 7.73173 13.4023 6.72308 13.247 5.73959C12.7966 2.84375 10.5732 0.531254 7.88991 0.177088C6.94655 0.0473644 5.98838 0.153933 5.08873 0.488639C4.18908 0.823344 3.3718 1.37732 2.69942 2.10816C2.02704 2.83901 1.51739 3.72736 1.20946 4.70524C0.901529 5.68312 0.803486 6.7246 0.922832 7.75C1.24866 10.6667 3.37617 13.0833 6.04033 13.5729C6.94515 13.7417 7.8731 13.6911 8.7578 13.4245C9.64249 13.158 10.4621 12.6822 11.1578 12.0313L11.4166 12.3229V13.1458L15.4895 17.5729C15.8824 18 16.5245 18 16.9174 17.5729C17.3103 17.1458 17.3103 16.4479 16.9174 16.0208L12.8541 11.5833ZM7.10408 11.5833C4.71783 11.5833 2.79158 9.48959 2.79158 6.89584C2.79158 4.30209 4.71783 2.20834 7.10408 2.20834C9.49033 2.20834 11.4166 4.30209 11.4166 6.89584C11.4166 9.48959 9.49033 11.5833 7.10408 11.5833Z" fill="#6E6A6C"/>
          </svg>
        </div>
        </div>
      </div>
      <div className='detailsMain md:grid md:w-4/5 md:gap-10'>
        <div className='md:row-start-1 md:row-end-3 md:flex md:flex-col md:gap-4 justify-around'>
          <h3 className='detailsRoute'>Artista / Pop / Rock</h3>
          <h1 className='detailsTitle'>Concierto de Lady Gaga</h1>
          <p className='detailsInfo'>El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática.</p>
          <a 
            className='text-blue text-xl font-semibold w-max'
            href="#">ladygaga.com</a>
          <div className='flex items-center'>
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
          className='my-8 md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-4'
          src="https://los40es00.epimg.net/los40/imagenes/2017/02/06/musica/1486367147_194336_1486369812_noticia_normal.jpg" alt="detailImg" />
        <div className='buttonVote md:row-start-3 md:row-end-4'>
          <span>Votar</span>
        </div>
      </div>
      <Interests />
      <Recents />
    </Layout>
  )
}
