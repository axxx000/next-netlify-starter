import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Quiet Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Quiet Projects." />
        <p className="description">
        Below is an example of the recent work completed 🚀
        <ul>
        <li><a href="http://thomasjpg.com">thomasjpg</a></li>
        <li><a href="http://henrykingcreative.com">Henry King</a></li>
        <li><a href="http://gracemoorefilm.com">Grace Moore</a></li>
        </ul>

        Using Cargo Collective with custom code (javascript / jquery)

        </p>
      </main>

      <Footer />
    </div>
  )
}
