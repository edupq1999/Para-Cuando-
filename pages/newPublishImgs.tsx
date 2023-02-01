import React from 'react'
import Header from '../components/newPublish/Header'

export default function NewPublishImgs() {
  return (
    <>
      <Header />
      <a className='cursor-pointer text-blue font-semibold text-lg ml-4'>Back</a>
      <form className='flex flex-col m-auto w-11/12 gap-4'>
        <h1 className='newPublishTitle'>Fotos</h1>
        <p className='newPublishInfo'>Selecciona máximo tres fotos para crear una galería</p>
        <ul className='newPublishImgs'>
          <label htmlFor='inputImg1' className='newPublishImgSelect'>
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.14286H5.71429V9H4.28571V5.14286H0V3.85714H4.28571V0H5.71429V3.85714H10V5.14286Z" fill="#1B4DB1"/>
            </svg>

            <input type="file" id='inputImg1' className='hidden'/>
            </label>
          <label htmlFor='inputImg2' className='newPublishImgSelect'>
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.14286H5.71429V9H4.28571V5.14286H0V3.85714H4.28571V0H5.71429V3.85714H10V5.14286Z" fill="#1B4DB1"/>
            </svg>

            <input type="file" id='inputImg2' className='hidden'/>
            </label>
          <label htmlFor='inputImg3' className='newPublishImgSelect'>
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.14286H5.71429V9H4.28571V5.14286H0V3.85714H4.28571V0H5.71429V3.85714H10V5.14286Z" fill="#1B4DB1"/>
            </svg>
            <input type="file" id='inputImg3' className='hidden'/>
          </label>
        </ul>
        <button className='m-auto bg-blue text-white py-2 px-4 rounded-3xl font-semibold'>Publicar</button>
      </form>
    </>
  )
}
