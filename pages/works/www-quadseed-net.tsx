import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function quadseed() {
  return (
    <>
      <Head>
        <title>www.quadseed.net - www.quadseed.net</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <article className='flex flex-col items-center py-24 xl:py-36 space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl'>www.quadseed.net</h1>
          <p className='text-base text-gray-500'>
          個人サイト
          </p>
          <hr className="h-px my-8 bg-gray-200 border-1"></hr>
        </div>

        <div className='px-7 lg:px-60 space-y-3'>
          <p>
            このサイトです。
          </p>

          <div className='space-y-2'>
                <h4 className='font-semibold'>技術スタック</h4>
                <p>・フレームワーク - Next.js</p>
                <p>・スタイリング - TailwindCSS</p>
                <p>・ホスト - Vercel</p>
              </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

export default quadseed