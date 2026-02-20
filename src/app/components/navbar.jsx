import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (

<div className='flex justify-around'>
    
    <span className='flex justify-start font-bold mx-4 my-4 ' >
         <Link href={"/"}>Dev-Story</Link>
    </span>

    <div className='flex justify-end mx-4 my-4 gap-2 font-bold '>
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link>
    <Link href="/tutorials">Tutorials</Link>
    <Link href="/stories">Stories</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/about">about</Link>
    <Link href="/about/contact">Contact</Link>
    <Link href="/about/team">Team</Link>
    </div>
</div>
  )
}
