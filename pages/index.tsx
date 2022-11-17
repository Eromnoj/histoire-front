import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { ReactElement, useEffect,useState } from 'react'
import type { NextPageWithLayout } from './_app'
import BookShowcase from '../components/BookShowcase'

import Layout from '../components/layout/Layout'
import Filters from '../components/Filters'

const Home: NextPageWithLayout = () => {
  return <p>Index</p>
}

Home.getLayout = function getLayout(page: ReactElement) {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  },[windowWidth])
  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={windowWidth >= 1066 ? styles.main : styles.mainResponsive}>
      <BookShowcase />
      {windowWidth <= 1066 ?
      null :
      <Filters />
    }
     
      </div>
    </Layout>
  )
}

export default Home

