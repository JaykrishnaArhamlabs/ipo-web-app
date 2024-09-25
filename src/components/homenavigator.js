import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/solid'


export default function HomeNavigator() {
  return (
      <div className='flex items-center text-xs text-borderColor gap-2'>
        <Link to="/">Home</Link>
        <ChevronRightIcon className='text-borderColor size-3'/>
        <span>Market watch</span>
      </div>
  )
}
