"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({href,children}) {
    const pathName = usePathname();
  return (
    <div>
      <Link className={`${ pathName.startsWith(href) && "bg-sky-400 py-2 px-4 border-2 " }`} href={href} >{children}</Link>
    </div>
  )
}
