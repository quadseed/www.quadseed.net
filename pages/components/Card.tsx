import React from 'react'
import Image from 'next/image'
import { VscGithub, VscTwitter } from 'react-icons/vsc'
import { useRouter } from 'next/router'
import Link from 'next/link'

function card() {
  const router = useRouter()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center space-y-8'>
      <div className='flex items-center space-x-5'>
        <Image
        className="rounded-full"
        src="https://github.com/quadseed.png"
        alt='quadseed profile image'
        width={100}
        height={100}
        />
        <p className='text-3xl font-bold'>quadseed</p>
      </div>

      <div className='justify-center flex items-center space-x-6'>
        <Link href='https://github.com/quadseed'>
          <VscGithub
          className='w-9 h-9 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full'
          />
        </Link>
        <Link href='https://twitter.com/t_vx_'>
          <VscTwitter
          className='w-9 h-9 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full'
          />
        </Link>
      </div>
    </div>
  )
}

export default card