import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1140px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque consectetur. Earum, laborum hic blanditiis fuga rem, ex nam tempore dignissimos aperiam asperiores repellat, corporis laudantium vitae dolore quae quia quas aspernatur! Veritatis nesciunt quasi itaque eius voluptates quaerat saepe? Molestiae, perferendis architecto provident ab qui, laudantium fugit perspiciatis ipsa ipsum quis maiores beatae porro error dolore eius pariatur corrupti quod! Pariatur deserunt sit iste veritatis, nulla aperiam. Culpa sit ipsam labore. Eius, odio mollitia. Quibusdam voluptate animi reiciendis alias, esse numquam cumque tenetur tempora officia ad, ratione officiis molestiae, quo aperiam maiores quos eius! Dignissimos enim optio maiores rerum?
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <button><RiCustomerService2Fill size={30}/></button>
                    <div className='mx-auto text-center'>
                        <h3>LEADING SERVICE</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, optio.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center'>
                    <button><MdOutlineTravelExplore size={30}/></button>
                    <div className='mx-auto text-center'>
                        <h3>LEADING SERVICE</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, optio.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className=' uppercase border text-center p-4 '>
                <p className='pt-2'>Get an Additional 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT </p>
                <p className='bg-gray-900 text-gray-200 py-2'>Book now and save</p>
            </div>
            <form >
                <div className='flex flex-col my-2'>
                    <label> Destination</label>
                    <select  className='border rounded-md p-2'>
                        <option >Grande Antigua</option>
                        <option >Key West</option>
                        <option >Maldives</option>
                        <option >Cozumel</option>
                    </select>
                </div>
                <div  className='flex flex-col my-2'>
                    <label>Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-Out</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className="w-full my-4">Rates and Availability</button>

            </form>
        </div>


        
    </div>
  )
}

export default Search