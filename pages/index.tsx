import Head from 'next/head'
import Card from './components/Card'


export default function Home() {
  return (
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <Head>
          <title>quadseed</title>
        </Head>

        <Card />
      </div>
  )
}