import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='p-4'>
      <h1 className='font-bold bg-amber-400 py-2 px-2 border-2 shadow-amber-100'>Dashboard Menu</h1>

      <div className='mt-4 flex flex-col gap-1'>
        <Link className='py-2 px-4 bg-amber-400' href='/dashboard/add-story'>add story</Link>
        <Link className='py-2 px-4 bg-amber-400' href='/dashboard/my-profile'>my-profile</Link>
        <Link className='py-2 px-4 bg-amber-400' href='/dashboard/setting'>settings</Link>
      </div>
    </div>
  )
}
