'use client'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Header />

      <div className='flex justify-start items-center py-16 mx-14'>
        <Image src={ '/Profile.jpg' } alt='Profile Picture' height={ 50 } width={ 300 } ></Image>
        <div className='mb-12 flex flex-col space-y-4 mt-9'>
          <h1 className='text-slate-900 text-4xl ml-10 font-serif font-semibold '>I'm Sheza Shamsher</h1>
          <h1 className='text-slate-900 text-4xl ml-10 font-serif font-semibold'>A Frontened Developer</h1>
          <p className='text-slate-600 ml-10 font-medium'>I'm probably the most passionate developer you will ever get to work with. If you have a great project that needs some azaming skills, I'm your guy.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
