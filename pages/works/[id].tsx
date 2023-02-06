import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import React from 'react'
import { getAllWorkIds, getWorkData } from '../../lib/works'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Works({ workData 
}: {
  workData: {
    title: string
    description: string
    contentHtml: string
  }
}) {
  const pageTitle = `${workData.title} - www.quadseed.net`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='https://github.com/quadseed.png'></link>
      </Head>

      <Header page='works' />

      <article className='flex flex-col items-center py-24 xl:py-36 space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl'>{workData.title}</h1>
          <p className='text-base text-gray-500'>
            {workData.description}
          </p>
          <hr className="h-px my-8 bg-gray-200 border-1"></hr>
        </div>

        <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      </article>

      <Footer />
    </>
  )
}

export default Works

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkIds()
  return {
      paths,
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params == undefined) {
    return {
      props: {
          title: 'Fetch Error',
          description: 'Error',
          contentHtml: 'error'
      }
  }
  }

  const workData = await getWorkData(params.id as string)
  return {
      props: {
          workData
      }
  }
}