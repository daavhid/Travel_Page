import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-8'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES.</h1>
                <div className='flex justify-between my-4 w-full sm:max-w-[200px]'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </div>
            <div className='w-full flex justify-between items-center'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnership</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li >Home</li>
                    <li >Destination</li>
                    <li >Travel</li>
                    <li >View</li>
                    <li >Book</li>
            </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Footer