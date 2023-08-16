import {React,useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'

export const Navbar = ()=>{
    const [menu,setMenu]= useState(false)

    const openMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <div className=' flex h-20 justify-between items-center px-4 absolute z-10 text-white w-full'>
            <div>
                <h1 onClick={openMenu} className={menu ? 'hidden':'block'}>BEACHES.</h1>   
            </div>
            <ul className='md:flex hidden  '>
                <li >Home</li>
                <li >Destination</li>
                <li >Travel</li>
                <li >View</li>
                <li >Book</li>
            </ul>
            <div className='md:flex hidden'>
                <BsPerson className='mr-2' size={20}/>
                <BiSearch size={20}/> 
                
            </div>
            <div className='md:hidden z-20 text-black '>
                {/* <AiOutlineClose/> */}
                {menu?<AiOutlineClose onClick={openMenu} size={20}/> : <AiOutlineMenu onClick={openMenu} className='text-white' size={20}/>}
            </div>
            <div  className={menu ?'absolute  text-black left-0 top-0 w-full bg-gray-100/90  px-4 py-7 flex flex-col z-10':'absolute left-[-100%] '}>
                <ul>
                    <h1>BEACHES.</h1>
                    <li className='border-b' >Home</li>
                    <li className='border-b' >Destination</li>
                    <li  className='border-b'>Travel</li>
                    <li  className='border-b'>View</li>
                    <li  className='border-b'>Book</li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon'/>
                        <FaTwitter className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaPinterest className='icon'/>
                        <FaYoutube className='icon'/>
                    </div>
                </ul>
            </div>

        </div>
    )
}