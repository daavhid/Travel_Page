import React from 'react'
import SelectsCards from './SelectsCards'
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'

const Selects = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCards img = {Maldives} text = 'Maldives'/>
        <SelectsCards img = {Maldives2} text = 'Jamaica'/>
        <SelectsCards img = {Borabora} text = 'Bora Bora'/>
        <SelectsCards img = {Borabora2} text = 'AntiGua'/>
        <SelectsCards img = {Keywest} text = 'Key West'/>
        <SelectsCards img = {Maldives3} text = 'New Jersey'/>
    </div>
  )
}

export default Selects