import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import React from 'react'
import { getWorksData } from '../../lib/works'
import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {
  allWorksData: {
      id: string
      title: string
      description: string
  }[]
}

function WorksHome({ allWorksData }: Props) {
  return (
    <>
      <Head>
        <title>Works - quadseed</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <section className='flex flex-col items-center py-24 xl:py-36 space-y-9'>
        <h2 className='font-bold text-4xl'>Works</h2>

        <ul className='space-y-6'>
          {allWorksData.map(({ id, title, description }) => (
            <li key={id} className='space-y-2'>
              <Link
              href={`/works/${id}`}
              className='text-[#f34d00] text-xl'
              >
                {title}
              </Link>

              <p className='text-md text-gray-500'>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  )
}

export default WorksHome

export const getStaticProps: GetStaticProps = async () => {
  const allWorksData = getWorksData()
  return {
      props: {
          allWorksData
      }
  }
}