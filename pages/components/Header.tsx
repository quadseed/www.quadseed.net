import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

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

    </nav>
  )
}

export default Header