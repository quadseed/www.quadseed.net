import { useRouter } from 'next/router'
import React from 'react'
import { CgDarkMode } from 'react-icons/cg'

type Props = {
  page: string
}

function Header({ page }: Props) {
  const router = useRouter()

  return (
    <nav className='fixed top-0 px-6 2xl:px-80 py-5 flex min-w-full items-center justify-end space-x-5 underline-offset-8 decoration-2'>
      <p
      className={page == 'home' ? 'underline font-bold hover:cursor-pointer' : 'font-bold hover:cursor-pointer'}
      onClick={() => {router.push('/')}}
      >
        Home
      </p>
      <p
      className={page == 'works' ? 'underline font-bold hover:cursor-pointer' : 'font-bold hover:cursor-pointer'}
      onClick={() => {router.push('/works')}}
      >
        Works
      </p>

      <CgDarkMode className='w-6 h-6 hover:cursor-pointer' />
    </nav>
  )
}

export default Header