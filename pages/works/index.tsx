import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


function WorksHome() {
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
            <li key='TARS' className='space-y-2'>
              <Link
              href='/works/tars'
              className='text-[#f34d00] text-xl'
              >
                TARS Project
              </Link>
              <p className='text-md text-gray-500'>ツイキャス自動録画システム</p>
            </li>
        </ul>
      </section>

      <Footer />
    </>
  )
}

export default WorksHome