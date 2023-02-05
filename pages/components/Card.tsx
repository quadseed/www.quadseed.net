import React from 'react'
import Image from 'next/image'
import { VscGithub, VscTwitter } from 'react-icons/vsc'
import { useRouter } from 'next/router'

function card() {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center space-y-8 py-60 xl:py-80'>
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
        <VscGithub
        className='w-9 h-9 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full'
        onClick={() => {router.push('https://github.com/quadseed')}}
        />
        <VscTwitter
        className='w-9 h-9 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full'
        onClick={() => {router.push('https://twitter.com/t_vx_')}}
        />
      </div>
    </div>
  )
}

export default card