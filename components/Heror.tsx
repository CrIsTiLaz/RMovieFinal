import Link from 'next/link'
import React from 'react'

const Heror = () => {
  return (
    <div className='text-center bg-white pb-10'>
      <h1 className='tetx-2xl text-gray-700 uppercase font-bold'>Welcome to RMovie</h1>
      <Link href={'/contact'}>
        <button className='bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4'>CONTACT US</button>
      </Link>
    </div>
  )
}

export default Heror