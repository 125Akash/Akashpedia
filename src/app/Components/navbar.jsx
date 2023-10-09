import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-purple-900 flex text-white justify-end font-semibold'>
      <Link href="/" className='m-1 mr-auto ml-4'><Image src="/man.png" width={40} height={0} alt='navIcon' /></Link>
      <ul className='flex my-3 space-x-7 mr-6 hover:cursor-pointer'>
        <li className='hover:text-yellow-300'><Link href="/">Home</Link></li>
        <li className='hover:text-yellow-300'><Link href="/Whoami">Who Am I</Link></li>
        <li className='hover:text-yellow-300'><Link href="/Certificate">Certificates</Link></li>
        <li className='hover:text-yellow-300'><Link href="/Skills">Skills</Link></li>
        <li className='hover:text-yellow-300'><Link href="/Projects">Projects</Link></li>
        <li className='hover:text-yellow-300'><Link href="/ContactMe">Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
