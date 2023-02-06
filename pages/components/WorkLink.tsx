import Link from 'next/link'
import React from 'react'

type Props = {
  link: string
  title: string
}

function WorkLink({ link, title }: Props) {
  return (
    <div className='text-[#f34d00] underline-offset-4 decoration-2'>
      <Link
        href={link}
        className='hover:text-orange-500 hover:underline transition-all duration-200'
      >
        {title}
      </Link>
    </div>
  )
}

export default WorkLink