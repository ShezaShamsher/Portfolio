import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className='mx-10'>

                    <div className='float-left my-10' >
                        <h1 className='font-mono font-extrabold text-4xl'>Get In Touch</h1>
                        <p className='font-medium mt-6'>For inquiries or further information, please don't hesitate to get in touch</p>
                        <ul className='mt-6'>
                            <li><Link href={ 'https://www.linkedin.com/in/sheza-shamsher-7423322b5' } target='blank'> <LinkedInIcon /> LinkedIn </Link></li>
                            <br />
                            <li><Link href={ 'https://github.com/ShezaShamsher' } target='blank'> <GitHubIcon /> Github </Link></li>
                        </ul>
                    </div>

                    <div>
                        <form className="max-w-md mx-auto my-10 float-right">

                            Name: <input type="text"
                                placeholder='Enter your Name'
                                className="w-full p-3 border border-gray-400 rounded mb-4"
                                required
                            />

                            Email: <input type="text"
                                placeholder='Enter your Email'
                                className="w-full p-3 border border-gray-400 rounded mb-4"
                                required
                            />

                            Phone Number: <input type="number"
                                placeholder='Enter your Phone Number'
                                className="w-full p-3 border border-gray-400 rounded mb-4"
                                required
                            />

                            Message: <textarea
                                placeholder="Enter Your Message Here"
                                rows={ 4 }
                                className="w-full p-3 border border-gray-400 rounded mb-4"
                            ></textarea>

                            <Button className='bg-blue-400' variant="outline"> Submit </Button>

                        </form>
                    </div>
                </main>

                <Footer />

            </div>
        </>
    )
}

export default Contact
