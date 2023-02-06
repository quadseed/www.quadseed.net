import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WorkLink from '../components/WorkLink'

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

        <div className='px-7 lg:px-60 space-y-5'>
          <p>指定した配信者のライブ配信を録画・コメント欄を自動的に保存します。</p>
          <p>このシステムは3つのソフトウェアで構成されています。</p>

          <div className='space-y-6'>
            <div className='space-y-2'>
              <h3 className='font-semibold'>・TARS-Server</h3>
              <p>録画タスクを処理する中央のサーバです。</p>
              <p>ツイキャスの開発アカウントメニューからアプリケーションを発行する必要があります。</p>
              <Image
              src='/TARS-Server.gif'
              width={1000}
              height={200}
              alt='TARS-Server Example'
              priority={true}
              className='rounded-xl'
              />

              <WorkLink link='https://github.com/quadseed/TARS-Server' title='TARS-Server - GitHub' />
              <WorkLink link='https://github.com/quadseed/TARS-Server/pkgs/container/tars-server' title='Docker Image - GitHub Container Registry' />

            </div>

            <div className='space-y-2'>
              <h3 className='font-semibold'>・TARS-Outpost</h3>
              <p>ツイキャス側で提供されているWebHookを中継してTARS-ServerへWebsocketでデータを受け渡します。</p>
              <p>インターネット側からのアクセスを許可する必要があります。</p>
              <WorkLink link='https://github.com/quadseed/TARS-Outpost' title='TARS-Outpost - GitHub' />
            </div>

            <div className='space-y-2'>
              <h3 className='font-semibold'>・TARS-UI</h3>
              <p>TARS-Server用のWebGUIです。</p>
              <p>現在、作成中です...</p>
            </div>


          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

export default tars