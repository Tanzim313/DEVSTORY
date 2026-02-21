"use client";
import React from 'react'
import NavLink from './NavLink'

export default function navbar() {
  return (

<div className='flex justify-around'>
    
    <span className='flex justify-start font-bold mx-4 my-4 ' >
         <NavLink href={"/"}>Dev-Story</NavLink>
    </span>

    <div className='flex justify-end mx-4 my-4 gap-2 font-bold '>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/login">Login</NavLink>
    <NavLink href="/register">Register</NavLink>
    <NavLink href="/tutorials">Tutorials</NavLink>
    <NavLink href="/stories">Stories</NavLink>
    <NavLink href="/dashboard">Dashboard</NavLink>
    <NavLink href="/about">about</NavLink>
    <NavLink href="/about/contact">Contact</NavLink>
    <NavLink href="/about/team">Team</NavLink>
    </div>
</div>
  )
}
