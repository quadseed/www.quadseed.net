import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'


export default function Home() {
  return (
      <>
        <Head>
          <title>quadseed</title>
          <link rel='icon' href='https://github.com/quadseed.png'></link>
        </Head>

        <Header page='home' />

        <Card />

        <Footer />
      </>
  )
}