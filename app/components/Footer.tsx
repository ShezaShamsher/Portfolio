import React from 'react'
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <footer className='mt-28 '>
        <div className='mt-4'>
          <hr className="border-t-2 border-[hashtag#01AECD]" />
        </div>
  
        <div>
          <center>
            <div className='mt-5'>
              <ul className='flex justify-center gap-5 items-center'>
                <li className='rounded-full cursor-pointer hover:scale-125 border-2 hover:border-[hashtag#01AECD] border-black p-3 duration-500 hover:text-[hashtag#01AECD]'><Link href={ "https://web.whatsapp.com/+923112813975" } target='blank'><WhatsAppIcon /></Link></li>
                <li className='rounded-full cursor-pointer hover:scale-125 border-2 hover:border-[hashtag#01AECD] border-black p-3 duration-500 hover:text-[hashtag#01AECD]'><Link href={ "https://github.com/ShezaShamsher" } target='blank'><GitHubIcon /></Link></li>
                <li className='rounded-full cursor-pointer hover:scale-125 border-2 hover:border-[hashtag#01AECD] border-black p-3 duration-500 hover:text-[hashtag#01AECD]'><Link href={ "https://www.linkedin.com/in/sheza-shamsher-7423322b5" } target='blank'><LinkedInIcon /></Link></li>

              </ul>
            </div>
          </center>
        </div>

        <div className='text-sm p-[30px_0px]'>
          <center>
            @2024 Copyright Sheza Shamsher
          </center>

        </div>
      </footer>
    </>
  )
}

export default Footer