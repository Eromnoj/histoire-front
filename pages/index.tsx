import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import BookShowcase from '../components/BookShowcase'

import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <p>Index</p>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BookShowcase />

    </Layout>
  )
}

export default Home

