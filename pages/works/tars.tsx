import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function tars() {
  return (
    <>
      <Head>
        <title>TARS Project - www.quadseed.net</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <article className='flex flex-col items-center py-24 xl:py-36 space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl'>TARS Project</h1>
          <p className='text-base text-gray-500'>
          ツイキャス自動録画システム
          </p>
          <hr className="h-px my-8 bg-gray-200 border-1"></hr>
        </div>

        <div>
          TARS-Server, TARS-UI, TARS-Outpost
          <Image src='/TARS-Server.gif' width={1000} height={200} alt='TARS-Server Example' />
        </div>
      </article>

      <Footer />
    </>
  )
}

export default tars