import Link from 'next/link'
import React from 'react'
import Sideber from './_comp/sideber'

const layout = ({children}) => {
  return (
    <main className='md:container md:mx-auto'>

   <div className='flex gap-3'>
    <Sideber />
     <div className=''>
        {children}
    </div>
   </div>
    </main>
  )
}

export default layout