import { useRouter } from 'next/router'
import React from 'react'

const Nav = () => {
  const router = useRouter()
  
  return (
    <nav className='w-full flex items-center gap-2 h-14 p-4'>
        <i className="fi-rr-menu-burger"></i>
        <button className='ml-auto'>Pengaturan</button>
        <button>Pengaturan</button>
    </nav>
  )
}

export default Nav