import React, { useState } from 'react'

export default function Card() {
    const [liked, setLiked] = useState('lightgrey')

    const changeColor = () => {
        if (liked === 'lightgrey') {
            setLiked('#FF64BC')
        } else {
            setLiked('lightgrey')
        }
    }
  return (
    <div className='card'>
        <div className='relative'>
            <img 
                src="https://los40es00.epimg.net/los40/imagenes/2017/02/06/musica/1486367147_194336_1486369812_noticia_normal.jpg" alt="cardImg" />
            <svg
                onClick={changeColor}
                className='absolute right-2 top-48 duration-1000' 
                width="49" height="49" viewBox="0 0 49 49" fill={`${liked}`} xmlns="http://www.w3.org/2000/svg">
            <circle 
                className='duration-200'
                cx="24.5" cy="24.5" r="23.5" fill={`${liked}`} stroke="white" stroke-width="2"/>
            <path d="M19.15 14C15.2013 14 12 17.1565 12 21.0501C12 28.1001 20.45 34.5092 25 36C29.55 34.5092 38 28.1001 38 21.0501C38 17.1565 34.7987 14 30.85 14C28.432 14 26.2935 15.1838 25 16.9956C24.3407 16.0696 23.4648 15.3139 22.4465 14.7925C21.4282 14.271 20.2974 13.9992 19.15 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className='cardInfo'>

            <h1 className='cardTitle'>Concierto de Lady Gaga</h1>
            <p className='cardDescription'>El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática de Lady Gaga en Las Vegas. El concierto con la temática.</p>
            <a 
                className='text-blue font-semibold'
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
    </div>
  )
}
