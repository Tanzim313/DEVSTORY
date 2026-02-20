import React from 'react'

export default function DashboardLayout({sidebar,main}) {
  return (
    <div className='grid grid-cols-12 min-h-screen'>

        <div className='col-span-3 border-r'>
            {sidebar}
        </div>

        <div className='col-span-9 '>
            {main}
        </div>
      
    </div>
  )
}
