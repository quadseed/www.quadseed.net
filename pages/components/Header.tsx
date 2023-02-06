import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CgDarkMode } from 'react-icons/cg'

type Props = {
  page: string
}

function Header({ page }: Props) {
  const router = useRouter()

  return (
    <nav className='fixed top-0 px-6 2xl:px-80 py-5 flex min-w-full items-center bg-white justify-end space-x-5 underline-offset-8 decoration-2'>
      <Link href='/'>
        <p
        className={page == 'home' ? 'underline font-bold hover:cursor-pointer' : 'font-bold hover:cursor-pointer'}
        >
          Home
        </p>
      </Link>

      <Link href='/works'>
        <p
        className={page == 'works' ? 'underline font-bold hover:cursor-pointer' : 'font-bold hover:cursor-pointer'}
        >
          Works
        </p>
      </Link>

      <CgDarkMode className='w-6 h-6 hover:cursor-pointer' />
    </nav>
  )
}

export default Header