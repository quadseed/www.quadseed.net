import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WorkLink from '../components/WorkLink'

function archivePlayer() {
  return (
    <>
      <Head>
        <title>Archive-Player Project - www.quadseed.net</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <article className='flex flex-col items-center py-24 xl:py-36 space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl'>Archive-Player Project</h1>
          <p className='text-base text-gray-500'>
          アーカイブプレイヤー （開発中）
          </p>
          <hr className="h-px my-8 bg-gray-200 border-1"></hr>
        </div>

        <div className='px-7 lg:px-60 space-y-3'>
          <p>
            yt-dlpなどで保存した動画を快適に視聴するための動画プレイヤーです。
          </p>
          <p>
            現在開発中です...
          </p>

          <Image src='/Archive-Player-Frontend.png' width={1000} height={200} alt='Archive-Player-Frontend Example' priority={true} />

          <div className='space-y-2'>
                <h4 className='font-semibold'>使用言語</h4>
                <p>・フロントエンド - TypeScript</p>
                <p>・バックエンド - Go</p>
              </div>
          <div className='text-[#f34d00] underline-offset-4 decoration-2 space-y-2 my-2 rounded-md border-'>
            <WorkLink
              link='https://github.com/quadseed/archive-player-frontend'
              title='フロントエンド - GitHub'
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

export default archivePlayer