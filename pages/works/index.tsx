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

      <section className='flex min-h-screen flex-col items-center space-y-8'>
        <h2 className='font-bold'>Works</h2>

        <ul>
          {allWorksData.map(({ id, title, description }) => (
            <li key={id}>
              <Link href={`/works/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                <p>{description}</p>
              </small>
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