import React from 'react'
import Image from 'next/image'
import { VscGithub, VscTwitter } from 'react-icons/vsc'
import { useRouter } from 'next/router'

function card() {
  const router = useRouter()

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-5'>
        <Image className="rounded-full" src="https://github.com/quadseed.png" alt='quadseed profile image' width={80} height={80} />
        <p className='text-2xl font-bold'>quadseed</p>
      </div>

      <div className='ml-20 flex items-center space-x-4'>
        <VscGithub className='w-7 h-7 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full' onClick={() => {router.push('https://github.com/quadseed')}} />
        <VscTwitter className='w-7 h-7 text-gray-500 hover:cursor-pointer transition-all duration-200 hover:shadow-2xl rounded-full' onClick={() => {router.push('https://twitter.com/t_vx_')}} />
      </div>
    </div>
  )
}

export default card