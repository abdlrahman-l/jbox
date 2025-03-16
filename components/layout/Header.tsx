'use client';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Header = () => {

  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/'

  return (
    <header className='w-full flex justify-between px-4 py-5 items-center sticky top-0 z-50'>

      {
        !isHomePage ? (
          <nav className='bg-[#191a1e] rounded-full p-4' onClick={() => router.back()}>
            <Image
              src="icons/arrow-left.svg"
              width={20}
              height={20}
              alt='Back'
            />
          </nav>
        ) : <nav className='w-[52px]' />
      }
      <nav className='relative w-36 h-8'>
        <Image
          src="icons/logo.svg"
          fill
          alt='Logo'
        />
      </nav>

      <button className='bg-[#191a1e] rounded-full p-4' onClick={() => router.refresh()}>
        <Image
          src="icons/refresh.svg"
          width={20}
          height={20}
          alt='Refresh'
        />
      </button>
    </header>
  )
}

export default Header