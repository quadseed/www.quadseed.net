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

      <article className='flex min-h-screen flex-col items-center justify-center space-y-8'>
        <h1>{workData.title}</h1>
        <div>
          {workData.description}
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