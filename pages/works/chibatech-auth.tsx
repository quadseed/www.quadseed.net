import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WorkLink from '../components/WorkLink'

function chibaTechAuth() {
  return (
    <>
      <Head>
        <title>ChibaTech-Auth - www.quadseed.net</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <article className='flex flex-col items-center py-24 xl:py-36 space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl'>ChibaTech-Auth</h1>
          <p className='text-base text-gray-500'>
          千葉工大用の非公式認証ライブラリ
          </p>
          <hr className="h-px my-8 bg-gray-200 border-1"></hr>
        </div>

        <div className='px-7 lg:px-60 space-y-2'>
          <p>千葉工大の学生・教員用にサービスを作成する場合に利用できる認証ライブラリです。</p>
          <p>
            学生や教員に割り当てられたGoogle WorkspaceアカウントをOAuthで認証した上で、
            Googleから返却された情報をアドレスを解析したデータを返却します。
          </p>
          <div className='text-[#f34d00] underline-offset-4 decoration-2 space-y-2 my-2'>
            <WorkLink
              link='https://chiba-tech-auth-demo.vercel.app'
              title='デモサイト'
            />

            <WorkLink
              link='https://github.com/quadseed/ChibaTech-Auth'
              title='GitHub'
            />

            <WorkLink
              link='https://www.npmjs.com/package/chibatech-auth'
              title='NPM'
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

export default chibaTechAuth