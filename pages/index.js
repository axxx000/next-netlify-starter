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
        <code><p>A Freelance Business dedicated to helping individuals get their thing online.</p>

        Below is an example of the recent work completed 🚀
        <p>
        <li>Custom built in <a href="http://cargocollective.com">Cargo Collective</a> using Javascript and Jquery.  
          <ul>• <a href="http://thomasjpg.com">Thomasjpg</a></ul>
          <ul>• <a href="http://henrykingcreative.com">Henry King</a></ul>
          <ul>• <a href="http://gracemoorefilm.com">Grace Moore</a></ul>

        </li>
        </p>
        </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
