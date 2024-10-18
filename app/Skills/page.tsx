import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'


const Skills = () => {
    return (
        <>
            <Header />
            <h1 className='flex justify-center items-center font-serif font-semibold text-3xl my-8'>Skills</h1>

            <main className='mx-28 my-16'>

                <div className='grid grid-cols-3 gap-x-10'>
                    <Image className='transition-transform duration-300 transform hover:scale-125 cursor-pointer' src={ '/html-5.png' } alt='html' height={ 100 } width={ 200 }></Image>
                    <Image className='transition-transform duration-300 transform hover:scale-125 cursor-pointer' src={ '/css-3.png' } alt='css' height={ 100 } width={ 200 }></Image>
                    <Image className='transition-transform duration-300 transform hover:scale-125 cursor-pointer' src={ '/javascript.png' } alt='javascript' height={ 100 } width={ 200 }></Image>
                </div>

                <div className='grid grid-cols-2 gap-x-5 mx-40 my-6'>
                    <Image className='mt-8 transition-transform duration-300 transform hover:scale-125 cursor-pointer' src={ '/typescript.png' } alt='typescript' height={ 100 } width={ 150 }></Image>
                    <Image className='transition-transform duration-300 transform hover:scale-125 cursor-pointer' src={ '/next-js.png' } alt='next-js' height={ 100 } width={ 200 }></Image>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Skills
