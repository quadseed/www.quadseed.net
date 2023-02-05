import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'


export default function Home() {
  return (
      <div>
        <Head>
          <title>quadseed</title>
        </Head>

        <Header page='home' />

        <Card />

        <Footer />
      </div>
  )
}