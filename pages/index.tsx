import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import BookShowcase from '../components/BookShowcase'

import Layout from '../components/layout/Layout'
import Filters from '../components/Filters'

const Home: NextPageWithLayout = () => {
  return <p>Index</p>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
      <BookShowcase />
      <Filters />
      </div>
    </Layout>
  )
}

export default Home

