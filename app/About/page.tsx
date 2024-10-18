import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <Header />
            <div className='mx-20 my-10 border-solid border-2 border-gray-950 shadow-md rounded p-10'>
                <h1 className='flex justify-center items-center font-bold font-serif text-3xl mb-8'>About Me</h1>
                <div className='flex justify-center items-center'>
                    <Image className='rounded-full' src={ '/profile.jpg' } alt='Profile' height={ 50 } width={ 200 }></Image>
                </div>
                <p className='mx-8 mt-5'>I'm Sheza Shamsher. A Frontend Developer I completed my matriculation in 2020 with a B grade, achieving a solid foundation in my studies. Building on that success, I passed my intermediate in 2022 with a B grade. Currently, I am studying at the Governor House, where I have access to enriching educational resources and mentorship. This environment motivates me to grow academically and personally, as I aim to excel further in my field and explore new opportunities for development Learning Cloud Native Applied Generative AI

                </p>
            </div>

            <Footer />

        </>
    )
}

export default About
