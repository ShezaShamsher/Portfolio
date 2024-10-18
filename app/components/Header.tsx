'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const route = useRouter();
  return (
    <>
      <div className='text-2xl flex justify-between bg-slate-950 py-4 px-14 text-slate-50 border-collapse'>
        <h1 className='font-semibold'>Sheza Shamsher</h1>
        <div>
          <button className='text-xs font-sans mx-6 hover hover:underline transition-transform duration-300 transform hover:scale-125 cursor-pointer' onClick={ () => route.push( '/' ) }>Home</button>
          <button className='text-xs font-sans mx-6 hover hover:underline transition-transform duration-300 transform hover:scale-125 cursor-pointer' onClick={ () => route.push( '/About' ) }>About</button>
          <button className='text-xs font-sans mx-6 hover hover:underline transition-transform duration-300 transform hover:scale-125 cursor-pointer' onClick={ () => route.push( '/Skills' ) }>Skills</button>
          <button className='text-xs font-sans mx-6 hover hover:underline transition-transform duration-300 transform hover:scale-125 cursor-pointer' onClick={ () => route.push( '/Contact' ) }>Contact</button>
        </div>
      </div>
    </>
  )
}

export default Header
