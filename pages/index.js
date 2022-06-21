import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Karol Frankowski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi, my name is Karol" />
        <p className="description">
          I am a frontend developer, crypto and DIY enthusiast, and a father of 2 :) 
        </p>
      </main>

      <Footer />
    </div>
  )
}
